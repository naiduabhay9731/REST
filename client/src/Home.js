/* eslint-disable */

import React from 'react';


function Home() {
  
  const  handleAdd = (e) => {
    e.preventDefault();
    // Make a POST request to "/tasks"
    

    if (1) {
      window.location.href = '/post';
    } else {
      console.log('Request failed with status:', response.status);
    }
  };

  const handleGet = (e) => {
    e.preventDefault();
    
    if (1) {
      window.location.href = '/get';
    } else {
      console.log('Request failed with status:', response.status);
    }
      
  };

  const handleDelete =(e)=>{
    e.preventDefault();
    window.location.href='/delete';
  }

  const handlePut = (e) => {
    e.preventDefault();
    
    if (1) {
      window.location.href = '/put';
    } else {
      console.log('Request failed with status:', response.status);
    }
  };

  return (
    <div className='container'>
    <h1 >Welcome</h1>
    <button onClick={handleAdd}>Create Task</button>
    <button onClick={handleGet}>Show Tasks</button>
    <button onClick={handlePut}>Update Tasks</button>
    <button onClick={handleDelete}>Delete Tasks</button>
  </div>
  
  );
}

export default Home;
