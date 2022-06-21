import React, { useState, useEffect } from 'react';
import './App.css';

function SecretComponent(){
  return <h1>Super secret information for authorized user only</h1>
}
function RegularComponent(){
  return <h1>Everyone can see this component.</h1>
}


function App() {
  //usestate update the initial value
  //happy is a initiall value we pass
  const [emotion, setEmotion] = useState('happy')
  //setEmotion here going to update the state
  const [secondary, setSecondary] = useState('tired')
  //setEmotion here going to update the state

  //we can add more useEffect as we need
  useEffect(() =>{
    console.log(`It's ${emotion} around here!`)

    //for example if we pass a value inside the [] use effet
    //will keep tracking the change otherwise it gonna print only happy message
  },[emotion])
  //we can add more useEffect as we need
  useEffect(() =>{
    console.log(`It's ${secondary} around here!`)

    //for example if we pass a value inside the [] use effet
    //will keep tracking the change otherwise it gonna print only happy message
  },[secondary])

  return(
    <>
    <h1>Current emotion is {emotion} and {secondary}.</h1>
    <button onClick={() => setEmotion('happy')}>
    Make  Happy
    </button>
    <button onClick={() => setSecondary('crabby')}>
    Make  crabby
    </button>
    <button onClick={() => setEmotion('frustrated')}>
    Frustrate
    </button>
    <button onClick={() => setEmotion('enthusiastic')}>
    Enthuse
    </button>
   
    </>
  )
}

export default App;
