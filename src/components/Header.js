// import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import LOGO_URL from "url:../utils/restaurantLogo.svg";
import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";


// When we made a seperate file for Header component and will try to use in in App.js, then it
// will give error. 
// What can we do is - we need to import this header component from this file. 
// But before we can import it, we need to export it.
const Header = () => {
  const [LoginBtn, setLoginBtn] = useState("Login")
  // console.log('woo-hoo! Header Rendered.')
  
  // useEffect(() => {
  //   console.log('Hey! I am Header useEffect.')
  // })

  const onlineStatus=useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  return (
  <div className="header flex justify-between items-center m-4">
    <div className="logo-container">
      <img className="w-80"
        src={LOGO_URL}
        height={100}
      ></img>
    </div>
    <div className="nav-items">
      <ul className="flex justify-between font-semibold">
        <li>Online Status: {onlineStatus? "🟢" : "🔴"}</li>
        <li className="px-4"><Link to="/">Home</Link></li>
        <li className="px-4"><Link to="/about">About</Link></li>
        <li className="px-4"><Link to="/contact">Contact</Link></li>
        <li className="px-4"><Link to="/grocery">Grocery</Link></li>
        <li className="px-4"><Link to="/">Cart</Link></li>
        <li className="px-4" onClick={() => setLoginBtn(LoginBtn==="Login" ? "Logout" : "Login")}><button className="login-btn">{LoginBtn}</button></li>
        {LoginBtn==="Logout" ? <li className="px-4 text-gray-400">Hi! {loggedInUser} 👋</li> : null}
        {/* onClick={() => LoginBtn=="Login" ? setLoginBtn("Logout") : setLoginBtn("Login")} */}
        
      </ul>
    </div>
  </div>
);
}

// export default nameOfTheComponent
export default Header;