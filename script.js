function showPreview(data, gambarSrc) {
    const preview = document.getElementById('preview');
    let html = `
        <!-- Header sekolah -->
        <div class="school-header">
            <img src="images/logo.png" alt="Logo Sekolah" class="logo">
            <div class="school-text">
                <h2>SK LUBOK TERUA</h2>
                <p>28500 LANCHANG, PAHANG DARUL MAKMUR</p>
            </div>
            <img src="images/logo2.png" alt="Logo Tambahan" class="logo">
        </div>

        <!-- Tajuk utama -->
        <h1 class="main-title">ONE PAGE REPORT</h1>

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

    // Gambar dalam grid 2x2
    if (gambarSrc.length > 0) {
        html += '<h3>Gambar:</h3><div class="gambar-grid">';
        gambarSrc.forEach(src => {
            html += `<div class="gambar-wrapper"><img src="${src}" alt="Gambar"></div>`;
        });
        html += '</div>';
    }

    html += `<button onclick="window.print()">Cetak / Save PDF</button>`;
    preview.innerHTML = html;
}
