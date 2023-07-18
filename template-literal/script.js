// template literal / template string

// const nama = "Muhamad Ridwan";
// const umur = 29;

// console.log(`Halo, nama saya ${nama}, dan umur saya ${umur}`);
// console.log("Halo, nama saya" + nama + ", dan umur saya " + umur + " tahun.");

// embedded expression
// console.log(`${1 + 1}`);
// console.log(`${alert("Hello, World!")}`);

// const x = 10;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// 1. html fragments
// const mhs = {
//   nama: "Muhamad Ridwan",
//   umur: 29,
//   nim: "234521",
//   email: "admin@email.test",
// };

// const el = `<div class="mhs">

// <h2>${mhs.nama}</h2>
// <span>${mhs.umur}</span>
// <span>${mhs.nim}</span>
// <span>${mhs.email}</span>

// </div>`;

// console.log(el);

// 2. looping
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

// const el = `<div class="mhs">

// ${mhs.map(
//   (m) => `<ul>

// <li>${m.nama}</li>
// <li>${m.umur}</li>
// <li>${m.nim}</li>
// <li>${m.email}</li>

// </ul>`
// ).join('')}

// </div>`;

// console.log(el);

// 3. conditionals
// ternary

// const mhs = {
//   nama: "Muhamad Ridwan",
//   umur: 29,
//   nim: "234521",
//   email: "admin@email.test",
// };

// const el = `<div class="mhs">

// <ul>

// <li>${mhs.nama}</li>
// <li>${mhs.umur}</li>
// <li>${mhs.nim}</li>
// <li>${mhs.email} `?` ${mhs.email} `:` </li>

// </ul>

// </div>`;

// console.log(el);

// 4. Nested
// html fragment bersarang

// const mhs = {
//   nama: "Muhamad Ridwan",
//   semester: 5,
//   nim: "234521",
//   email: "admin@email.test",
//   matakuliah: ["RPL", "PBO", "PTI"],
// };

// function cetakMataKuliah(matakuliah){
//   return `
//   <ul>
//     ${matakuliah.map((mk) => `<li>${mk}</li>`).join('')}
//   </ul>
//   `;
// }

// const el = `<div class="mhs">

// <span>${mhs.nama}</span>
// <span>${mhs.semester}</span>
// <span>${mhs.nim}</span>
// <span>${cetakMataKuliah(mhs.matakuliah)}</span>

// </div>`;

// console.log(el);

// document.body.innerHTML = el;

// taggged templates
// const nama = "Muhamad Ridwan";
// const umur = 29;

// function coba(strings, ...values) {
//   // let result = "";
//   // strings.forEach((str, i) => {
//   //   result += `${str}${values[i] || ''}`;
//   // });
//   // return result;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""} `,
//     ""
//   );
// }

// const str = coba`Hallo, ${nama} ${umur}`;
// console.log(str);

// highlight
const nama = "Muhamad Ridwan";
const umur = 29;
const email = 'admin@email.test'

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Hallo, ${nama} ${umur} ${email}`;
console.log(str);

document.body.innerHTML = str;
