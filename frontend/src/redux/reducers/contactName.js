import * as TYPES from "../types/contactName";

function contactNameReducer(state = "", action) {
  switch (action.type) {
    case TYPES.ADD_NAME:
      return action.payload;
    default:
      return state;
  }
}

export default contactNameReducer;
