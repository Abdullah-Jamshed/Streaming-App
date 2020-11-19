const INITIAL_STATE = {
  status: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        status: action.payload.status,
        userId: action.payload.userId,
      };
    case "SIGN_OUT":
      return {
        ...state,
        status: action.payload.status,
        userId: null,
      };

    default:
      return state;
  }
};
