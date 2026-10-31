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
});```

### Result

![HAsil Even Click](screenshot/ss2.png)