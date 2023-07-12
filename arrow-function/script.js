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
let mahasiswa = ['Ridwan', 'Muhamad', 'RidwanMuhamad']
// let jumlahHuruf = mahasiswa.map(function (nama){
//     return nama.length
// })
// console.log(jumlahHuruf)

// jika menggunakan arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length)
// console.log(jumlahHuruf)

let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length}))
console.table(jumlahHuruf)