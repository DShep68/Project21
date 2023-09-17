// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation'; // Assuming you have a navigation component
import Profile from './Profile'; // Import the Profile component

function AppTwo() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          {/* Define the route for "/profile" */}
          <Route path="/profile" component={Profile} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppTwo;
