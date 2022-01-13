export const setToken = (token) => {
  return {
    type: "setToken",
    value: token,
  };
};

export const clearToken = () => {
  return {
    type: "clearToken",
  };
};
