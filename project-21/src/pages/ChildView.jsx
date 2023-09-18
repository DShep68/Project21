import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

  
const ChildView = () => {
    // Use the useLocation hook to access the location object
    const location = useLocation();

    // Access the weekday value from location.state
    const dayInfo = (location.state && location.state.dayInfo) || null;
    console.log(dayInfo)

    function displayTasks() {
        return dayInfo.info.tasks.map(task => (
            <div key={task.id}>{task.text}</div>
        ))
    }

  return (
    <div>
      <h1>Child Page -</h1>
      <Link className="Link" to="/">Home</Link>
      <Link className="Link" to="/about" state={{weekday: dayInfo.day}}>About</Link>
      {displayTasks()}
    </div>
  )
}
  
export default ChildView;