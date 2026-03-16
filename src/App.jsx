const films = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {


  return (
    <>
      <div className="container">

        <header className="mt-2">
          <h1 className="text-center fw-bolder">
            Films to see
          </h1>
        </header>


        <main className="mt-4">

          <select className="form-select mb-4" aria-label="Default select example">
            <option selected>Open this to select the movie genre</option>
            <option value="1">Fantascienza</option>
            <option value="2">Thriller</option>
            <option value="3">Romantico</option>
            <option value="4">Azione</option>
          </select>


          <div className="row">

            {
              films.map((film, i) => (
                <div className="col-md-4 mb-3" key={i}>
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">{film.title}</h3>
                      <small>{film.genre}</small>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>

        </main>


      </div>
    </>
  )
}

export default App
