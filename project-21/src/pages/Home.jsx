import React from "react";
import { useContext } from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import Week from '../components/Week';
import MyContext from '../index';
  
const Home = () => {

  const { userData, setUserData } = useContext(MyContext);
  return (
    <>
      <h1>Days of  the Week</h1>
      <pre>{JSON.stringify(userData)}</pre>
      <Link className="Link" to="/">Home</Link>
      <Link className="Link" to="/about">About</Link>
      <Link className="Link" to="/contactus">Contact Us</Link>
      <Week/>
      {/* <Test/> */}
    </>
  )
}
  
export default Home;