import axios from 'axios';

const API_URL = 'https://api.example.com/contacts'; // Replace with your Motoko backend URL

export const getContacts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createContact = async (contact) => {
  const response = await axios.post(API_URL, contact);
  return response.data;
};

export const updateContact = async (id, updatedContact) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedContact);
  return response.data;
};

export const deleteContact = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
