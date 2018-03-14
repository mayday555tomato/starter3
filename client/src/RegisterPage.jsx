import React, {Component} from 'react';
import RegisterForm from './RegisterForm';

class RegisterPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            },
            password1: '',
            password2: '',
            errorMessage: '',
            redirectToHomePage: false,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange= this.onChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        //TODO: user with two passwords? how to position users with two passwords.
        if(this.state.password1 === this.state.password2){
            this.setState({errorMessage: null});
            this.setState({user :{ password: this.state.password1}});
            fetch('/users', {
                method: 'PUT',
                body: JSON.stringify(this.state.user),
                headers: {'Content-Type': 'application/json'},
            }).then(res => {
                if(res.status === 200){
                    console.log('register success.');
                    this.setState({redirectToHomePage: true});
                }else {
                    res.json().then((data) => {
                        this.setState({errorMessage: data.message});
                    });
                }
            }).catch(err => this.setState({errorMessage: err}));
            //TODO: start fetching.  fetch by username   
        } else {
            this.setState({errorMessage: 'Passwords shall be the same.'});
        }     
    }

    onChange(e){
        let field = e.target.name;
        if (field === 'username'){
            this.setState({user:{username: e.target.value}});
        }else{
            this.setState({[field]: e.target.value});
        }
        // let user = this.state.user;
        // user[field] = e.target.value;
        // this.setState({user: user});
    }

    render(){
        return(
            <RegisterForm onSubmit={this.onSubmit} onChange={this.onChange} errorMessage={this.state.errorMessage} redirectToHomePage={this.state.redirectToHomePage} />
        )
    }
}

export default RegisterPage;