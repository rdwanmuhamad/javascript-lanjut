// callback
// asynchronous callback
// function halo(nama){
//     alert(`Halo, ${nama}`)
// }

// function tampliPesan(callback) {
//   const nama = prompt("Masukkan nama : ");
//   callback(nama);
// }

// // tampliPesan(halo)
// tampliPesan((nama) => alert(`halo, ${nama}`));

// const mhs = [
//   {
//     nama: "Muhamad Ridwan",
//     umur: 29,
//     nim: "234521",
//     email: "admin@email.test",
//   },
//   {
//     nama: "Muhamad",
//     umur: 29,
//     nim: "234521",
//     email: "admin@email.test",
//   },
//   {
//     nama: "Ridwan",
//     umur: 29,
//     nim: "234521",
//     email: "admin@email.test",
//   },
// ];
// console.log('mulai')
// mhs.forEach((e) => console.log(e.nama));
// console.log('selesai')

// asynchronous callback

// function getData(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");
// getData(
//   "data/mahasiswa.json",
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );
// console.log("selesai");

// jQuery
$.ajax({
  url: "data/mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: () => {},
});
