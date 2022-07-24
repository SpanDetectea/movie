import './AboutFilm.scss';
import { useParams } from 'react-router-dom';

function AboutFilm(props) {
const {filmId} = useParams();
    return <div className="AboutPage">
        <h1>Названий фильма</h1>
        <p>{filmId}</p>
        <button></button><button></button>
        <h2></h2>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
}

export default AboutFilm;