// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const userData = {
    name: 'John Doe',
    email: 'john@example.com',
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to={{ pathname: '/profile', state: { user: userData } }}>
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
