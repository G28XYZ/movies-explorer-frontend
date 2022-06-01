import { useStore } from "../../services/StoreProvider";
import MoviesCardList from "../MoviesCardList";
import SearchForm from "../SearchForm";

function Movies() {
  const [state] = useStore();
  const { moviesList } = state.movie;

  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList moviesList={moviesList} />
    </main>
  );
}

export default Movies;
