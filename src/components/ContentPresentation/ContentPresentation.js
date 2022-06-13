import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Spinner, Card, Button, Row, Col } from "react-bootstrap";
import * as moviesServices from "../../services/MovieServices";
import * as moviesRequestsActions from "../../store/actions/moviesRequestsState";

const ContentPresentation = ({
  selectedTab,
  isMoviesLoading,
  getPopularMovies,
  movies,
  page,
}) => {
  useEffect(() => {
    if (selectedTab === "tab-popular") {
      getPopularMovies(page, true, movies);
      moviesServices.getPopularMovies(page).then((response) => {
        console.log(response);
        getPopularMovies(page + 1, false, response.data.results);
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

  if (isMoviesLoading)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );

  return (
    <Container>
      <h1>{selectedTab}</h1>
      <Row>
        {movies.map((movie, index) => (
          <Col md={3} key={index}>
            <Card>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{movie.original_title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button
        onClick={() => {
          getPopularMovies(page, true, movies);
          moviesServices.getPopularMovies(page).then((response) => {
            console.log(response);
            getPopularMovies(page + 1, false, response.data.results);
          });
        }}
      >
        Load More
      </Button>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  selectedTab: state.moviesPageUiState.selectedTab,
  isMoviesLoading: state.moviesRequestsState.isLoading,
  movies: state.moviesRequestsState.movies,
  page: state.moviesRequestsState.page,
});

const mapDispatchToProps = (dispatch) => ({
  getPopularMovies: (page, isLoading, movies) =>
    dispatch(moviesRequestsActions.getPopularMovies(page, isLoading, movies)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentPresentation);
