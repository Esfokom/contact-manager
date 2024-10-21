// src/App.js
import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const addOrUpdateContact = (contact) => {
    if (selectedContact) {
      setContacts(contacts.map(c => (c.id === selectedContact.id ? contact : c)));
      setSelectedContact(null);
    } else {
      contact.id = Math.random().toString(36).substr(2, 9);  // Random ID
      setContacts([...contacts, contact]);
    }
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const editContact = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="app">
      <h1>Contact Manager</h1>
      <ContactForm onSave={addOrUpdateContact} selectedContact={selectedContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} onEdit={editContact} />
    </div>
  );
};

export default App;
