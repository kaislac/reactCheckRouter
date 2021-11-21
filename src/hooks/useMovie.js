import { useState, useRef } from 'react'
import { data } from '../data'
export const useMovie = () => {
  const [movies, setMovies] = useState(data)
  const [shwoFormAdd, setShowFormAdd] = useState(false)
  const [showFormFilter, setShowFormFilter] = useState(false)
  const [showDropdowntitle, setShowDropdowntitle] = useState(true)
  const [showDescription, setShowDescription] = useState(false)
  const [showFormAddEmbed, setShowFormAddEmbed] = useState(false)
  const movieRef = useRef(null)
  const handleDelete = (id) => {
    const newmovies = movies.filter((movie) => movie.id !== id)
    setMovies(newmovies)
  }
  const handleAddEmbed = (id) => {
    setShowFormAddEmbed(true)
    movieRef.current = movies.findIndex((movie) => movie.id === id)
  }
  const parentCallEmbed = (value) => {
    setShowFormAddEmbed(false)
    // update proprieties on added value in movies[index]
    const newmovies = movies
    newmovies[movieRef.current] = {
      ...newmovies[movieRef.current],
      ...value.user,
    }
    setMovies(newmovies)
  }

  const getAllmovies = () => {
    setMovies(data)
  }

  const parentCall = (value) => {
    const l = movies.length
    const newmoviesadd = [...movies, { id: l, ...value.user }]
    setShowFormAdd(false)
    setMovies(newmoviesadd)
  }

  const handelCancel = () => {
    setShowFormAdd(false)
    setShowFormFilter(false)
    setShowFormAddEmbed(false)
  }
  const titleChecked = (item) => {
    const newmovieChecked = movies.filter((movie) => movie.title === item.value)
    setShowFormAdd(false)
    setShowFormFilter(false)
    setMovies(newmovieChecked)
  }
  const ratingChecked = (item) => {
    const newmovieChecked = movies.filter(
      (movie) => movie.rating === item.value
    )
    setShowFormAdd(false)
    setShowFormFilter(false)
    setMovies(newmovieChecked)
  }

  return {
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
  }
}
