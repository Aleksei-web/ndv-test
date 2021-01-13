import * as TYPES from "../types/user";
import axios from "axios";
import { hide, show } from "./loader";
import { toast } from "react-toastify";

export const add_users = (email) => ({
  type: TYPES.ADD_USERS,
  payload: email,
});

export const delete_user = () => ({
  type: TYPES.DELETE_USER,
  payload: null,
});

export const add_users_thunk = (email, password) => (dispatch, getState) => {
  dispatch(show());
  axios
    .post("http://localhost:3001/api/login", { email, password })
    .then((res) => {
      dispatch(add_users(res.data));
      window.localStorage.setItem("user", res.data);
      dispatch(hide());
    })
    .catch((err) => {
      toast.error(`Не верный логин или пароль`);
      dispatch(hide());
    });
};
