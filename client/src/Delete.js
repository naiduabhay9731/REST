import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./Add.css";

function Delete() {

   
    


  const [title, settitle] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Title:', title);
    
    

    const inputData = new URLSearchParams();
    inputData.append('title', title);
    

    fetch('https://rest-rsot.onrender.com/tasks', {
      method: 'DELETE',
     
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },


      body: inputData.toString(),
    })
    //   .then((response) => response.json())
      .then((data) => {
        window.location.href='/get';
        console.log(data);
        
      })
      .catch((error) => {
    
        console.error(error);
      });
  };

  return (
    <div className="container">
      
      
      <div class="top-bar">
        <h1>Update your Task</h1>
        <button
          onClick={() => (window.location.href = "/")}
          className="home-button"
        >
          Home
        </button>
      </div>
      
      <form  className=" form-container" onSubmit={handleSubmit}>
        <div  className="form-field">
          <label>Title of task you want to delete:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="input-field"
          />
        </div>
        
        
        <button type="submit" className="submit-button">Submit</button>
      </form>
      
    </div>
  );
}   

export default Delete;