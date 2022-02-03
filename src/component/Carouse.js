import React from "react";

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





const Carouse=()=> {

    
        return (
            <div >
                <div className='container-fluid' style={{backgroundColor:'black' , marginTop:"50px",borderRadius:"20px" , boxShadow:"0px, 0px,15px black" }}>
                    <div className="row">
                        <div>

                        </div>
                    </div>
                    <div className="row" style={{backgroundColor:"black"}}>
                        <div className="col-12" style={{ height:'60vh',backgroundColor:"black"}}>
                            <Carousel style={{marginTop:'15px',height:'48vh',borderRadius:'20px',backgroundColor:'white',marginLeft:'15rem' , width:'50rem',boxShadow:"0px, 15px,15px white"}}>
                                <h2 style={{textAlign:'center'}}>Carousel</h2>

                                <Carousel.Item style={{borderRadius:'20px',marginLeft:'5rem' ,width:'35rem' ,backgroundColor:'#ED8611', boxShadow:"0px, 5px, 15px #ED8611 "}}>
                                    <h1 style={{textAlign:'center'}}>Lorem Ipsum</h1>
                                    <h6>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
                                    <h6>industry. Lorem Ipsum has been the industry's standard dummy text sharing</h6>
                                    <h6>since the 1500s , where an unknown printer took a gallery of types and</h6>
                                    <h6>rerambind it to make a type boom. It has runiend not only fine</h6>
                                    <h6>centuries but also the trump into electronic typesetting</h6>
                                    <br/>
                                    
                                    
                                </Carousel.Item>

                                <Carousel.Item style={{borderRadius:'20px',marginLeft:'5rem' , width:'35rem' ,backgroundColor:'#F76565', boxShadow:"0px, 0px,15px black"}}>
                                    <h1 style={{textAlign:'center'}}>Lorem Ipsum</h1>
                                    <h6>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
                                    <h6>industry. Lorem Ipsum has been the industry's standard dummy text sharing</h6>
                                    <h6>since the 1500s , where an unknown printer took a gallery of types and</h6>
                                    <h6>rerambind it to make a type boom. It has runiend not only fine</h6>
                                    <h6>centuries but also the trump into electronic typesetting</h6>
                                    <br/>
                                   

                                    
                                </Carousel.Item>

                                <Carousel.Item style={{borderRadius:'20px', marginLeft:'5rem' ,width:'35rem' ,backgroundColor:'#60F2F2',boxShadow:"0px, 0px,15px black"}}>
                                    <h1 style={{textAlign:'center'}}>Lorem Ipsum</h1>
                                    <h6>Lorem Ipsum is simply dummy text of the printing and typesetting</h6>
                                    <h6>industry. Lorem Ipsum has been the industry's standard dummy text sharing</h6>
                                    <h6>since the 1500s , where an unknown printer took a gallery of types and</h6>
                                    <h6>rerambind it to make a type boom. It has runiend not only fine</h6>
                                    <h6>centuries but also the trump into electronic typesetting</h6>
                                    <br/>
                                    
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };


export default Carouse;