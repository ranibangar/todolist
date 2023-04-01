import React,{ useState } from "react";
import Navbar from "./component/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Login from "./component/login";
import LogOut from "./component/logout";
import ToDoList from "./component/toDoList";
import TodoContext from "./context/todoContext"

const App = ()=>{
  const [user,setUser] = useState ({
    email:"",
    password:"",
  });
 return(
        <>
<TodoContext.Provider 
value={{user,setUser}}>
<Navbar/>
  <div className="container pt-3">
<Routes>
             <Route element={<Home />} path="/" />
              <Route element={<Login />} path="/login" />
              <Route element={<LogOut />} path="/logOut" />
              <Route element={<ToDoList />} path="/toDoList" />              
</Routes>
 </div> 
 </TodoContext.Provider>
 </>
 );
};
export default App;