import * as TYPES from "../types/contacts";
import axios from "axios";
import { hide, show } from "./loader";

export const get_contact = (contacts) => ({
  type: TYPES.GET_CONTACTS,
  payload: contacts,
});

export const delete_contact = (id) => ({
  type: TYPES.DELETE_CONTACT,
  payload: id,
});

export const add_contact = (contact) => ({
  type: TYPES.ADD_CONTACT,
  payload: contact,
});

export const put_contact = (contact) => ({
  type: TYPES.PUT_CONTACT,
  payload: contact,
});

export const search_contacts = (str) => ({
  type: TYPES.SEARCH_CONTACT,
  payload: str,
});

export const get_contacts_thunk = () => (dispatch, getState) => {
  dispatch(show());
  axios
    .get("http://localhost:3001/api/contacts")
    .then((res) => {
      dispatch(get_contact(res.data));
      dispatch(hide());
    })
    .catch((err) => {
      console.log(err);
      dispatch(hide());
    });
};

export const add_contact_thunk = (name, phone) => (dispatch, getState) => {
  dispatch(show);
  axios
    .post("http://localhost:3001/api/contact", { name, phone })
    .then((res) => {
      dispatch(add_contact(res.data));
    });
};

export const delete_contact_thunk = (id) => (dispatch, getState) => {
  dispatch(show);
  axios
    .delete(`http://localhost:3001/api/contact/${id}`)
    .then((res) => dispatch(delete_contact(res.data)));
};

export const put_contact_thunk = (id, name, phone) => (dispatch, getState) => {
  axios
    .put("http://localhost:3001/api/contact", { id, name, phone })
    .then((res) => put_contact({ id, name, phone }));
};
