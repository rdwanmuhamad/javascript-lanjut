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
function satu() {
  var nama = "Muhamad Ridwan";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "ridwan";
satu();
dua("muhamad");
console.log(nama);
