import React from 'react';
import Basee from './Basee';
import imgg from './imgg.jpg';




const Page=() => {
    return <div   style={{  width:"100%" , height:"50vh"  }}><br/><br/><br/>
        <br/><br/>
        <div style={{  display:"flex"  , height:"90%" , width:"90%"}}><br/><br/>
    

        <div className="d-block w-100" style={{marginLeft:"50px"}}>
        <Basee  imgg={imgg} title="Lorem Ipsum" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text sharing since the 1500s , where an unknown printer took a gallery of types and rerambind it to make a type boom. It has runiend not only fine centuries but also the trump into electronic typesetting"/> <br/><br/>
       
        </div>
        <br/><br/><br/>
        <div  className="d-block w-100" style={{marginLeft:"100px"}}>
        <Basee   imgg={imgg} title="Lorem Ipsum" text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text sharing since the 1500s , where an unknown printer took a gallery of types and rerambind it to make a type boom. It has runiend not only fine centuries but also the trump into electronic typesetting"/> <br/><br/>
        
        </div>
        <div className="d-block w-100" style={{marginLeft:"100px"}}>
        <Basee  imgg={imgg} title="Lorem Ipsum" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text sharing since the 1500s , where an unknown printer took a gallery of types and rerambind it to make a type boom. It has runiend not only fine centuries but also the trump into electronic typesetting"/> <br/>
        
        </div>


    </div>
    
    </div>
};

export default Page;