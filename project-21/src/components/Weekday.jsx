import React, { useState, useEffect } from "react";
import { produce } from 'immer';



export default function Weekday({user}) {

    let [userData, setUserData] = useState(user)
    let tasks = userData.daysOfWeek.Monday.tasks
    console.log(userData)


    function completeTask(taskId, taskCompleted) {
        setUserData(prevUserData => {
          return produce(prevUserData, draft => {
            const task = draft.daysOfWeek.Monday.tasks.find(task => task.id === taskId)
            if (task) {
              task.isCompleted = !taskCompleted
              task.isCompleted ? console.log(`${task.text} is Completed`) : console.log(`${task.text} is incomplete`)
            }
          })
        })
      }


    function weekdayTasks() {
        return tasks.map((task) => (
            <div className="WeekdayTask" onClick={() => (completeTask(task.id, task.isCompleted))} key={task.id}>
                <div className="WeekdayTask-content">
                    <div className="WeekdayTask-task">{task.text}</div>
                    <div className="WeekdayTask-date">{task.date}</div>
                    <div className="WeekdayTask-taskDuration">{task.taskDuration}</div>
                </div>
                <div className={`WeekdayTask-isCompleted${task.isCompleted ? ' completed' : ''}`}></div>
            </div>
        ))
    }

    return (
        <div className="WeekdayTasks">
            {weekdayTasks()}
        </div>
    )
}
