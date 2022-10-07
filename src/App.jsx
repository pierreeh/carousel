import { useState, useEffect } from "react"

import Carousel from "./components/carousel/Carousel"
import Loader from "./components/loader/Loader"

const api = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`

export default function App() {
  const [movies, setMovies] = useState(false)
  
  useEffect(() => {
    async function getMovies() {
      const datas = await(await fetch(api)).json()
      setMovies(datas.results)
    }
    getMovies()
  }, [])

  if (!movies) {
    return (
      <Loader />
    )
  }

  return (
    <Carousel movies={movies} />
  )
}

