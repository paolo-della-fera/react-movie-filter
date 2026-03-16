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
  const [searchTitle, setSearchTitle] = useState('')


  useEffect(() => {

    if (selectedGenre === '') {
      setFilteredFilms(films)
    } else {
      setFilteredFilms(films.filter(film => film.genre === selectedGenre))
    }

  }, [selectedGenre])


  useEffect(() => {

    if (searchTitle === '') {
      setFilteredFilms(films)
    } else {
      setFilteredFilms(films.filter(film => film.title.toLowerCase().includes(searchTitle.toLowerCase())
      ))
    }

  }, [searchTitle])



  return (
    <>
      <div className="container">


        {/* header */}
        <header className="mt-2">
          <h1 className="text-center fw-bolder">
            Films to see
          </h1>
        </header>


        <main className="mt-4">


          {/* search movies by title */}
          <input type="search" className="form-control w-25 mx-auto mb-5" placeholder="Search for a movie..." aria-label="Cerca film"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />


          {/* film genre selection */}
          <select className="form-select mb-4" aria-label="Default select example"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}>

            <option value="">All genres of movies (open this to select the movie genre)</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>

          </select>


          {/* films card */}
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
