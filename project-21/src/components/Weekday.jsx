import React, { useState, useEffect, useContext } from "react";
import MyContext from '../index';
import { produce } from 'immer';



export default function Weekday({weekday}) {
    const { userData, setUserData } = useContext(MyContext);

    let tasks = userData.daysOfWeek[weekday].tasks
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


    function completeTask(taskId, taskCompleted) {
        setUserData(prevUserData => {
          return produce(prevUserData, draft => {
            const task = draft.daysOfWeek[weekday].tasks.find(task => task.id === taskId)
            if (task) {
              task.isCompleted = !taskCompleted
              task.isCompleted ? console.log(`${task.text} is Completed`) : console.log(`${task.text} is incomplete`)
              if (task.isCompleted) {
                draft.daysOfWeek[weekday].tasksCompleted = draft.daysOfWeek[weekday].tasksCompleted + 1
              } else {
                draft.daysOfWeek[weekday].tasksCompleted = draft.daysOfWeek[weekday].tasksCompleted - 1
              }
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
        setUserData(prevUserData => {
            return produce(prevUserData, draft => { 
                if (Array.isArray(taskOrRoutine)) {
                    let amountOfTasks = 0
                    amountOfTasks = taskOrRoutine.length
                    draft.daysOfWeek[weekday].tasks.push(...taskOrRoutine)
                    draft.daysOfWeek[weekday].tasksToDo = draft.daysOfWeek[weekday].tasksToDo + amountOfTasks
                } else {
                    draft.daysOfWeek[weekday].tasks.push(taskOrRoutine)
                    draft.daysOfWeek[weekday].tasksToDo = draft.daysOfWeek[weekday].tasksToDo + 1
                }
            })
        })
    }

    return (
        <>
            <div className="Weekday-title">{weekday} {userData.daysOfWeek[weekday].tasksCompleted} / {userData.daysOfWeek[weekday].tasksToDo}</div>
            <div className="WeekdayTasks">
                <div className="WeekdayTasks-addTask" onClick={() => addTask(fakeRoutine)}>
                    Add a task
                </div>
                {weekdayTasks()}
            </div>
        </>
    )
}
