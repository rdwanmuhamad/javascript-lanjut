$.ajax({
  url: "http://www.omdbapi.com/?i=tt3896198&apikey=f7929d99&s=avengers",
  success: (results) => {
    console.log(results);
    const movies = results.Search;
    let cards = "";
    movies.forEach((movie) => {
      cards += `<div class="col-md-4 my-5">
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
    });
    $(".movie-container").html(cards);

    // ketika tombol detail di klik
    $(".modal-detail-button").on("click", function () {
      console.log($(this).data("imdbid"));
      $.ajax({
        url:
          "http://www.omdbapi.com/?apikey=f7929d99&i=" + $(this).data("imdbid"),
        success: (movie) => {
          const movieDetail = `<div class="container-fluid">
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
          $(".modal-body").html(movieDetail);
        },
        error: (e) => {
          console.log(e.responseText);
        },
      });
    });
    console.log(movies);
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
