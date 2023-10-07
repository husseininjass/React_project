import React from 'react'
import { FaUserCog } from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";
import {FiLogOut} from "react-icons/fi";
import { Link} from 'react-router-dom';

const Landingpage =() => {
return (
    <div>
        {localStorage.getItem('login') === 'true'  ? (
            <div id="loggedin">
                <h1>Welcome</h1>
                <Link to={`./UserProfile`}>
                    <FaUserCog style={{fontSize:'30px'}}/>
                </Link>
                <br />
                <Link to={`./cart`}>
                    <FaShoppingCart style={{fontSize:'30px'}} />
                </Link>
                <br />
                <FiLogOut style={{fontSize:'30px'}} onClick={() => {
                    localStorage.setItem('login','false');
                    window.location.reload();
                  }}/>
            </div>
      ) : (
            <div>
                <Link to={`./Login`}>
                    <button >Login</button>
                </Link>
                {" "}
                <Link to={`./Register`}>
                    <button >Sign Up</button>
                </Link>
            </div>
      )}
    </div>
)
}
export default Landingpage;