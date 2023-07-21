// fetch("http://www.omdbapi.com/?t=avenger&y=2020")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// Promise
// Object yang mempresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji(terpenuhi/ingkar)
// state(fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
let ditepati = true;
const janji = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("Janji telah ditepai!");
  } else {
    reject("Ingkar janji!");
  }
});

janji
  .then((response) => console.log("OK! " + response))
  .catch((response) => console.log("Not Ok!" + response));

// contoh 2
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("Janji telah ditepai!");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("Ingkar janji!");
    }, 2000);
  }
});

console.log("mulai");
janji2
  .finally(() => console.log("selesai menunggu!"))
  .then((response) => console.log("OK! " + response))
  .catch((response) => console.log("Not Ok!" + response));
console.log("selesai");

// Promise.all()

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "avenger",
        tahun: 2023,
      },
    ]);
  }, 2000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Samarinda",
        suhu: 30,
        kondisi: "Cerah",
      },
    ]);
  }, 1000);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca])
  // .then(response => console.log(response));
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
