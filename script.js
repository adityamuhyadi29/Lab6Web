
// Script Mini Project
// Mengambil elemen HTML
const form = document.getElementById("registrationForm");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");
const catatan = document.getElementById("catatan");

const namaError = document.getElementById("namaError");
const emailError = document.getElementById("emailError");
const sesiError = document.getElementById("sesiError");

const message = document.getElementById("message");

// Ringkasan input
const summaryNama = document.getElementById("summaryNama");
const summaryEmail = document.getElementById("summaryEmail");
const summarySesi = document.getElementById("summarySesi");

// Penghitung karakter
const charCount = document.getElementById("charCount");


// FUNGSI 1: Ringkasan input secara langsung
function updateSummary() {
    summaryNama.textContent = nama.value || "-";
    summaryEmail.textContent = email.value || "-";
    summarySesi.textContent = sesi.value || "-";
}


// FUNGSI 2: Penghitung karakter
catatan.addEventListener("input", function() {
    charCount.textContent = catatan.value.length;
});


// Event input untuk memperbarui ringkasan
nama.addEventListener("input", updateSummary);

email.addEventListener("input", updateSummary);


// Event change untuk pilihan sesi
sesi.addEventListener("change", updateSummary);


// FUNGSI 3: Validasi formulir
form.addEventListener("submit", function(event) {

    // Mencegah halaman refresh
    event.preventDefault();

    let valid = true;

    // Menghapus pesan sebelumnya
    namaError.textContent = "";
    emailError.textContent = "";
    sesiError.textContent = "";

    nama.classList.remove("invalid");
    email.classList.remove("invalid");
    sesi.classList.remove("invalid");

    message.textContent = "";
    message.className = "";

    // Validasi nama
    if (nama.value.trim().length < 3) {
        namaError.textContent =
            "Nama harus diisi minimal 3 karakter.";

        nama.classList.add("invalid");
        valid = false;
    }

    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent =
            "Masukkan alamat email yang valid.";

        email.classList.add("invalid");
        valid = false;
    }

    // Validasi sesi
    if (sesi.value === "") {
        sesiError.textContent =
            "Silakan pilih sesi workshop.";

        sesi.classList.add("invalid");
        valid = false;
    }

    // Jika data tidak valid
    if (!valid) {
        message.textContent =
            "Pendaftaran gagal! Silakan periksa kembali data Anda.";

        message.classList.add("error-message");
        return;
    }

    // Jika data valid
    message.textContent =
        "Selamat! Pendaftaran workshop berhasil dilakukan.";

    message.classList.add("success");

});


// FUNGSI 4: Tombol reset
form.addEventListener("reset", function() {

    setTimeout(function() {

        namaError.textContent = "";
        emailError.textContent = "";
        sesiError.textContent = "";

        nama.classList.remove("invalid");
        email.classList.remove("invalid");
        sesi.classList.remove("invalid");

        message.textContent = "";
        message.className = "";

        charCount.textContent = "0";

        updateSummary();

    }, 0);

});
