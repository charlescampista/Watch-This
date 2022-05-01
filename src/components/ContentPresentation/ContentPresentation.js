import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Spinner, Card, Button } from "react-bootstrap";
import * as moviesServices from "../../services/MovieServices";
import * as moviesRequestsActions from "../../store/actions/moviesRequestsState";

const ContentPresentation = ({
  selectedTab,
  isMoviesLoading,
  getPopularMovies,
  movies,
}) => {
  useEffect(() => {
    if (selectedTab === "tab-popular") {
      getPopularMovies(true);
      moviesServices.getPopularMovies().then((response) => {
        console.log(response);
        getPopularMovies(false, response.data.results);
      });
    }

    if (selectedTab === "tab-upcoming") {
      moviesServices.getUpcomingMovies();
    }

    if (selectedTab === "tab-now-playing") {
      moviesServices.getNowPlayingMovies();
    }

    if (selectedTab === "tab-top-rated") {
      moviesServices.getTopRatedMovies();
    }
  }, []);

  return (
    <Container>
      <h1>{selectedTab}</h1>
      {!isMoviesLoading ? (
        movies.map((movie) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            />
            <Card.Body>
              <Card.Title>{movie.original_title}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  selectedTab: state.moviesPageUiState.selectedTab,
  isMoviesLoading: state.moviesRequestsState.isLoading,
  movies: state.moviesRequestsState.movies,
});

const mapDispatchToProps = (dispatch) => ({
  getPopularMovies: (isLoading, movies) =>
    dispatch(moviesRequestsActions.getPopularMovies(isLoading, movies)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentPresentation);
