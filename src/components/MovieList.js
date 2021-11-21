import { data } from '../data.js'
import React, { useState, useRef } from 'react'
import MovieCard from './MovieCard.js'
import { Space, Modal, Button } from 'antd'
import FormAdd from './FormAdd'
import Filtermovies from './Filtermovies.js'
import { Link } from 'react-router-dom'
import FormAddEmbed from './FormAddEmbed.js'
import CardDescription from './CardDescription.js'
import { useMovie } from '../hooks/useMovie.js'

const MovieList = () => {
  const {
    handleAddEmbed,
    handleDelete,
    getAllmovies,
    handelCancel,
    ratingChecked,
    titleChecked,
    parentCall,
    parentCallEmbed,
    movies,
    setMovies,
    shwoFormAdd,
    setShowFormAdd,
    showFormFilter,
    setShowFormFilter,
    showDropdowntitle,
    setShowDropdowntitle,
    showDescription,
    setShowDescription,
    showFormAddEmbed,
    setShowFormAddEmbed,
  } = useMovie()
  return (
    <>
      <Space>
        <Button type='primary' onClick={() => getAllmovies()}>
          Refrech
        </Button>
        <Button type='primary' onClick={() => setShowFormAdd(true)}>
          Add movie
        </Button>
        <Button
          type='primary'
          onClick={() => {
            setShowFormFilter(true)
            setShowDropdowntitle(true)
          }}
        >
          filter movies by name
        </Button>
        <Button
          type='primary'
          onClick={() => {
            setShowFormFilter(true)
            setShowDropdowntitle(false)
          }}
        >
          filter movies by rating
        </Button>
      </Space>
      <Modal
        title='addmovie'
        visible={shwoFormAdd}
        okButtonProps={{ style: { display: 'none' } }}
        onCancel={handelCancel}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <FormAdd parentCall={parentCall} />
      </Modal>
      <Modal
        title='addmovieEmbed'
        visible={showFormAddEmbed}
        okButtonProps={{ style: { display: 'none' } }}
        onCancel={handelCancel}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <FormAddEmbed parentCallEmbed={parentCallEmbed} />
      </Modal>
      <Modal
        title='filterMovies'
        visible={showFormFilter}
        onCancel={handelCancel}
      >
        {showDropdowntitle && (
          <Filtermovies
            titleSelected={movies}
            showDropdowntitle={showDropdowntitle}
            titleChecked={titleChecked}
          />
        )}
        {!showDropdowntitle && (
          <Filtermovies
            titleSelected={movies}
            showDropdowntitle={showDropdowntitle}
            ratingChecked={ratingChecked}
          />
        )}
      </Modal>
      {showDescription && <CardDescription />}
      {movies.map((movie) => (
        <div className='card-container' key={movie.id}>
          <MovieCard
            movie={movie}
            key={movie.id}
            onClick={() => handleDelete(movie.id)}
            onClickEmbed={() => handleAddEmbed(movie.id)}
            showDescription={() => setShowDescription(true)}
          />
        </div>
      ))}
    </>
  )
}

export default MovieList
