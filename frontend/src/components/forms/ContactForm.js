import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_contact_thunk } from "../../redux/actions/contacts";
import { add_phone } from "../../redux/actions/phone";
import { add_contact_name } from "../../redux/actions/contactName";

export const ContactForm = () => {
  const phone = useSelector((state) => state.phone);
  const name = useSelector((state) => state.contactName);

  const dispatch = useDispatch();

  const changePhone = (e) => {
    dispatch(add_phone(e.target.value));
  };

  const changeName = (e) => {
    dispatch(add_contact_name(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(add_contact_thunk(name, phone));
    dispatch(add_contact_name(""));
    dispatch(add_phone(""));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <h3>Name</h3>
          <input
            value={name}
            onChange={changeName}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <h3>Phone</h3>
          <input
            value={phone}
            onChange={changePhone}
            type="number"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};
