# Lab 6 Web
## JavaScript & Event Handling

### 1. Mengubah Teks dengan DOM

Pada latihan ini, kita mempelajari cara mengubah teks pada elemen HTML menggunakan JavaScript melalui konsep **DOM (Document Object Model)**.

Pertama, buat elemen HTML menggunakan tag `<h1>` dengan atribut `id="judul"`:

```html
<h1 id="judul">Latihan DOM</h1>
```

Selanjutnya, gunakan JavaScript untuk mengubah isi teks dari elemen tersebut:

```javascript
judul.textContent = "Saya Suka Belajar JavaScript DOM";
```

**Kesimpulan:**

Berdasarkan latihan di atas, dapat disimpulkan bahwa JavaScript dapat digunakan untuk mengubah isi teks pada elemen HTML melalui DOM dengan memanfaatkan properti `textContent`.

###  Result

Berikut adalah hasil dari latihan mengubah teks menggunakan JavaScript DOM:

![Hasil Latihan DOM](screenshot/ss1.png)

### 2. Even click

Program menggunakan addEventListener() untuk mendeteksi ketika tombol diklik.

```javascript
const tombol = document.getElementById("tombolAksi");

tombol.addEventListener("click", function() {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
}); 
```

### Result

![HAsil Even Click](screenshot/ss2.png)

### 3. Mengubah kelas dan gaya CSS

Mengatur tampilan dan desain elemen HTML.
Class yang digunakan:
```css
.highlight
```
Mengubah warna teks.
Memberikan warna background.
Menambahkan garis di sebelah kiri.
Memberikan jarak dalam elemen menggunakan padding.

```css
.teks-besar
```
Memperbesar ukuran teks menjadi 1.4rem.

JavaScript (script.js)

Fungsi: Membuat halaman web menjadi interaktif.

A. Mengakses elemen DOM
Menggunakan document.getElementById() untuk mengambil elemen HTML berdasarkan ID.
Menggunakan textContent untuk mengganti isi teks pada judul dan paragraf.

C. Event Click

Menggunakan addEventListener("click") untuk mendeteksi ketika tombol diklik.

Ketika tombol diklik, program menampilkan waktu saat tombol ditekan menggunakan Date() dan toLocaleTimeString().

D. Manipulasi Class CSS

Menggunakan classList.toggle() untuk menambahkan atau menghapus class CSS secara bergantian ketika tombol diklik.

### Result

![Gambar Perubahan teks](screenshot/ss3.png)

### 4. Even Input dan Penghitung Karakter

Menambahkan Even input yang di ketik akan otomatis menghitung jumlah karekter

``html
<input type="text" id="namaInput" maxlength="40">

<p>Jumlah karakter: 
    <span id="jumlahKarakter">0</span>
</p>
```
Penjelasan:
- input type="text": Membuat kolom untuk memasukkan teks.
- id="namaInput": Identitas kolom input agar bisa diakses JavaScript.
- maxlength="40": Membatasi input maksimal 40 karakter.
- <p>: Menampilkan tulisan jumlah karakter.
- <span id="jumlahKarakter">0</span>: Tempat menampilkan hasil hitungan karakter.

```javascript
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});
```
Penjelasan:
namaInput.value: Mengambil teks yang diketik pengguna.
.length: Menghitung jumlah karakter dalam teks.
textContent: Menampilkan hasil hitungan ke HTML.

### Result

![Hasil penghitung karakter](screenshot/ss4.png)

### 5. Validasi form pendaftaran

JavaScript memeriksa data yang dimasukkan pengguna sebelum form diproses atau dikirim.

Ada 3 data yang harus diperiksa:

1. Nama lengkap wajib diisi.
2. Email harus memiliki format yang valid.
3. Usia harus berupa bilangan bulat antara 17 sampai 100 tahun.

Kode dan Fungsi

getElementById() -> Mengambil elemen HTML
addEventListener("submit") -> Mendeteksi pengiriman form
preventDefault() -> Mencegah form terkirim otomatis
.value ->	Mengambil nilai input
.trim() ->	Menghapus spasi awal dan akhir
Number() -> Mengubah teks menjadi angka
Regex.test() -> Memeriksa format email
Number.isInteger() -> Memeriksa bilangan bulat
textContent	Menampilkan pesan
form.reset() -> Mengosongkan form

### Result

![Hasil validasi](screenshot/ss5.png)

![HAsil Validasi](screenshot/ss6.png)

### 6. To-do List

Praktikum ini membuat aplikasi To-Do List (Daftar Tugas) sederhana menggunakan HTML, CSS, dan JavaScript DOM. Aplikasi ini digunakan untuk menambahkan tugas baru dan menandai tugas yang sudah selesai.
2. Fungsi HTML
HTML digunakan untuk membuat struktur halaman aplikasi.
- <section>: Membuat bagian daftar tugas.
- <h2>: Menampilkan judul Daftar Tugas.
- <input>: Memasukkan tugas baru.
- <button>: Menambahkan tugas.
- <p>: Menampilkan pesan pemberitahuan.
- <ul>: Menampilkan daftar tugas.
3. Fungsi CSS
CSS digunakan untuk mengatur tampilan aplikasi.
- .selesai span: Memberikan efek coretan dan warna abu-abu pada tugas yang selesai.
- li: Memberikan jarak bawah 8 piksel pada setiap daftar tugas.
4. Fungsi JavaScript
JavaScript digunakan untuk membuat aplikasi menjadi interaktif.
- getElementById(): Mengambil elemen HTML berdasarkan ID.
- addEventListener("click"): Mendeteksi klik tombol.
- value.trim(): Mengambil teks input dan menghapus spasi di awal serta akhir.
- createElement(): Membuat elemen HTML baru.
- append(): Memasukkan teks dan tombol ke dalam elemen daftar.
- appendChild(): Menambahkan tugas ke dalam daftar.
- classList.toggle(): Menambahkan atau menghapus class selesai.
- classList.contains(): Memeriksa status tugas.
- focus(): Mengarahkan kursor kembali ke kolom input.
5. Cara Kerja Program
1. Pengguna memasukkan tugas pada kolom input.
2. Menekan tombol Tambah untuk memasukkan tugas.
3. Jika input kosong, program menampilkan pesan peringatan.
4. Jika input terisi, tugas ditambahkan ke daftar.
5. Pengguna menekan tombol Tandai selesai untuk mencoret tugas.
6. Pengguna dapat membatalkan status selesai dengan menekan tombol tersebut kembali.

### Result

![Gambar 7](screenshot/ss7.png)

![gambar 8](screenshot/ss8.png)