import './App.css'
import MovieList from './components/MovieList'
import CardDescription from './components/CardDescription'
import 'antd/dist/antd.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Movies List</h1>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<MovieList />} />
            <Route
              exact
              path='/carddescription/:id'
              element={<CardDescription />}
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
