// template literal / template string

const nama = "Muhamad Ridwan";
const umur = 29;

console.log(`Halo, nama saya ${nama}, dan umur saya ${umur}`);
console.log("Halo, nama saya" + nama + ", dan umur saya " + umur + " tahun.");

// embedded expression
console.log(`${1 + 1}`);
// console.log(`${alert("Hello, World!")}`);

const x = 10;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// html fragments
const mhs = {
  nama: "Muhamad Ridwan",
  umur: 29,
  nim: "234521",
  email: "admin@email.test",
};

const el = `<div class="mhs">

<h2>${mhs.nama}</h2>
<span>${mhs.umur}</span>
<span>${mhs.nim}</span>
<span>${mhs.email}</span>

</div>`;

console.log(el);
