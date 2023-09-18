import React from "react";
import Weekday from '../components/Weekday';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

  
const About = () => {
   // Use the useLocation hook to access the location object
   const location = useLocation();

   // Access the weekday value from location.state
   const weekday = (location.state && location.state.weekday) || null;

  return (
    <div>
      <h1>Day Page - {weekday}</h1>
      <Link className="Link" to="/">Home</Link>
      <Weekday weekday={weekday}/>
    </div>
  )
}
  
export default About;