import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import Layout from '../Pages/Layout';
import Home from '../Pages/Home';
import { Route } from 'react-router';
import ViewBlog from '../Pages/ViewBlog';
import AddBlog from '../Pages/AddBlog';
import MostRecent from '../Pages/MostRecent';

export default class App extends Component{
    render(){
        return(
            <Layout>
               <Route exact path='/' component={Home}></Route>
               <Route exact path='/ViewBlog/:id' component={ViewBlog}></Route>
               <Route exact path='/AddBlog' component={AddBlog}></Route>
               <Route exact path='/MostRecent' component={MostRecent}></Route>
               <Route exact path='/Page/:pageNumber' component={Home}></Route>
            </Layout>
        )
    }
}