import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import history from "../../history/history";
import Modal from "../Modal";
import { fetchStream, deleteStream } from "../../store/action/action";
const StreamDelete = (props) => {
  const actions = () => {
    return (
      <React.Fragment>
        <button onClick={() => props.deleteStream(props.match.params.id)} className="ui button negative">
          Delete
        </button>
        <Link to="/" className="ui button primary">
          cancel
        </Link>
      </React.Fragment>
    );
  };

  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  return (
    <div>
      <Modal
        title="Delete Stream"
        content={`Are you sure you want to delete stream with title: ${props.stream.title}`}
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    stream: state.streamReducer.stream,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStream: (id) => dispatch(fetchStream(id)),
    deleteStream: (id) => dispatch(deleteStream(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete);
