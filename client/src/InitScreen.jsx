import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter, NavLink} from 'react-router-dom';

import RegisterPage from './RegisterPage';
import Landing from './Landing';
import LoginPage from './LoginPage';
import PublicPage from './PublicPage';
import Auth from './Auth';

const InitScreen = () => (
    <div>
        <p>~~~This is InitScreen Page~~~</p>
        <Router>
            <div>
                <Route exact path='/' component={LoginPage} />
                <Route path='/login' component={LoginPage} />      
                <Route path='/register' component={RegisterPage} />    
                <Route path='/landing' component={Landing} />                    
                <Route path='/public' component={PublicPage} />
            </div>                    
        </Router>
    </div>
)
export default InitScreen;