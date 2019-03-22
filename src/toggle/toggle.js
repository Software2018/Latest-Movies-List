import React from "react";
import { connect } from "react-redux";
import { ToggleAction } from "./toggleAction";

import { bindActionCreators } from "redux";

import { Nav, NavItem, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Toggle = ({ messageVisibility, ToggleAction, movieDetailId }) => (
  <div>
    {messageVisibility && (
      <div>
        <Navbar bg="light" expand="lg">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href={`/${movieDetailId}`}>Overview</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )}
    <button onClick={ToggleAction}>Navigation</button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.toggle.messageVisibility,
  movieDetailId: state.movies.movieDetailId
});

const matchDispatchProps = dispatch => {
  return bindActionCreators({ ToggleAction }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchProps
)(Toggle);

//connecting Toggle to our redux store
