import * as TYPES from "../types/phone";

function phoneReducer(state = "", action) {
  switch (action.type) {
    case TYPES.ADD_PHONE:
      return action.payload;
    default:
      return state;
  }
}

export default phoneReducer;
