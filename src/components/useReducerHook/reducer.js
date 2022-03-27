import React from "react";

const Reducer = (state, action) => {
  if (action.type === "ADD_TODO") {
    const item = { id: new Date().getMilliseconds(), todo: action.payload };
    return [...state, item];
  }
  if (action.type === "REMOVE_TODO") {
    let newData = state.filter((item) => item.id !== action.payload);
    return newData;
  }
  return state;
};

export default Reducer;
