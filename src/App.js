import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
//import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Sidebar from './components/Sidebar';


import ListPaymentComponent from './components/ListPaymentComponent';
import AddPaymentComponent from './components/AddPaymentComponent';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          
          
          
          <Route path='/ListPaymentComponent' exact component={ListPaymentComponent} />
          <Route path='/AddPaymentComponent' component={AddPaymentComponent} />
          
         
        
          
        </Switch>
      </Router>
    </>
  );
}

export default App;