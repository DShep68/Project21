import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';
import AppTwo from './components/AppTwo';
import Weekday from './components/Weekday';
import FirstComponent from './components/Link';
import testUser from './data/testUser.json';



const App = () => {
    let [userData, setUserData] = useState(testUser.user)
    return (
        <React.StrictMode>
            <AppTwo />
            <Weekday user={userData} setUser={setUserData}/>
        </React.StrictMode>
    )
}

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(<App />)