// script.js - Untuk One Page Report

function generateReport() {
    const form = document.getElementById('reportForm');
    const preview = document.getElementById('preview');

    // Ambil nilai dari borang
    const nama = form.nama.value;
    const program = form.program.value;
    const gambarFile = form.gambar.files[0];

    // Kalau ada gambar, baca sebagai data URL
    if (gambarFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            showPreview(nama, program, e.target.result);
        };
        reader.readAsDataURL(gambarFile);
    } else {
        showPreview(nama, program, null);
    }
}

function showPreview(nama, program, gambarSrc) {
    const preview = document.getElementById('preview');
    let html = `
        <h2>Laporan Pelajar</h2>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Program:</strong> ${program}</p>
    `;

    if (gambarSrc) {
        html += `<img src="${gambarSrc}" alt="Gambar Pelajar" style="max-width:100%; margin-top:10px;">`;
    }

    html += `<button onclick="window.print()">Cetak / Save PDF</button>`;

    preview.innerHTML = html;
}
