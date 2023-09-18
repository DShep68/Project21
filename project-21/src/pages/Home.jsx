import React from "react";
import { useContext } from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import Week from '../components/Week';
import { UserContext } from '../index';
  
const Home = () => {

  const { userData, setUserData } = useContext(UserContext);
  return (
    <>
      <h1>Days of  the Week</h1>
      <Week/>
    </>
  )
}
  
export default Home;