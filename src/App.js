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

  // to fectch all data 
  // if(data){
  //   return <div>{JSON.stringify(data)}</div>
  // }

  //to fectch specifique information (data)
  if(data){
    return (<div>
      <h1>{data.name}</h1>
      <h3>{data.location}</h3>
      <h3>{data.node_id}</h3>
      <img alt={data.login} src={data.avatar_url}/>
    </div>);
  }


  return(
   <div>
    No user available
   </div>
  );
}

export default App;
