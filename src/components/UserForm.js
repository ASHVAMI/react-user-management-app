import React, { useState, useEffect } from 'react';
import { createUser, updateUser, fetchUserById } from '../services/userService';

const UserForm = ({ userId, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    username: '',
    address: {
      street: '',
      city: ''
    },
    company: {
      name: ''
    },
    website: ''
  });

  useEffect(() => {
    if (userId) {
      fetchUserById(userId).then(data => setFormData(data));
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      updateUser(userId, formData).then(onSubmit);
    } else {
      createUser(formData).then(onSubmit);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
      <input name="address.street" value={formData.address.street} onChange={handleChange} placeholder="Street" required />
      <input name="address.city" value={formData.address.city} onChange={handleChange} placeholder="City" required />
      <input name="company.name" value={formData.company.name} onChange={handleChange} placeholder="Company Name" />
      <input name="website" value={formData.website} onChange={handleChange} placeholder="Website" />
      <button type="submit">{userId ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default UserForm;
