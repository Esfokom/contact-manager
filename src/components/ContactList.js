// src/components/ContactList.js
import React from 'react';
import { motion } from 'framer-motion';

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <motion.div 
          key={contact.id}
          className="contact-card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
        >
          <h3>{contact.name}</h3>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
          <button onClick={() => onEdit(contact)}>Edit</button>
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactList;
