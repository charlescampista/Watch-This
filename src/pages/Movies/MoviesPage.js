import React from "react";
import { Nav } from "react-bootstrap";
import { connect } from "react-redux";
import ContentPresentation from "../../components/ContentPresentation/ContentPresentation";
import * as moviesPageActions from "../../store/actions/moviesPageUiState";

const MoviesPage = ({ selectedTab, changeMoviesTab }) => {
  return (
    <main>
      <nav>
        <Nav
          justify
          variant="tabs"
          defaultActiveKey="tab-popular"
          onSelect={(selectedKey) => changeMoviesTab(selectedKey)}
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
        <ContentPresentation teste="Mensagem" />
      </section>
    </main>
  );
};

const mapStateToProps = (state) => ({
  selectedTab: state.moviesPageUiState.selectedTab,
});

const mapDispatchToProps = (dispatch) => ({
  changeMoviesTab: (selectedTab) =>
    dispatch(moviesPageActions.changeMoviesTab(selectedTab)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
