import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const RouterCustomLinkExample = ()=> (
    <Router>
        <div>
            <CustomLink activeOnlyWhenExact={true} to='/' label='Home'/>
            <CustomLink to='/about' label='About' />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

//?I dont understand. Why here render a Route and then in the main RouterCustomLinkExample render a route again?
const CustomLink=({ label, to, activeOnlyWhenExact }) => (
    <Route
        path = {to}
        exact = {activeOnlyWhenExact}
        children = {({match})=> (
            <div className={match ? "Native" : ""}>
                {match ? "> " : ""}
                <Link to={to}>{label}</Link>
            </div>
        )} />
);

export default RouterCustomLinkExample;