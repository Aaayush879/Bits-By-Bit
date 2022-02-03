import React from 'react';
import Header from './Header';
import Base from './Base';





const Layout =({children})=>{
    return <div className="default-layout" >
        <header className="header" >
            <Header/>
        

        </header>
        <main className="main"  >
            {children}
            
        </main>
        <footer className="footer" style={{height:'10vh'}} >
            <br/>
            <Base />

        </footer>

    </div>
};
export default Layout;