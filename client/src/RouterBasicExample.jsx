import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const RouterBasicExample = () => (
   <Router>
       <div>
           <ul>
               <li>
                   <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>
            <Route exact path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/topics' component={Topics} />
        </div>
    </Router>
);


const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
);

const About = () => (
    <div>
        <h1>About</h1>
    </div>
);

const Topics = ({match}) => (
    <div>
        <h1>Topics</h1>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/Components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props vs state</Link>
            </li>
        </ul>
        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render = {()=> <h2>Please select a topic</h2>} />
    </div>
);

const Topic = ({match}) => (
    <div>
        <h2>{match.params.topicId}</h2>
    </div>
)


export default RouterBasicExample;