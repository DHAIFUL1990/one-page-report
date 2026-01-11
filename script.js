function generateReport() {

    const f = document.getElementById("reportForm");
    const preview = document.getElementById("preview");

    const data = {
        program: f.program.value,
        tarikh: f.tarikh.value,
        masa: f.masa.value,
        tempat: f.tempat.value,
        anjuran: f.anjuran.value,
        objektif: f.objektif.value,
        penglibatan: f.penglibatan.value,
        ulasan: f.ulasan.value
    };

    let files = [];
    for (let i = 1; i <= 4; i++) {
        if (f["gambar" + i].files[0]) {
            files.push(f["gambar" + i].files[0]);
        }
    }

    if (files.length === 0) {
        renderReport(data, []);
        return;
    }

    let images = [], loaded = 0;
    files.forEach((file, i) => {
        const reader = new FileReader();
        reader.onload = e => {
            images[i] = e.target.result;
            loaded++;
            if (loaded === files.length) renderReport(data, images);
        };
        reader.readAsDataURL(file);
    });
}

function renderReport(data, images) {

    let html = `
    <div class="report-box">

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
            html += `<div class="gambar-wrapper"><img src="${img}"></div>`;
        });
        html += `</div>`;
    }

    html += `
        <div class="action-bar">
            <button onclick="window.print()">Cetak / Simpan PDF</button>
        </div>

    </div>`;

    preview.innerHTML = html;
}
