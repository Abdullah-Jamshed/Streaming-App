import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import GoogleAuth from "./GoogleAuth";
import StreamList from "./streams/StreamList";

const Home = (props) => {
  return (
    <div className="ui container">
      <StreamList />

      {props.status && (
        <div style={{ textAlign: "right", marginTop: "10px" }}>
          <Link to="/streams/create" className="ui button primary">
            Create
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.subReducer.status,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
