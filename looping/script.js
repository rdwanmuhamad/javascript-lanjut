// for..of
// const mhs = ["muhamad", "ridwan", "muhamad ridwan"];
// for (const m of mhs) {
//   console.log(m);
// }

// const mhs = ["muhamad", "ridwan", "muhamad ridwan"];
// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// for
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// forEach
// const mhs = ["muhamad", "ridwan", "muhamad ridwan"];
// mhs.forEach((n) => console.log(n));
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`)
// });

// looping string
// const nama ='ridwan'
// for(const n of nama){
//     console.log(n)
// }

// nodelist
// const nama = document.querySelectorAll(".nama");
// nama.forEach(n => console.log(n.textContent))

// for (const n of nama) {
//   console.log(n.innerHTML);
// }

// arguments
// function kalkulasi() {
//   let jumlah = 0;
//   for (const n of arguments) {
//     jumlah += n;
//   }
//   return jumlah;
// }

// console.log(kalkulasi(1, 2, 3, 4, 5));

// for..in
const mhs = {
  nama: "Muhamad Ridwan",
  umur: 29,
  email: "admin@email.test",
};

for (const m in mhs) {
  console.log(mhs[m]);
}
