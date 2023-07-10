// 2.1 EXECUTION CONTEXT, HOISTING, & SCOPE

// console.log(nama)
// var nama = 'ridwan'

// creation phase pada global context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase
// console.log(sayHello());

// var nama = "ridwan";
// var umur = 29;

// function sayHello() {
//   return `Halo, nama saya ${nama}, umur saya ${umur} tahun.`;
// }

// function membuat local execution context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = "Muhamad Ridwan";
// var username = "rdwanmuhamad_";

// function cetakURL(username) {
//   var instagramURL = "https://instagram.com/";
//   return instagramURL + username;
// }

// console.log(cetakURL(username));

// function a() {
//   console.log("ini a");

//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }
// a();

// latihan
// function satu() {
//   var nama = "Muhamad Ridwan";
//   console.log(nama);
// }

// function dua() {
//   console.log(nama);
// }

// console.log(nama);
// var nama = "ridwan";
// satu();
// dua("muhamad");
// console.log(nama);

// lexical scope
// function init() {
//   // let nama = "ridwan";
//   // let umur = 29;
//   return function (nama) {
//     console.log(nama);
//     // console.log(umur);
//   };
//   // console.dir(tampilNama);
//   return tampilNama;
// }

// let panggilNama = init();
// panggilNama("ridwan");

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
//   };
// }

// let selamatPagi = ucapkanSalam('Pagi')
// let selamatSiang = ucapkanSalam('Siang')
// let selamatMalam = ucapkanSalam('Malam')

// selamatPagi('Ridwan')
// console.dir(selamatMalam("Muhamad"));

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
