import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FilmsMain from "./FilmsMain/FilmsMain";


function MoviePage () {
    return <div className="moviePage">
        <Header />
        <FilmsMain />
        <Footer />
    </div>
}

export default MoviePage;