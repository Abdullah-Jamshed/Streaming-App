import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../store/action/action";
import StreamForm from "./StreamForm";

const StreamEdit = (props) => {
  // console.log("edit props===>>>", props);

  const onSubmitHandler = (formValues) => {
    props.editStream(props.match.params.id, formValues);
  };

  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  return (
    <div className="ui container">
      <h1>Stream Edit</h1>
      {props.stream.title && <StreamForm initialValues={_.pick(props.stream, "title", "discription")} onSubmit={onSubmitHandler} />}
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
    editStream: (id, formValues) => dispatch(editStream(id, formValues)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
