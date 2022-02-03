import React from 'react';
import {Navbar , Nav , NavbarBrand} from "react-bootstrap";


import {NavLink} from 'react-router-dom'
const Base =()=>{
    
    return(
        <Nav style={{backgroundColor:'black'}} >
            <NavLink style={{marginLeft:'500px' , color:'white'}} to='/news'>News</NavLink>
            <NavLink style={{marginLeft:'10px' , color:'white'}}to='/sports'>Sports</NavLink>
            <NavLink style={{marginLeft:'10px', color:'white'}} to='/weather'>Weather</NavLink>
            <NavLink style={{marginLeft:'10px', color:'white'}} to='/future'>Future</NavLink>
            
        </Nav>
        
                
             
    );
};
export default Base;