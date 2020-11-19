// import { fetchStream, fetchStreams, editStream, deleteStream } from "../action/action";
import _ from "lodash";
const INITIAL_STATE = {
  streams: {},
  stream: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_STREAMS":
      return {
        ...state,
        streams: { ...state.data, ..._.mapKeys(action.payload.data, "id") },
      };
    case "FETCH_STREAM":
      return {
        ...state,
        stream: action.payload.data,
        // stream: { [action.payload.data.id]: action.payload.data },
      };
    case "EDIT_STREAM":
      return {
        ...state,
        // stream: action.payload.data,
        [action.payload.data.id]: action.payload.data,
      };
    case "DELETE_STREAM":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
