import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Container,
  Spinner,
  Card,
  Button,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import * as moviesServices from "../../services/MovieServices";
import * as moviesRequestsActions from "../../store/actions/moviesRequestsState";

const ContentPresentation = ({
  selectedTab,
  isMoviesLoading,
  getPopularMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  clearMovies,
  isCleared,
  movies,
  page,
  language,
}) => {
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const handleClose = () => {
    setShow(false);
    setSelectedMovie({});
  };
  const handleShow = (movie) => {
    setShow(true);
    setSelectedMovie(movie);
  };

  useEffect(() => {
    if (selectedTab === "tab-popular") {
      if (movies.length === 0) {
        console.log("passou");
        getPopularMovies(page, true, movies);
        moviesServices.getPopularMovies(page, language).then((response) => {
          console.log(response);
          getPopularMovies(page + 1, false, response.data.results);
        });
      }
    }

    if (selectedTab === "tab-upcoming") {
      if (movies.length === 0) {
        console.log("passou");
        getUpcomingMovies(page, true, movies);
        moviesServices.getUpcomingMovies(page, language).then((response) => {
          console.log(response);
          getUpcomingMovies(page + 1, false, response.data.results);
        });
      }
    }

    if (selectedTab === "tab-now-playing") {
      if (movies.length === 0) {
        console.log("passou");
        getNowPlayingMovies(page, true, movies);
        moviesServices.getNowPlayingMovies(page, language).then((response) => {
          console.log(response);
          getNowPlayingMovies(page + 1, false, response.data.results);
        });
      }
    }

    if (selectedTab === "tab-top-rated") {
      if (movies.length === 0) {
        console.log("passou");
        getTopRatedMovies(page, true, movies);
        moviesServices.getTopRatedMovies(page, language).then((response) => {
          console.log(response);
          getTopRatedMovies(page + 1, false, response.data.results);
        });
      }
    }
  }, [selectedTab, isCleared]);

  if (isMoviesLoading)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );

  return (
    <Container style={{ width: "100%" }}>
      <Row>
        {movies.map((movie, index) => (
          <Col
            md={2}
            key={index}
            className="m-1 d-flex"
            // style={{
            //   display: "flex",
            //   flex: "0 0 15%",
            //   maxWidth: "15%",
            //   position: "relative",
            //   width: "100%",
            // }}
          >
            <Card
              onClick={() => handleShow(movie)}
              style={{ cursor: "pointer", width: "100%" }}
            >
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                className="d-flex justify-content-start"
              />
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "0.9em",
                    color: "#444",
                    textAlign: "justify",
                  }}
                >
                  {movie.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "0.9em", color: "#777" }}>
                  {movie.release_date}
                </Card.Text>
                <Card.Text style={{ fontSize: "0.9em", color: "#00ff00" }}>
                  {movie.vote_average}
                </Card.Text>
                {/* <Card.Text>{movie.overview}</Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie.title}</Modal.Title>
        </Modal.Header>
        <Image
          src={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`}
        />
        <Modal.Body>{selectedMovie.overview}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="row d-flex justify-content-center fluid">
        <Button
          onClick={() => {
            loadMoreMovies(
              selectedTab,
              page,
              movies,
              language,
              getPopularMovies,
              getUpcomingMovies,
              getNowPlayingMovies,
              getTopRatedMovies
            );
          }}
          className="dflex align-self-end"
        >
          Load More
        </Button>
      </div>
    </Container>
  );
};

function loadMoreMovies(
  selectedTab,
  page,
  movies,
  language,
  getPopularMovies,
  getUpcomingMovies,
  getNowPlayingMovies,
  getTopRatedMovies
) {
  switch (selectedTab) {
    case "tab-popular":
      getPopularMovies(page, true, movies);
      moviesServices.getPopularMovies(page, language).then((response) => {
        console.log(response);
        getPopularMovies(page + 1, false, response.data.results);
      });
      break;
    case "tab-upcoming":
      getUpcomingMovies(page, true, movies);
      moviesServices.getUpcomingMovies(page, language).then((response) => {
        console.log(response);
        getUpcomingMovies(page + 1, false, response.data.results);
      });
      break;
    case "tab-now-playing":
      getNowPlayingMovies(page, true, movies);
      moviesServices.getNowPlayingMovies(page, language).then((response) => {
        console.log(response);
        getNowPlayingMovies(page + 1, false, response.data.results);
      });
      break;
    case "tab-top-rated":
      getTopRatedMovies(page, true, movies);
      moviesServices.getTopRatedMovies(page, language).then((response) => {
        console.log(response);
        getTopRatedMovies(page + 1, false, response.data.results);
      });
      break;
    default:
      console.log("There isn't a tab selected yet");
  }
}

const mapStateToProps = (state) => ({
  selectedTab: state.moviesPageUiState.selectedTab,
  isMoviesLoading: state.moviesRequestsState.isLoading,
  movies: state.moviesRequestsState.movies,
  page: state.moviesRequestsState.page,
  language: state.generalInformationState.payload,
  isCleared: state.moviesRequestsState.isCleared,
});

const mapDispatchToProps = (dispatch) => ({
  getPopularMovies: (page, isLoading, movies) =>
    dispatch(moviesRequestsActions.getPopularMovies(page, isLoading, movies)),
  getUpcomingMovies: (page, isLoading, movies) =>
    dispatch(moviesRequestsActions.getUpcomingMovies(page, isLoading, movies)),
  getNowPlayingMovies: (page, isLoading, movies) =>
    dispatch(
      moviesRequestsActions.getNowPlayingMovies(page, isLoading, movies)
    ),
  getTopRatedMovies: (page, isLoading, movies) =>
    dispatch(moviesRequestsActions.getTopRatedMovies(page, isLoading, movies)),
  clearMovies: () => dispatch(moviesRequestsActions.clearMovies()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentPresentation);
