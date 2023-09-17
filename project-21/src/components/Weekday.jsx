import React, { useState, useEffect } from "react";
import { produce } from 'immer';



export default function Weekday({user, setUser}) {
    console.log(user)

    let weekDay = "Sunday"
    let tasks = user.daysOfWeek[weekDay].tasks
    let fakeTask = {
        "id": Math.floor(Math.random() * 1000) + 10,
        "date": "2023-09-18",
        "time": "08:00 AM",
        "text": "This is a Fake Task",
        "taskDuration": 3600, // 1 hour in seconds
        "isCompleted": false,
        "image": "task1_image.jpg"
    }
    let fakeRoutine = [
        {
            "id": Math.floor(Math.random() * 1000) + 10,
            "date": "2023-09-18",
            "time": "08:00 AM",
            "text": "This is a Fake Routine Task",
            "taskDuration": 3600, // 1 hour in seconds
            "isCompleted": false,
            "image": "task1_image.jpg"
        },
        {
            "id": Math.floor(Math.random() * 1000) + 10,
            "date": "2023-09-18",
            "time": "08:00 AM",
            "text": "This is a Fake Routine Task",
            "taskDuration": 3600, // 1 hour in seconds
            "isCompleted": false,
            "image": "task1_image.jpg"
        }
    ]
        
    console.log(user)


    function completeTask(taskId, taskCompleted) {
        setUser(prevUser => {
          return produce(prevUser, draft => {
            const task = draft.daysOfWeek[weekDay].tasks.find(task => task.id === taskId)
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

    function addTask(taskOrRoutine) {
        setUser(prevUser => {
            return produce(prevUser, draft => {
                if (Array.isArray(taskOrRoutine)) {
                    draft.daysOfWeek[weekDay].tasks.push(...taskOrRoutine)
                } else {
                    draft.daysOfWeek[weekDay].tasks.push(taskOrRoutine)
                }
            })
        })
    }
    

    return (
        <div className="WeekdayTasks">
            <div className="WeekdayTasks-addTask" onClick={() => addTask(fakeTask)}>
                Add a task
            </div>
            {weekdayTasks()}
        </div>
    )
}
