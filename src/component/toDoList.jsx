import React from "react";

const ToDoList =()=>{

    return(
        <>
        <form >
            <div className="mb-2">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Header" />
            </div>
            <div className="mb-2" >
                <input 
                type="textarea" 
                className="form-control" 
                placeholder="Body" />
            </div>
            <button
          type="submit"
          className="btn btn-success btn-block d-flex justify-content-center mb-4"
        >
          submit
        </button>
        </form>
        </>
    )
}
export default ToDoList;