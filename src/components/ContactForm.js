// src/components/ContactForm.js
import React, { useState, useEffect } from 'react';

const ContactForm = ({ onSave, selectedContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (selectedContact) {
      setName(selectedContact.name);
      setPhone(selectedContact.phone);
      setEmail(selectedContact.email);
    } else {
      setName('');
      setPhone('');
      setEmail('');
    }
  }, [selectedContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { id: selectedContact?.id || null, name, phone, email };
    onSave(contact);
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Phone" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <button type="submit">Save Contact</button>
    </form>
  );
};

export default ContactForm;
