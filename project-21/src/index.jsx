import React from 'react'
import { createRoot } from 'react-dom/client';
import Weekday from './components/Weekday';
import testUser from './data/testUser.json';

const App = () => {
    return (
        <React.StrictMode>
            <Weekday user={testUser.user}/>
        </React.StrictMode>
    )
}

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(<App />)