import './ButtonFilm.scss';

function ButtonFilm ({value, color = '#8F8A8A', width = 'auto', display = 'block'}) {
    return  <button className='buttonFilm' style={{background: color,
        width: width,
        display: display
    }}>{value}</button>
}

export default ButtonFilm;