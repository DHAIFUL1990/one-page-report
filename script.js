function generateReport() {

    const form = document.getElementById("reportForm");
    const preview = document.getElementById("preview");

    const data = {
        program: form.program.value,
        tarikh: form.tarikh.value,
        masa: form.masa.value,
        tempat: form.tempat.value,
        anjuran: form.anjuran.value,
        objektif: form.objektif.value,
        penglibatan: form.penglibatan.value,
        ulasan: form.ulasan.value,
        gambar: []
    };

    let files = [];
    for (let i = 1; i <= 4; i++) {
        let file = form["gambar" + i].files[0];
        if (file) files.push(file);
    }

    if (files.length === 0) {
        renderReport(data, []);
        return;
    }

    let images = [];
    let loaded = 0;

    files.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            images[index] = e.target.result;
            loaded++;
            if (loaded === files.length) {
                renderReport(data, images);
            }
        };
        reader.readAsDataURL(file);
    });
}

function renderReport(data, images) {

    let html = `
        <div class="school-header">
            <img src="images/logo.png" class="logo">
            <div class="school-text">
                <h2>SK LUBOK TERUA</h2>
                <p>28500 LANCHANG, PAHANG DARUL MAKMUR</p>
            </div>
            <img src="images/logo2.png" class="logo">
        </div>

        <h1 class="main-title">ONE PAGE REPORT</h1>

        <p><strong>Nama Program:</strong> ${data.program}</p>
        <p><strong>Tarikh:</strong> ${data.tarikh}</p>
        <p><strong>Masa:</strong> ${data.masa}</p>
        <p><strong>Tempat:</strong> ${data.tempat}</p>
        <p><strong>Anjuran:</strong> ${data.anjuran}</p>
        <p><strong>Objektif:</strong><br>${data.objektif}</p>
        <p><strong>Penglibatan:</strong><br>${data.penglibatan}</p>
        <p><strong>Ulasan:</strong><br>${data.ulasan}</p>
    `;

    if (images.length > 0) {
        html += `<h3>Dokumentasi Bergambar</h3>
                 <div class="gambar-grid">`;

        images.forEach(img => {
            html += `
                <div class="gambar-wrapper">
                    <img src="${img}">
                </div>`;
        });

        html += `</div>`;
    }

    html += `<button onclick="window.print()">Cetak / Simpan PDF</button>`;

    preview.innerHTML = html;
}
