import './App.css';
import Header from './Header/Header';
import {
  Routes,
  Route
} from "react-router-dom";
import NormalyPage from './Container/NormalyPage';
import AboutFilm from './AboutFilm/AboutFilm';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element = {<NormalyPage/> }/>
        <Route path="/film/:filmId" element = {<AboutFilm/> }/>
          {/* <Header /> */}
      </Routes>
    </div>
  );
}

export default App;
