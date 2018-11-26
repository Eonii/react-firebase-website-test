import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProductDetails from './components/products/ProductDetails'
import LogIn from './components/auth/LogIn'
import SignUp from './components/auth/SignUp'
import CreateProduct from './components/products/CreateProduct'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/product/:id' component={ProductDetails} />
            <Route path='/login' component={LogIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create-product' component={CreateProduct} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

//https://youtu.be/z0QpTl5-0Bk?list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&t=4
export default App;
