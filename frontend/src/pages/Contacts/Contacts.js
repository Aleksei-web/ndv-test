import React from "react";
import { ContactsList } from "../../components/contactsList/ContactsList";
import { ContactForm } from "../../components/forms/ContactForm";

function Contacts() {

  return (
    <div className="container">
      <ContactForm />
      <h2>Контакты</h2>
    <ContactsList />
    </div>
  );
}

export default Contacts;
