import { useState } from 'react'

import './carousel.css'

export default function Carousel({ movies }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  function prevSlide() {
    const change = (currentSlide - 1) % movies.length
    setCurrentSlide(change >= 0 ? change : movies.length - 1)
  }

  function nextSlide() {
    const change = (currentSlide + 1) % movies.length
    setCurrentSlide(change)
  }

  return (
    <main className='carousel-container'>
      <button onClick={prevSlide} type='button' className='carousel-control carousel-control-prev'>Prev</button>

      <section>
        <article className="carousel-img">
          <img src={`http://image.tmdb.org/t/p/w500${movies[currentSlide].backdrop_path}`} />
          <div className='carousel-inner'>
            <h1 className='movie-title'>{movies[currentSlide].original_title}</h1>
            <p className='movie-overview'>{movies[currentSlide].overview.slice(0, 80)}...</p>
            <p className='movie-vote'>
              &#9733; {parseInt(movies[currentSlide].vote_average) / 2}
            </p>
          </div>
        </article>

        <ul className='carousel-dots-container'>
          {movies.map((m, i) => (
            <li onClick={() => setCurrentSlide(i)} className={`carousel-dots ${currentSlide === i ? 'dot-active' : ''}`} key={m.id} />
          ))}
        </ul>
      </section>
      <button onClick={nextSlide} type='button' className='carousel-control carousel-control-next'>Next</button>
    </main>
  )
}