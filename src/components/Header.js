// import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import LOGO_URL from "../utils/constants";
import { useEffect, useState } from "react";


// When we made a seperate file for Header component and will try to use in in App.js, then it
// will give error. 
// What can we do is - we need to import this header component from this file. 
// But before we can import it, we need to export it.
const Header = () => {
  const [LoginBtn, setLoginBtn] = useState("Login")
  console.log('woo-hoo! Header Rendered.')
  
  // useEffect(() => {
  //   console.log('Hey! I am Header useEffect.')
  // })
  return (
  <div className="header">
    <div className="logo-container">
      <img
        src={LOGO_URL}
        height={100}
      ></img>
    </div>
    <div className="nav-items">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/">Cart</Link></li>
        <li className="login" onClick={() => setLoginBtn(LoginBtn==="Login" ? "Logout" : "Login")}><button className="login-btn">{LoginBtn}</button></li>
        {/* onClick={() => LoginBtn=="Login" ? setLoginBtn("Logout") : setLoginBtn("Login")} */}
        
      </ul>
    </div>
  </div>
);
}

// export default nameOfTheComponent
export default Header;