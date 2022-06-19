import React from 'react';
import './App.css';

function SecretComponent(){
  return <h1>Super secret information for authorized user only</h1>
}
function RegularComponent(){
  return <h1>Everyone can see this component.</h1>
}


function App(props) {

  // if(props.authorized){
  //   return <SecretComponent/>
  // }else{
  //   return <RegularComponent/>
  // }
 
  //we can rewrite like this

  return(
    <>
    {props.authorized ? <SecretComponent/> : <RegularComponent/>}
    </>
  )
}

export default App;
