import { ControlBar, Player, ReplayControl } from 'video-react';
import './Promo.scss';

function Promo() {
    return <div className="promo">
        <div className="promo__wrapper">
            <h1></h1>
            <p></p>
            <button></button>
        </div>
        <div className="promo__video">
            Video here
            <Player autoPlay src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" muted height={20}>
                <ControlBar autoHide={false} className="my-class" />
            </Player>
        </div>
    </div>
}

export default Promo;