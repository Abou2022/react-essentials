import React from 'react';
import './App.css';
import restaurant from './restaurant.jpg'

function Header(props){
  return (
    <header>
      <h1> {props.name} 's Kitchen</h1>
    </header>
  );
}

function Main(props){
  return (
    <section>
      <p> The dishes is {props.adjective}</p>
    <img src={restaurant}
    height={300}
    alt="dish"/>
    
      <ul style={{textAlign:'left'}}>
      {/* map will check each element inside the array */}
      {props.dishes.map((dish) => (
      <li key = {dish.id}>{dish.title}</li> 
      ))}
      </ul>
    </section>
  );
}
function Footer(props){
  return (
    <footer>
      <p>copyright{ props.year} </p>
    </footer>
  );
}
const dishes = [
  'Kabato and sauce feuille',
  'riz au gras',
  'salade',
  'kasava'
];
// after arrow we nned to wrap inside the parenthese
const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish}));




function App() {
  return (
    <div className="App">
     <Header name='Bak'  />
     <Main adjective='amazin' dishes={dishObjects}/>
     <Footer year={new Date().getFullYear()}/>
     
    </div>
  );
}

export default App;
