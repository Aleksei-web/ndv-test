import * as TYPES from "../types/contacts";

function contactReducer(state = [], action) {
  switch (action.type) {
    case TYPES.GET_CONTACTS:
      return action.payload;
    case TYPES.ADD_CONTACT:
      return [...state, action.payload];
    case TYPES.DELETE_CONTACT:
      return state.filter((el) => el.id !== action.payload);
    case TYPES.SEARCH_CONTACT:
      return state.filter(
        (el) =>
          el.name.includes(action.payload) || el.phone.includes(action.payload)
      );
    default:
      return state;
  }
}

export default contactReducer;
