// menggunakan for
const angka = [-1, 8, 4, 3, 7, 3, 6, 2, 7, 3, 9, 0, 5];
// const newAngka = [];

// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// filter
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// reduce
// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(newAngka);

// method chaining
// const hasil = angka
//   // cari angka > 5
//   .filter((a) => a > 5)
//   // kalikan 3
//   .map((a) => a * 3)
//   // jumlahkan
//   .reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(hasil);

// latihan filer, map, dan reduce

// ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih hanya yang 'javascript lanjutan'
let playlist = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  // ambil durasi masing2 video
  .map((item) => item.dataset.duration)
  // ubah durasi menjadi float dan ubah menit menjadi detik
  .map((waktu) => {
    // 10: 30 -> [10, 30] split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// ubah format jadi jam, menit dan detik
const jam = Math.floor(playlist / 3600);
playlist = playlist - jam * 3600;
const menit = Math.floor(playlist / 60);
const detik = playlist - menit * 60;

// simpan di DOM
const durasi = document.querySelector(".total-durasi");
durasi.textContent = `${jam} Jam ${menit} Menit ${detik} Detik`;
const jmlVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

const totalVideo = document.querySelector(".jumlah-video");
totalVideo.textContent = `${jmlVideo}`;

