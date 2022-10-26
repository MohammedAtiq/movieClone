
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import MovieList from './components/MovieList'
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="movies/:type" element={<MovieList />} />
        <Route path="/*" element={<h1>error page</h1>} />
      </Routes>

    </div>
  );
}

export default App;
