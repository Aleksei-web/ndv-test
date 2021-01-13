import React, { useEffect } from "react";
import ItemList from "../contactItem/ItemList";
import { useDispatch, useSelector } from "react-redux";
import { get_contacts_thunk } from "../../redux/actions/contacts";

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_contacts_thunk());
  }, []);

  const contacts = useSelector((state) => state.contacts);
  return (
    <div>
      <ul className="list-group list-group-flush">
        <ItemList contacts={contacts} />
      </ul>
    </div>
  );
};
