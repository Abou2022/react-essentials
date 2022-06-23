import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';


//important app function 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App login='Abou2022'/>
    </Router>


);
