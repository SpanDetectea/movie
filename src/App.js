import './App.css';
import Header from './Header/Header';
import {
  Routes,
  Route
} from "react-router-dom";
import NormalyPage from './Container/NormalyPage';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element = {<NormalyPage/> }/>
          {/* <Header /> */}
      </Routes>
    </div>
  );
}

export default App;
