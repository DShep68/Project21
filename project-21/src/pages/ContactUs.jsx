import React from "react";
import { Link } from "react-router-dom";
  
const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us Page</h1>
      <Link className="Link" to="/">Home</Link>
      <Link className="Link" to="/about">About</Link>
      <Link className="Link" to="/contactus">Contact Us</Link>
    </div>
  )
}

export default ContactUs;