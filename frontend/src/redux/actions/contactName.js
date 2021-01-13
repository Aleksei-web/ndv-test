import * as TYPES from "../types/contactName";

export const add_contact_name = (name) => ({
  type: TYPES.ADD_NAME,
  payload: name,
});
