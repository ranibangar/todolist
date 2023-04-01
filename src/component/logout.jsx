import React, { useContext } from "react";
import { useNavigate } from "react-router";
import TodoContext from "../context/todoContext";

const Logout =()=>{
    const navigate = useNavigate();
    const {setCheckLogin} = useContext(TodoContext);
    const handleLogout = ()=> {
        setCheckLogin(false);
        localStorage.clear();
        alert("Thank you for visiting");
        navigate("/login");
    };
    return(
        <>
<div class="card text-left"> 
  <div class="card-body">
    <h4 class="card-title">Do you wish to logout from website?</h4>
    <p class="card-text mt-5">
        <button type="button" class="btn btn-outline-success" onClick={() => handleLogout()}>
            Logout
        </button>
    </p>
  </div>
 </div>        </>
    )
}
export default Logout;