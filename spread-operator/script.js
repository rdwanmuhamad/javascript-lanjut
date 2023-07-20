// spread operator

// memecah iterables menjadi single element

// const mhs = ["Muhamad", "Ridwan", "Muhamad Ridwan"];
// const dosen = ["Muhamad Ridwan", "Ridwan", "Muhamad"];

// const orang = [...mhs, "Aji", ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);

// meng-copy array
// const mhs = ["Muhamad", "Ridwan", "Muhamad Ridwan"];
// // const mhs1 = mhs;
// // mhs1[0] = 'Fajar'
// const mhs1 = [...mhs];
// mhs1[0] = "Fajar";
// console.log(mhs1);

// const list = document.querySelectorAll("li");

// // const mhs = [];

// // for (let i = 0; i < list.length; i++) {
// //   mhs.push(list[i].textContent);
// // }
// const mhs = [...list].map(m => m.textContent)
// console.log(mhs);

const title = document.querySelector(".title");
const huruf = [...title.textContent].map((h) => `<span>${h}</span>`).join("");
title.innerHTML = huruf;
