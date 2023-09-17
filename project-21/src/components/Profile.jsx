// Profile.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const { user } = location.state;

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
