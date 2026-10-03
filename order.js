const pilihanLayanan = document.querySelectorAll('input[name="layanan"]');
const ringkasanLayanan = document.getElementById('ringkasanLayanan');
const ringkasanHarga = document.getElementById('ringkasanHarga');
const inputNama = document.getElementById('nama');
const inputTanggal = document.getElementById('tanggal');
const hargaSatuan = document.getElementById('totalHarga');

function rupiah(nilai) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(nilai);
}

pilihanLayanan.forEach((pilihan) => pilihan.addEventListener('change', () => {
  ringkasanLayanan.textContent = pilihan.value;
  ringkasanHarga.textContent = rupiah(Number(pilihan.dataset.harga));
  hargaSatuan.textContent = rupiah(Number(pilihan.dataset.harga));
}));

inputNama.addEventListener('input', () => {
  document.getElementById('ringkasanNama').textContent = inputNama.value || '-';
});

inputTanggal.addEventListener('change', () => {
  document.getElementById('ringkasanTanggal').textContent = inputTanggal.value
    ? new Date(`${inputTanggal.value}T00:00:00`).toLocaleDateString('id-ID')
    : '-';
});
