import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { connect } from "react-redux";
import ContentPresentation from "../../components/ContentPresentation/ContentPresentation";
import * as moviesPageUiActions from "../../store/actions/moviesPageUiState";
import * as moviesRequestsActions from "../../store/actions/moviesRequestsState";

const MoviesPage = ({ changeMoviesTab, clearMovies, language, movies }) => {
  useEffect(() => {
    clearMovies();
  }, [language]);

  return (
    <main style={{ backgroundColor: "#000" }}>
      <nav>
        <Nav
          justify
          variant="tabs"
          defaultActiveKey="tab-popular"
          onSelect={(selectedKey) => {
            clearMovies();
            changeMoviesTab(selectedKey);
          }}
        >
          <Nav.Item>
            <Nav.Link eventKey="tab-popular">Popular</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tab-upcoming">Upcoming</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tab-now-playing">Now Playing</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tab-top-rated">Top Rated</Nav.Link>
          </Nav.Item>
        </Nav>
      </nav>

      <section>
        <ContentPresentation />
      </section>
    </main>
  );
};

const mapStateToProps = (state) => ({
  language: state.generalInformationState.payload,
  movies: state.moviesRequestsState.movies,
});

const mapDispatchToProps = (dispatch) => ({
  changeMoviesTab: (selectedTab) =>
    dispatch(moviesPageUiActions.changeMoviesTab(selectedTab)),
  clearMovies: () => dispatch(moviesRequestsActions.clearMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
