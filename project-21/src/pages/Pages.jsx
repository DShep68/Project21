// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
  } from "react-router-dom";
  
// import Home component
import Home from "./Home";
// import About component
import About from "./About";
// import ContactUs component
import ContactUs from "./ContactUs";
import ChildView from "./ChildView";
  
function Pages() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/childview" element={<ChildView />} />
          </Routes>
        </Router>
      </>
    );
  }
  
  
export default Pages;