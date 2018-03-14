import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter, NavLink} from 'react-router-dom';


class Landing extends Component {
    state = {
        redirectToLoginPage: false,
        apps: ['calculator', 'hand-injection', 'patients']
    }

    logout = () =>{
        this.setState({redirectToLoginPage: true});
    }
    render(){
        if(this.state.redirectToLoginPage){
            return (
                <Redirect to='/login' />
            )
        }

        return (
            <div>
                <h1> Landing Page </h1>     
                <Icons apps={this.state.apps}/>
                <button onClick={this.logout}>Logout</button>                     
                <p> You are logged in. </p>                          
            </div>
        )
    }
}

const Icons = ({apps}) => (
    <div>
    {apps.map(app => (
        <div key={app}><b>{app}</b></div>
    ))}
    </div>
);


export default Landing;