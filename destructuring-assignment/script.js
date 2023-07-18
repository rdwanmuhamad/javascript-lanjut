// destructuring variable / assignment

// desctructuring array
// const perkenalan = ["halo", "nama", "saya", "Muhamad Ridwan"];

// const [salam, satu, dua, nama] = perkenalan;
// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(salam);
// console.log(satu);
// console.log(dua);
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a)
// console.log(b)

// return value pada function
// function coba(){
//     return[1, 2]
// }
// const [a, b] = coba()
// console.log(b, a)

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// desctruturing object
// const mhs = {
//   nama: "Muhamad Ridwan",
//   umur: 29,
// };

// const {nama, umur } = mhs
// console.log(nama)

// assignment tanp deklarasi object
// ({ nama, umur } = {
//   nama: "Muhamad Ridwan",
//   umur: 29,
// });
// console.log(nama);

// assignment ke variable baru
// const mhs = {
//   nama: "Muhamad Ridwan",
//   umur: 29,
// };

// const {nama: n, umur: u } = mhs
// console.log(n)

// memberikan default value
// const mhs = {
//   nama: "Muhamad Ridwan",
//   umur: 29,
//   email: 'ridwan@email.test'
// };

// const {nama, umur, email = 'admin@email.test'} = mhs
// console.log(email)

// memberikan default value + assignment ke variable baru
// const mhs = {
//   nama: "Muhamad Ridwan",
//   umur: 29,
//   email: 'ridwan@email.test'
// };

// const {nama: n, umur: u, email: e = 'admin@email.test'} = mhs
// console.log(e)

// rest parameter
// const mhs = {
//   nama: "Muhamad Ridwan",
//   umur: 29,
//   email: 'ridwan@email.test'
// };

// const {nama, ...values} = mhs
// console.log(values)

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//   id: 1,
//   nama: "Muhamad Ridwan",
//   umur: 29,
//   email: "ridwan@email.test",
// };

// function getId(id){
//     return id
// }
// console.log(getId(mhs))

// destructuring return value
// function penjumlahanPerkalian(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const tambah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(tambah);
// console.log(kali);

// const [
//   tambah = "tidak ada nilai",
//   kurang = "tidak ada nilai",
//   kali = "tidak ada nilai",
//   bagi = "tidak ada nilai",
// ] = penjumlahanPerkalian(2, 4);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(2, 4);
// console.log(kurang);

// destructuring function arguments
const mhs = {
  nama: "Muhamad Ridwan",
  umur: 29,
  email: "admin@email.test",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 90,
  },
};

// function cetakData(mhs) {
//   return `halo, nama saya ${mhs.nama}, umur ${mhs.umur} tahun`;
// }

// console.log(cetakData(mhs));

function cetakData({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `halo, nama saya ${nama}, umur ${umur} tahun. Dan nilai uas saya ${uas}`;
}

console.log(cetakData(mhs));
