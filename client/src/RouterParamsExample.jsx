import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const RouterParamsExample = () => (
    <Router>
        <div>
            <h1>Accounts</h1>
            <ul>
                <li>
                    <Link to="/netflix">Netflix</Link>
                </li>
                <li>
                    <Link to="/zillowgroup">Zillow Group</Link>
                </li>
                <li>
                    <Link to="/yahoo">Yahoo</Link>
                </li>
                <li>
                    <Link to="/modus-create">Modu Create</Link>
                </li>
            </ul>
            <Route path="/:id" component={Child} />
            <Route path="/order/:direction(asc|desc)" component={ComponentWithRegex} />
        </div>
    </Router>
);

const Child = ({match}) =>(
    <div>
        <h2>ID: {match.params.id}</h2>
    </div>
);

const ComponentWithRegex = ({ match }) => (
    <div>
        <h2> Only asc/desc are allowed: {match.params.direction} </h2>
    </div>
)

export default RouterParamsExample;