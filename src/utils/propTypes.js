import PropTypes from "prop-types";

export const formatsPT = PropTypes.shape({
  ext   : PropTypes.string,
  hash  : PropTypes.string,
  height: PropTypes.number,
  mime  : PropTypes.string,
  path  : PropTypes.object,
  size  : PropTypes.number,
  url   : PropTypes.string,
  width : PropTypes.number,
});

export const imageShape = PropTypes.shape({
  alternativeText  : PropTypes.string,
  caption          : PropTypes.string,
  created_at       : PropTypes.string,
  ext              : PropTypes.string,
  hash             : PropTypes.string,
  height           : PropTypes.number,
  id               : PropTypes.number,
  mime             : PropTypes.string,
  name             : PropTypes.string,
  previewUrl       : PropTypes.object,
  provider         : PropTypes.string,
  provider_metadata: PropTypes.object,
  size             : PropTypes.number,
  updated_at       : PropTypes.string,
  url              : PropTypes.string,
  width            : PropTypes.number,
  formats          : PropTypes.shape({
    small    : formatsPT,
    thumbnail: formatsPT,
  }),
});

export const mainMovieShape = PropTypes.shape({
  id         : PropTypes.number,
  country    : PropTypes.string,
  created_at : PropTypes.string,
  description: PropTypes.string.isRequired,
  director   : PropTypes.string.isRequired,
  duration   : PropTypes.number.isRequired,
  image      : imageShape,
  nameEN     : PropTypes.string.isRequired,
  nameRU     : PropTypes.string.isRequired,
  trailerLink: PropTypes.string.isRequired,
  updated_at : PropTypes.string,
  year       : PropTypes.string.isRequired,
});

export const savedMovieShape = PropTypes.shape({
  _id        : PropTypes.string,
  movieId    : PropTypes.number,
  country    : PropTypes.string.isRequired,
  created_at : PropTypes.string,
  description: PropTypes.string.isRequired,
  director   : PropTypes.string.isRequired,
  duration   : PropTypes.number.isRequired,
  id         : PropTypes.number,
  owner      : PropTypes.string,
  image      : PropTypes.string,
  nameEN     : PropTypes.string.isRequired,
  nameRU     : PropTypes.string.isRequired,
  trailerLink: PropTypes.string.isRequired,
  updated_at : PropTypes.string,
  year       : PropTypes.string.isRequired,
});

export const movieCardPT = {
  movie: PropTypes.oneOfType([savedMovieShape, mainMovieShape]),
};

export const cardListPT = {
  movies               : PropTypes.arrayOf(PropTypes.oneOfType([savedMovieShape,mainMovieShape]).isRequired).isRequired,
  handleClickMoreMovies: PropTypes.func.isRequired,
  notFound             : PropTypes.string.isRequired,
  showedMovies         : PropTypes.number.isRequired,
  filterShortFilms     : PropTypes.bool.isRequired,
  isNotFound           : PropTypes.func.isRequired,
};

export const wrapPT = {
  children: PropTypes.element,
  header  : PropTypes.bool,
  footer  : PropTypes.bool,
};