import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../store/action/action";
import StreamForm from "./StreamForm";

const StreamCreate = (props) => {
  const onSubmitHandler = (formValues) => {
    props.createStream(formValues);
  };

  return (
    <div className="ui container">
      <h1>Stream Create</h1>
      <StreamForm onSubmit={onSubmitHandler} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createStream: (formValues) => dispatch(createStream(formValues)),
  };
};

export default connect(null, mapDispatchToProps)(StreamCreate);
