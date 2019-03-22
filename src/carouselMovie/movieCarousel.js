import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./movieCarousel.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getOverview } from "../toggleoverview/carouselAction";

const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class MovieCarousel extends React.Component {
  render() {
    const { movieTopFive, overview, getOverview } = this.props;

    return (
      <div>
        <Carousel className="Img">
          {movieTopFive.map(movie => (
            <Carousel.Item>
              <Link to={`/${movie.id}`}>
                <Overdrive id={movie.id}>
                  <Moviewrap
                    backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}
                  />
                </Overdrive>
              </Link>{" "}
              <Carousel.Caption>
                <div>{movie.title}</div>
                {overview && <p>{movie.overview}</p>}
                <Button onClick={getOverview} className="button">
                  {" "}
                  {overview ? <p1>Less...</p1> : <p1> More...</p1>}
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

const matchDispatchProps = dispatch => {
  return bindActionCreators({ getOverview }, dispatch);
};

const mapStateToProps = state => ({
  overview: state.ToggleOverview.overview
});
export default connect(
  mapStateToProps,
  matchDispatchProps
)(MovieCarousel);
const Moviewrap = styled.div`
  postion: relative;
  background: url(${props => props.backdrop}) center 20% no-repeat;

  padding-top: 50vh;
  background-size: cover;

  @media screen and (max-width: 320px) {
    position: relative;
    padding-top: 0;
  }
`;
