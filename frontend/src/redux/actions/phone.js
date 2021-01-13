import * as TYPES from "../types/phone";

export const add_phone = (phone) => ({
  type: TYPES.ADD_PHONE,
  payload: phone,
});
