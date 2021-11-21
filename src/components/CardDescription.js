import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'
import { useMovie } from '../hooks/useMovie'

const CardDescription = (props) => {
  const { id } = useParams()

  const { movies } = useMovie()

  const nmovie = movies.filter((movie) => movie.id == id)

  const { idd, title, description, posterURL, rating, embedURL } = nmovie[0]

  return (
    <>
      <div className='card-container'>
        {<h1>Description</h1>}
        <Link to='/'>Home</Link>
        <p>{description}</p>
        <a href={embedURL}>Link to embed </a>
      </div>
    </>
  )
}

export default CardDescription
