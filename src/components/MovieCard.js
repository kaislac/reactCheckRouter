import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const MovieCard = (props) => {
  const { id, title, description, posterURL, rating } = props.movie

  return (
    <div className='card'>
      <Link to={`/carddescription/${id}`}>
        <img
          src={posterURL}
          width='300px'
          alt='posteURL'
          key={id}
          onClick={props.showDescription}
        />
      </Link>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{rating}</p>
      <button key={id} onClick={props.onClick}>
        Delete
      </button>
      <button key={id} onClick={props.onClickEmbed}>
        embed Link
      </button>
    </div>
  )
}

export default MovieCard
