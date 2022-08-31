import './Preloader.scss';
import gif from '../../assets/preloader.gif'

function Preloader({value}) {
    return <div className="preloader">
        { value ? <img src={gif} alt="" /> : null }
    </div>
}

export default Preloader;