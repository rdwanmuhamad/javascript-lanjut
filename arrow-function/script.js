// function expression
// const tampilNama = function(nama){
//     return `Halo, ${nama}`
// }
// console.log(tampilNama('Muhamad Ridwan'))

// mengubah ke arrow function
// jika hanya satu parameter
// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };
// console.log('Muhamad Ridwan')

// jika lebih dari satu parameter
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };
// console.log('Muhamad Ridwan', 'Siang')

// implisit return
// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log("Muhamad Ridwan");

// tanpa parameter
// const tampilNama = () => `Hello World!`
// console.log(tampilNama())

// function map
// let mahasiswa = ['Ridwan', 'Muhamad', 'RidwanMuhamad']
// let jumlahHuruf = mahasiswa.map(function (nama){
//     return nama.length
// })
// console.log(jumlahHuruf)

// jika menggunakan arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length)
// console.log(jumlahHuruf)

// let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length}))
// console.table(jumlahHuruf)

// konsep this pada arrow function

// constructor function
// const Mahasiswa = function () {
//   this.nama = "Muhamad Ridwan";
//   this.umur = 29;
//   this.sayHello = () => {
//     console.log(
//       `Halo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun`
//     );
//   };
// };
// const ridwan = new Mahasiswa();

// mengubah ke arrow function
// object literal
// const mhs1 = {
//   nama: "Ridwan",
//   umur: 29,
//   sayHello: () => {
//     console.log(
//       `Halo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun`
//     );
//   },
// };

// const Mahasiswa = function () {
//   this.nama = "Muhamad Ridwan";
//   this.umur = 29;
//   this.sayHello = () => {
//     console.log(
//       `Halo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun`
//     );
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };
// const ridwan = new Mahasiswa();

// latihan penggunaan arrow function
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";
  
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu]
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
