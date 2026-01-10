function generateReport() {
    const form = document.getElementById('reportForm');
    const preview = document.getElementById('preview');

    // Ambil semua data dari borang
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

    // Ambil 4 gambar
    for (let i = 1; i <= 4; i++) {
        const file = form['gambar' + i].files[0];
        if (file) data.gambar.push(file);
    }

    // Preview dengan gambar
    if (data.gambar.length > 0) {
        let loaded = 0;
        const gambarSrc = [];

        data.gambar.forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = function(e) {
                gambarSrc[index] = e.target.result;
                loaded++;
                if (loaded === data.gambar.length) showPreview(data, gambarSrc);
            };
            reader.readAsDataURL(file);
        });
    } else {
        showPreview(data, []);
    }
}

function showPreview(data, gambarSrc) {
    const preview = document.getElementById('preview');
    let html = `
        <h2>Laporan Program</h2>
        <p><strong>Nama Program:</strong> ${data.program}</p>
        <p><strong>Tarikh:</strong> ${data.tarikh}</p>
        <p><strong>Masa:</strong> ${data.masa}</p>
        <p><strong>Tempat:</strong> ${data.tempat}</p>
        <p><strong>Anjuran:</strong> ${data.anjuran}</p>
        <p><strong>Objektif:</strong> ${data.objektif}</p>
        <p><strong>Penglibatan:</strong> ${data.penglibatan}</p>
        <p><strong>Ulasan:</strong> ${data.ulasan}</p>
    `;

    if (gambarSrc.length > 0) {
        html += '<h3>Gambar:</h3><div class="gambar-grid">';
        gambarSrc.forEach(src => html += `<img src="${src}" alt="Gambar">`);
        html += '</div>';
    }

    html += `<button onclick="window.print()">Cetak / Save PDF</button>`;
    preview.innerHTML = html;
}
