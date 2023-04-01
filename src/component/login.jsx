import React,{useContext,useState} from "react";
import { useNavigate } from "react-router";
import TodoContext from "../context/todoContext";


const Login =()=>{

    const navigate = useNavigate();
    const newContext = useContext(TodoContext);
    const[email,setEmail]= useState("");
    const[password,setPassword]= useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();
        if(!email||!password) {
            alert("Please fill all the details");
            return;
        }
        newContext.setUser({
            email:email,
            password:password,
       });
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    navigate("/");
 };
    return(
        <>
<form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
        </div>
        <div className="form-outline mb-4">
          <textarea
          tyep="text"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
        </div>
        <button
          type="submit"
          className="btn btn-success btn-block d-flex justify-content-center mb-4">
          Login
        </button>
      </form>        </>
    )
}
export default Login;