import React from "react";
import { Field, reduxForm } from "redux-form";

const renderInput = ({ input, label, meta }) => {
  const fieldClass = meta.touched && meta.error ? `field error` : "field";
  return (
    <div className={`${fieldClass}`}>
      <label>{label}</label>
      <input type="text" {...input} autoComplete="off" />
      {meta.touched && meta.error && (
        <div className="ui  error message">
          <div className="header">{meta.error}</div>
        </div>
      )}
    </div>
  );
};

const StreamForm = (props) => {
  // console.log("props ===>>>", props);

  const onSubmitHandler = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <div className="ui container">
      <form onSubmit={props.handleSubmit(onSubmitHandler)} className="ui form error">
        <Field name="title" component={renderInput} label="title" />
        <Field name="discription" component={renderInput} label="discription" />
        <button className="ui primary button">submit</button>
      </form>
    </div>
  );
};

const validate = (formValues) => {
  const error = {};
  if (!formValues.title) {
    error.title = "you must enter title";
  }
  if (!formValues.discription) {
    error.discription = "you must enter discription";
  }
  return error;
};

export default reduxForm({
  form: "streamForm",
  validate,
  enableReinitialize: true,
})(StreamForm);
