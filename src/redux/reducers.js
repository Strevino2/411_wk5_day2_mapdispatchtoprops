import { combineReducers } from "redux";
const user = (state = null) => state; 
const cars = (state = [], action) => {
    // add switch statements in here
  switch (action.type) {
    case "ADD_CAR":
      return [...state, action.value];
    case "REMOVE_CAR":
      const copy = [...state];
      copy.splice(action.value, 1)
      return copy;
    default:
      return state;
  }
};
export default combineReducers({ user, cars });