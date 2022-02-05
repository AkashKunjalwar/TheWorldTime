const initialState = {
  location: "",
  useDTS: null,
};

const SendOutputReducer = (state = initialState, action) => {
  if (action.type === "LOCATION_DETAILS") {
    state.location = action.payload.name;
    state.useDTS = action.payload.useDTS;

    return {
      location: state.location,
      useDTS: state.useDTS,
    };
  }
  return state;
};

export default SendOutputReducer;
