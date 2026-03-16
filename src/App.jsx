import { useState, useEffect } from 'react'

const films = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]



function App() {
  const [selectedGenre, setSelectedGenre] = useState('')
  const [filteredFilms, setFilteredFilms] = useState(films)


  useEffect(() => {

    if (selectedGenre === '') {
      setFilteredFilms(films)
    } else {
      setFilteredFilms(films.filter(film => film.genre === selectedGenre))
    }

  }, [selectedGenre])

  return (
    <>
      <div className="container">

        <header className="mt-2">
          <h1 className="text-center fw-bolder">
            Films to see
          </h1>
        </header>


        <main className="mt-4">

          <select className="form-select mb-4" aria-label="Default select example"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}>

            <option value="">All genres of movies (open this to select the movie genre)</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>

          </select>


          <div className="row">

            {
              filteredFilms.map((film, i) => (
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
