import { useState, useEffect } from "react"

export default function Movie() {
    const arrayMovie = [
        { title: 'Inception', genre: 'Fantascienza' },
        { title: 'Il Padrino', genre: 'Thriller' },
        { title: 'Titanic', genre: 'Romantico' },
        { title: 'Batman', genre: 'Azione' },
        { title: 'Interstellar', genre: 'Fantascienza' },
        { title: 'Pulp Fiction', genre: 'Thriller' },
    ]

    // stato dell'array completo
    const [movies] = useState(arrayMovie);
    // stato del array filtrato
    const [filteredMovies, setFilteredMovies] = useState(movies);
    // stato del campo di selezione
    const [select, setSelect] = useState("");
    // stato del campo di ricerca
    const [search, setSearch] = useState("");

    // utilizzo useEffect per gestione filtro
    useEffect(() => {
        if (select === "") {
            setFilteredMovies(movies);
        } else {
            setFilteredMovies(
                movies.filter(movie =>
                    movie.genre.toLowerCase().includes(select.toLowerCase().trim())

                    // altro modo per fare il filtraggio
                    // movie.genre === select
                )
            );
        }
    }, [select, movies]);

    useEffect(() => {
        setFilteredMovies(
            movies.filter(movie => {
                return movie.title.toLowerCase().includes(search.toLowerCase().trim())
            })
        );
    }, [search, movies]);


    return (
        <>
            <h1>Filtra per genere:</h1>
            {/* selezione per genere */}
            <select name="movies" id="movies" onChange={(e) => { setSelect(e.target.value) }}>
                <option value="" >Tutti</option>
                <option value="Fantascienza" >Fantascienza</option>
                <option value="Thriller" >Thriller</option>
                <option value="Romantico" >Romantico</option>
                <option value="Azione" >Azione</option>

            </select>
            <h2>Filtra per titolo:</h2>
            {/* selezione per titolo */}
            <input type="text"
                placeholder='Cerca'
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
            />
            <h2>Risultati:</h2>
            {/* liste dei film filtrati */}
            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>{movie.title} - {movie.genre}</li>
                ))}
            </ul>
        </>
    )
}