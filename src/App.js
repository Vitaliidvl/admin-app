import React from 'react';
import './App.css';
import Home from './components/pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Toolbar from './components/Topbar/Topbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './components/pages/UserList/UserList';
import User from './components/pages/User/User';
import NewUser from './components/pages/NewUser/NewUser';
import ProductList from './components/pages/ProductList/ProductList';
import Product from './components/pages/Product/Product';
import NewProduct from './components/pages/NewProduct/NewProduct';

export default function App() {
  return (
    <Router>
      <Toolbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
