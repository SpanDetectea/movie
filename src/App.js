import './App.css';
import Header from './Header/Header';
import {
  Routes,
  Route
} from "react-router-dom";
import NormalyPage from './Content/NormalyPage/NormalyPage';
import AboutFilm from './Content/AboutFilm/AboutFilm';
import MoviePage from './Content/MoviePage/MoviePage';

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
