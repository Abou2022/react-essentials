import React, { useState } from 'react';
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

  return(
    <>
    <h1>Current emotion is {emotion}.</h1>
    <button onClick={() => setEmotion('happy')}>
    Happy
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
