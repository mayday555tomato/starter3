
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

const RouterRedirectsExample = () => (
    <Router>
        <div>            
            <Header />
            <ul>
                <li>
                    <Link to='/public'>Public Page</Link>
                </li>
                <li>
                    <Link to='/protected'>Protected Page</Link>
                </li>
            </ul>
            <Route path='/public' component={Public} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/protected' component={Protected} />
        </div>
    </Router>
);

const Public = () => <h1>Public</h1>; //takes 0 argument, omitted return and quotes.

const Protected = () => <h1>Protected</h1>;

const Header = withRouter( //why do I need to use withRoute here??? so it will bring me history?
    ({history}) => //why history is like this???  a function takes in {history} as a parameter.
        fakeAuth.isAuthenticated ? (
            <p>Welcome!
                <button onClick={()=> {
                    fakeAuth.signout(()=> history.push('/')); //function() {xxx}
                    }} > Sign Out </button>
            </p>
            ) : (
            <p> You are not logged in </p>
            )
);

const fakeAuth = {
    isAuthenticated: false,
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);        
    },
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    }
};

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route 
        {...rest} 
        render={props => //Route render function
        fakeAuth.isAuthenticated ? (
            <Component {...props} />
            ) : ( 
                <Redirect to={{ 
                    pathname:'/login', 
                    state: {from: props.location}
                     }}
                      />
                      )
        } />
);

class Login extends Component{
    state = {
        redirectToReferrer : false
    };

    login = () => {
        fakeAuth.authenticate(()=> {
            this.setState({redirectToReferrer: true});
        });
    };

    render () {
        const {from} = this.props.location.state || {from: {pathname: '/'}}; //from: {pathname: '/'}
        const {redirectToReferrer} = this.state;

        if(redirectToReferrer){
            return <Redirect to={from} />;
        }

        return (
            <div>
                <p>You must login to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}

export default RouterRedirectsExample;

