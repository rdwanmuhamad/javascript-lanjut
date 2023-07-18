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
const mhs = {
  id: 1,
  nama: "Muhamad Ridwan",
  umur: 29,
  email: "ridwan@email.test",
};

function getId(id){
    return mhs.id
}
console.log(getId(mhs))