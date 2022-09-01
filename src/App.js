import './App.css';
import Header from './Header/Header';
import {
  Routes,
  Route
} from "react-router-dom";
import NormalyPage from './Content/NormalyPage/NormalyPage';
import AboutFilm from './Content/AboutFilm/AboutFilm';
import MoviePage from './Content/MoviePage/MoviePage';
import Profile from './Content/ProfilePage/Profile';
import AuthPage from './Content/AuthPage/AuthPage';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element = {<NormalyPage/> }/>
        <Route path="/film/:filmId" element = {<AboutFilm/> }/>
        <Route path="/movie" element = {<MoviePage /> }/>
        <Route path="/profile" element = {<Profile /> }/>
        <Route path="/auth" element = {<AuthPage /> }/>
          {/* <Header /> */}
      </Routes>
    </div>
  );
}

export default App;
