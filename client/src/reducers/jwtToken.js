const jwtTokenReducer = (state = "", action) => {
  switch (action.type) {
    case "setToken":
      return (state = action.value);
    case "clearToken":
      return (state = "");
    default:
      return state;
  }
};

export default jwtTokenReducer;
