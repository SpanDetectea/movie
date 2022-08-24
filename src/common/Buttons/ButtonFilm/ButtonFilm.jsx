import './ButtonFilm.scss';

function ButtonFilm ({value, color = '#8F8A8A'}) {
    return  <button className='buttonFilm' style={{background: color}}>{value}</button>
}

export default ButtonFilm;