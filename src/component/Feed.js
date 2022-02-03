import React from 'react';
import {Button} from 'react-bootstrap';
import images from './images.jpg';

const Feed=()=>{
    return(
        <div style={{width:'100%' , display:'flex'}}>
            <div style={{marginLeft:'5rem'}}>
                <h1>Lorem Ipsum</h1>
                <br/>
                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
                <h6>industry. Lorem Ipsum has been the industry's standard dummy text sharing</h6>
                <h6>since the 1500s , where an unknown printer took a gallery of types and</h6>
                <h6>rerambind it to make a type boom. It has runiend not only fine</h6>
                <h6>centuries but also the trump into electronic typesetting</h6>
                <br/>
                <Button className='btn-outline-dark' style={{borderRadius:'30px'}}>Learn More</Button>
            </div>
            <div>
                <br/>
                <img src={images}/>

            </div>

        </div>
    )
}
export default Feed;