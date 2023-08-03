// fetch
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch(
    "http://www.omdbapi.com/?i=tt3896198&apikey=f7929d99&s=" +
      inputKeyword.value
  )
    .then((response) => response.json())
    .then((response) => console.log(response));
});

function showCards(movie) {
  return `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" 
                        data-target="#movieDetail" data-imdbid="${movie.imdbID}">Sinopsis</a>
                    </div>
                </div>
            </div>`;
}

function detailMovie(movie) {
  return `<div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${movie.Poster}" class="img-fluid" alt="" srcset="">
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <h4>${movie.Title}</h4>
                                    </li>
                                    <li class="list-group-item"><strong>Director : </strong>${movie.Director}</li>
                                    <li class="list-group-item"><strong>Actors : </strong>${movie.Actors}</li>
                                    <li class="list-group-item"><strong>Writers : </strong>${movie.Writer}</li>
                                    <li class="list-group-item"><strong>Plot : </strong> <br>
                                    ${movie.Plot}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>`;
}
