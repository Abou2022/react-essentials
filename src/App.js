import React, { useState, useEffect } from 'react';
// import React, { useReducer } from 'react';
import './App.css';


//Fetch data
// https://api.github.com/users/Abou2022

function App({login}) {
  //Need to create data variable 
  const [data, setData] = useState(null);

  useEffect(()=> {
    fetch(`https://api.github.com/users/${login}`)
  .then((response) => response.json())
  .then(setData);
  }, []);

  if(data){
    return <div>{JSON.stringify(data)}</div>
  }


  return(
   <div>
    No user available
   </div>
  );
}

export default App;
