import React, { useState, useEffect, useContext } from "react";
import { createRoot } from 'react-dom/client';
import Pages from './pages/Pages';
import SettingsForm from './components/SettingsForm';
import testUser from './data/testUser.json';

export const UserContext = React.createContext();

export function UserProvider({ children }) {
    let [userData, setUserData] = useState(testUser.user)
  
    return (
      <UserContext.Provider value={{userData, setUserData}}>
        {children} {/* Render the wrapped content */}
      </UserContext.Provider>
    )
  }



const App = () => {
    
    return (
        <React.StrictMode>
            <UserProvider>
                {/* <Weekday user={userData} setUser={setUserData}/> */}
                {/* <Pages /> */}
                <SettingsForm />
            </UserProvider>
        </React.StrictMode>
    )
}

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(<App />)