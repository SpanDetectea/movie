import './App.css';
import Header from './Header/Header';
import {
  Routes,
  Route
} from "react-router-dom";
import NormalyPage from './Container/NormalyPage';
import AboutFilm from './AboutFilm/AboutFilm';
import MoviePage from './Container/MoviePage';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element = {<NormalyPage/> }/>
        <Route path="/film/:filmId" element = {<AboutFilm/> }/>
        <Route path="/movie" element = {<MoviePage /> }/>
          {/* <Header /> */}
      </Routes>
    </div>
  );
}

export default App;
