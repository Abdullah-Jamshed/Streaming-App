import streams from "../../api/streams";
import history from "../../history/history";

const signIn = (status, userId) => {
  return (dispatch) =>
    dispatch({
      type: "SIGN_IN",
      payload: { status, userId },
    });
};

const signOut = (status) => {
  return (dispatch) =>
    dispatch({
      type: "SIGN_OUT",
      payload: { status },
    });
};

const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().subReducer;
    const response = await streams.post("/streams", { ...formValues, userId });
    dispatch({ type: "CREATE_STREAM", payload: { data: response.data } });
    history.push("/");
  };
};

const fetchStream = (id) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({ type: "FETCH_STREAM", payload: { data: response.data } });
  };
};

const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get("/streams");
    dispatch({ type: "FETCH_STREAMS", payload: { data: response.data } });
  };
};

const editStream = (id, formValues) => {
  return async (dispatch) => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({ type: "EDIT_STREAM", payload: { data: response.data } });
    history.push("/");
  };
};

const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: "DELETE_STREAM", payload: { id } });
    history.push("/");
  };
};

export { signIn, signOut, createStream, fetchStream, fetchStreams, editStream, deleteStream };
