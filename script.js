// Mengubah trks dengan DOM
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Saya Suka Belajar javascript DOM";
pesan.textContent = "Konten berhasil di ubah oleh java script";

// Event click
const tombol = document.getElementById("tombolAksi");
tombol.addEventListener("click", function() {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});
// Mengubah kelas dan gaya css
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});
// Even input dan penghitung karakter
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");
namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});