import React from "react";
import { useDispatch } from "react-redux";
import { add_contact_name } from "../../redux/actions/contactName";
import { delete_contact_thunk } from "../../redux/actions/contacts";
import { add_phone } from "../../redux/actions/phone";

const ItemList = ({ contacts }) => {
  const dispatch = useDispatch();
  const onDelete = (e, id) => {
    console.log("id", id);
    e.preventDefault();
    dispatch(delete_contact_thunk(id));
  };

  const updateContact = (e, name, id, phone) => {
    e.preventDefault();
    dispatch(add_phone(phone));
    dispatch(add_contact_name(name));
    dispatch(delete_contact_thunk(id));
  };

  return (
    <div>
      {contacts.length > 0 ? (
        contacts.map((el) => (
          <li
            key={el.id}
            className="d-flex justify-content-between align-items-center list-group-item"
          >
            <p>
              name: {el.name} / phone: {el.phone}
            </p>
            <span>
              <button
                onClick={(e) => updateContact(e, el.name, el.id, el.phone)}
                className="btn btn-primary m-2"
              >
                Редактировать
              </button>
              <button
                onClick={(e) => onDelete(e, el.id)}
                className="btn btn-danger"
              >
                Удалить
              </button>
            </span>
          </li>
        ))
      ) : (
        <h1>Контактов нет</h1>
      )}
    </div>
  );
};

export default ItemList;
