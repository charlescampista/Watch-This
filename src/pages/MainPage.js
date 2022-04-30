import React, { useState } from "react";
import {
  getUpcomingMovies,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "../services/MovieServices";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function MainPage() {
  const [upcomingMovies, setUpcomingMovies] = useState(undefined);
  const [topRatedMovies, setTopRatedMovies] = useState(undefined);
  const [popularMovies, setPopularMovies] = useState(undefined);
  const [nowPlayingMovies, setNowPlayingMovies] = useState(undefined);

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <Button
              onClick={() => {
                getUpcomingMovies().then((response) => {
                  setUpcomingMovies(response.data.results);
                });
              }}
            >
              Upcoming
            </Button>
          </Col>

          <Col>
            <Button
              onClick={() => {
                getTopRatedMovies().then((response) => {
                  setTopRatedMovies(response.data.results);
                });
              }}
            >
              Top Rated
            </Button>
          </Col>

          <Col>
            <Button
              onClick={() => {
                getPopularMovies().then((response) => {
                  setPopularMovies(response.data.results);
                });
              }}
            >
              Popular
            </Button>
          </Col>

          <Col>
            <Button
              onClick={() => {
                getNowPlayingMovies().then((response) => {
                  setNowPlayingMovies(response.data.results);
                });
              }}
            >
              Now Playing
            </Button>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          {upcomingMovies && (
            <Col>
              <h2>Upcoming</h2>
              {upcomingMovies.map((movie, index) => (
                <h4 key={index}>{movie.original_title}</h4>
              ))}
            </Col>
          )}
        </Row>

        <Row>
          {topRatedMovies && (
            <Col>
              <h2>Top Rated Movies</h2>
              {topRatedMovies.map((movie, index) => (
                <h4 key={index}>{movie.original_title}</h4>
              ))}
            </Col>
          )}
        </Row>

        <Row>
          {popularMovies && (
            <Col>
              <h2>Popular</h2>
              {popularMovies.map((movie, index) => (
                <h4 key={index}>{movie.original_title}</h4>
              ))}
            </Col>
          )}
        </Row>

        <Row>
          {nowPlayingMovies && (
            <Col>
              <h2>Now Playing</h2>
              {nowPlayingMovies.map((movie, index) => (
                <h4 key={index}>{movie.original_title}</h4>
              ))}
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
}
