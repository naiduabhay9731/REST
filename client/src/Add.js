import React, { useState } from "react";
import axios from "axios";
import "./Add.css";

function Add() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [stat, setstat] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Title:', title);
    console.log('Description:', desc);
    console.log('Status:', stat);

    const inputData = new URLSearchParams();
    inputData.append('title', title);
    inputData.append('description', desc);
    inputData.append('status1', stat);

    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },


      body: inputData.toString(),
    })
      // .then((response) => response.json())
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
        <h1>Add your Task</h1>
        <button
          onClick={() => (window.location.href = "/")}
          className="home-button"
        >
          Home
        </button>
      </div>
      <form  className=" form-container" onSubmit={handleSubmit}>
        <div  className="form-field">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-field">
          <label>Description:</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-field">
          <label>Status:</label>
          <input
            type="text"
            value={stat}
            onChange={(e) => setstat(e.target.value)}
            className="input-field"

          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      
    </div>
  );
}

export default Add;
