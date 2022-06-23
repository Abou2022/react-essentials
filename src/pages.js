import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export function Home(){
    return(
        <div>
            <h1>[Comapany Website]</h1>
            <nav>
                <Link to='about'>About</Link>
                <Link to='events'>Events</Link>
                <Link to='contact'>Contact</Link>
            </nav>
        </div>
    )
}
export function About(){
    return(
        <div>
            <h1>[About]</h1>
            {/* oulet will handler service, history and link  */}
            <Outlet/>
            <nav><Link to='/'>Home</Link></nav>
        </div>
    )
}
export function Services(){
    return(
        <div>
            <h2>Our Service </h2>
        </div>
    )
}
export function CompanyHistory(){
    return(
        <div>
            <h2>Our Comapany History </h2>
        </div>
    )
}
export function Location(){
    return(
        <div>
            <h2>Our Location </h2>
        </div>
    )
}



export function Events(){
    return(
        <div>
            <h1>[Events]</h1>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
        </div>
    )
}
export function Contact(){
    return(
        <div>
            <h1>[Contact]</h1>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
        </div>
    )
}

export function Whoops404(){

    let location = useLocation();
    console.log(location)
    return(
        <div>
            {/* <h1>This page does not exist!!</h1> */}
            <h1>Resource not found at {location.pathname}</h1>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
        </div>
    )
}