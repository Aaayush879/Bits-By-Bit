import React from 'react';
import {Navbar , Nav , NavbarBrand} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

import {NavLink} from 'react-router-dom'
const Header =()=>{
    
    return(
        <Navbar
        
        bg="dark" 
        >
            <Navbar.Brand>
                <h5 className='text-light'>Bit By Bit</h5>

            </Navbar.Brand>
             <Navbar.Toggle
             aria-controls="basic-navbar-nav"/>
             <Navbar.Collapse id="basic-navbar-nav">
                 <Nav  >
                     <NavLink style={{marginLeft:'10px' , color:'white'}} to='/'>Feed</NavLink>
                     <NavLink style={{marginLeft:'10px' , color:'white'}}to='/author'>Author</NavLink>
                     <NavLink style={{marginLeft:'10px', color:'white'}} to='/explore'>Explore</NavLink>
                     <NavLink style={{marginLeft:'10px', color:'white'}} to='/blogs'>Blogs</NavLink>
                     <NavLink style={{marginLeft:'10px', color:'white'}} to='/contact'>Contact</NavLink>
                     
                 </Nav>
             </Navbar.Collapse>

                   
             
        </Navbar>
    );
};
export default Header;