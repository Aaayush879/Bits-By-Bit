
import React,{useState} from 'react';
import './App.css';
import Layout from './component/Layout';
import Feed from './component/Feed';
import Carouse from './component/Carouse';
import Header from './component/Header';
import Page from './component/Page';
import Explore from './component/Explore'
import Blogs from './component/Blogs';

import {
  BrowserRouter as Router,
  Switch ,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return(
    <div className="App">
      
      <Router>
        <Switch>
          <Layout>
            <div style={{height:'85vh'}}>
              <Route exact path='/'><Feed/></Route>
              <Route path='/author'><Explore/></Route>
              <Route path='/explore'><Carouse/></Route>
              <Route path='/blogs'><Blogs/></Route>
              <Route path='/contact'><Page/></Route>

            </div>
          </Layout>
        </Switch>
      </Router>
      
      
    </div>
  );
  
 
}

export default App;
