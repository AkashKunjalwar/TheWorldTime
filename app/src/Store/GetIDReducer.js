const initialState = {
  id: 0,
};

const GetIDReducer = (state = initialState, action) => {
  if (action.type === "GET_ID") {
    state.id = action.payload;
    return {
      id: state.id,
    };
  }
  return state;
};

export default GetIDReducer;
