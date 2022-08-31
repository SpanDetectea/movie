import './Rating.scss'

function Rating ({rating, type = 'classic'}) {
    switch (type) {
        case 'blockFilm':
            return <div className='ratingBlockFilm'>
            {rating}
        </div>
        default:
            return <div className='rating'>
        {rating}
    </div>
    }
}

export default Rating;