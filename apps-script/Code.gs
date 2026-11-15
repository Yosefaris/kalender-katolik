// Belajar Ceria — prototipe v4.2 (BC-V4.2) — dwibahasa, angka 1-100, 100 soal, kuis 100 soal, klip suara anak (nonaktif)
// Code.gs: hanya menyajikan Index.html.
// Semua konten & progres tersimpan di dalam Index.html (localStorage di
// perangkat), sehingga prototipe ini jalan tanpa Spreadsheet.
// Nanti konten bisa dipindah ke Sheet (tab Huruf/Angka/Soal) bila mau.
function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Belajar Ceria — Belajar Sambil Bermain (4-6 Tahun)')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
