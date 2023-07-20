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

// const title = document.querySelector(".title");
// const huruf = [...title.textContent].map((h) => `<span>${h}</span>`).join("");
// title.innerHTML = huruf;

// rest prameter
// function myFunc(a, b, ...myArgs) {
//   //   return `a = ${a}, b = ${b}, myArgs = ${myArgs} `;
//   return myArgs;
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function kalkulasi(...angka) {
//   //   let total = 0;
//   //   for (const a of angka) {
//   //     total += a;
//   //   }
//   //   return total;

//   return angka.reduce((a, b) => a + b);
// }

// console.log(kalkulasi(1, 2, 3, 4, 5));

// array destructuring
const kelompok = ["Muhamad", "Ridwan", "Muhamad Ridwan"];
const [ketua, wakil, ...anggota] = kelompok;
console.log(anggota);

// object destructuring
const team = {
  ProjectManager: "Muhamad",
  Frontend: "Ridwan",
  Backend: "Muhamad Ridwan",
};

const { ProjectManager, ...myTeam } = team;
console.log(myTeam);

// filtering
function filterBy(type, ...values) {
  return values.filter((value) => typeof value === type);
}

console.log(filterBy("boolean", 1, 2, "Ridwan", false, 10, true, "Muhamad"));
