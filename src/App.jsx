const films = [
  { title: 'Inception', genere: 'Fantascienza' },
  { title: 'Il Padrino', genere: 'Thriller' },
  { title: 'Titanic', genere: 'Romantico' },
  { title: 'Batman', genere: 'Azione' },
  { title: 'Interstellar', genere: 'Fantascienza' },
  { title: 'Pulp Fiction', genere: 'Thriller' },
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

          <div className="row">

            {
              films.map((film, i) => (
                <div className="col-md-4 mb-3" key={i}>
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">{film.title}</h3>
                      <small>{film.genere}</small>
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
