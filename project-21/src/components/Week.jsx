import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../index';
import { Link } from "react-router-dom";

export default function Week() {
    const { userData, setUserData } = useContext(UserContext);
    let weekdays = userData.daysOfWeek

    function weekDay() {
        return (
            Object.keys(weekdays).map((weekdayKey) => (
                <Link className="Weekday" to="/about" state={{weekday: weekdayKey}} key={weekdayKey}>

                    {weekdayKey}
                    <span className="Weekday-taskCount">{weekdays[weekdayKey].tasksCompleted}/{weekdays[weekdayKey].tasksToDo}</span>
                </Link>
    
            )) 
        )
    }

    return (
        <div className="Weekdays">
            {weekDay()}
        </div>
    )
}