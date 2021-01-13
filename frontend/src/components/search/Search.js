import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search_contacts } from "../../redux/actions/contacts";

export const Search = () => {
  const [finder, setFinder] = useState("");

  const dispatch = useDispatch();

  const searchContact = (e, finder) => {
    e.preventDefault();
    dispatch(search_contacts(finder));
  };

  return (
    <form onSubmit={(e) => searchContact(e, finder)} className="d-flex">
      <input
        value={finder}
        onChange={(e) => setFinder(e.target.value)}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success">Search</button>
    </form>
  );
};
