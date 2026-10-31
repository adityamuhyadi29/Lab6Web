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