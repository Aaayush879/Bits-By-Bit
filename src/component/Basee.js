import React from 'react';
import { SocialIcon } from 'react-social-icons';
const Basee=(props) =>{
    
    
    return<div >
        <div className="my bg-dark  text-center text-light  " style={{borderRadius:"10%", height:'60vh' , borderRadius:"10px" , boxShadow:'5px 5px 5px black' }}>
        <br/>
        <img className="as" src ={props.imgg} style={{width:"5rem",height:"4rem" , marginLeft:"20px" ,marginRight:"20px"  , borderRadius:"50%"}}/>
        <br/>
        <h4 style={{textAlign:'center'}}>{props.title}</h4>
        <p style={{fontSize:'0.5rem'}}>{props.text}</p>
        
        <SocialIcon url="https://instagram.com/" />
        <SocialIcon url="https://www.facebook.com/" />
        <SocialIcon url="https://linkedin.com/" />
        
        <br/>
        <br/><br/>
        </div>
    </div>
}
export default Basee;