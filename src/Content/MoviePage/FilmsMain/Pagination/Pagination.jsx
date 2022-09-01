import './Pagination.scss';
import {useSelector} from 'react-redux'

function Pagination({curPage, setCurPage}) {
    const total = useSelector(state => state.filmsMain.total);
    const totalPage = useSelector(state => state.filmsMain.totalPages);

    const editCurPage = (type) => {
        switch (type) {
            case 'start':
                return setCurPage(1)
            case 'end':
                return setCurPage(Math.ceil(total/totalPage))
            case 'inc':
                return setCurPage(curPage+1)
            case 'dec':
                return setCurPage(curPage-1)
            default:
                break;
        }
    }
    return <div className="pagination">
        <button onClick={() => editCurPage('start')} disabled = {curPage === 1 ? true : false} className='pagination__btn'>
            {'<<'}
        </button>
        <button onClick={() => editCurPage('dec')} disabled = {curPage === 1 ? true : false} className='pagination__btn'>
            {'<'}
        </button>
        <span className="pagination__pages">
            {`${curPage} / ${Math.ceil(total / totalPage)}`}
        </span>
        <button onClick={() => editCurPage('inc')} disabled = {curPage ===  Math.ceil(total / totalPage) ? true : false} className='pagination__btn'>
            {'>'}
        </button>
        <button onClick={() => editCurPage('end')} disabled = {curPage ===  Math.ceil(total / totalPage) ? true : false} className='pagination__btn'>
            {'>>'}
        </button>
    </div>
}

export default Pagination;