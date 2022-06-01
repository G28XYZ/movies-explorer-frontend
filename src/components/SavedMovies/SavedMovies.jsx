import { useStore } from "../../services/StoreProvider";
import MoviesCardList from "../MoviesCardList";
import SearchForm from "../SearchForm";

function SavedMovies() {
  const [state] = useStore();
  const { savedMovies } = state.movie;

  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList moviesList={savedMovies} />
    </main>
  );
}

export default SavedMovies;
