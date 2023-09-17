import React, { useState, useEffect, useContext } from "react";
import { createRoot } from 'react-dom/client';
import Pages from './pages/Pages';
import testUser from './data/testUser.json';

export default MyContext = React.createContext();

export function MyProvider({ children }) {
    let [userData, setUserData] = useState(testUser.user)
  
    return (
      <MyContext.Provider value={{userData, setUserData}}>
        {children} {/* Render the wrapped content */}
      </MyContext.Provider>
    )
  }



const App = () => {
    
    return (
        <React.StrictMode>
            <MyProvider>
                {/* <Weekday user={userData} setUser={setUserData}/> */}
                <Pages />
            </MyProvider>
        </React.StrictMode>
    )
}

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(<App />)