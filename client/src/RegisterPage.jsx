import React, {Component} from 'react';
import RegisterForm from './RegisterForm';

class RegisterPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {
                username: '',
                password1: '',
                password2: ''
            },
            errorMessage: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange= this.onChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        if(this.state.user.password1 === this.state.user.password2){
            this.setState({errorMessage: null});

            console.log('passwords are the same');
            //TODO: start fetching.  fetch by username   
        } else {
            this.setState({errorMessage: 'Passwords shall be the same.'});
        }     
    }

    onChange(e){
        let field = e.target.name;
        let user = this.state.user;
        user[field] = e.target.value;
        this.setState({user: user});
    }

    render(){
        return(
            <RegisterForm onSubmit={this.onSubmit} onChange={this.onChange} errorMessage={this.state.errorMessage} />
        )
    }
}

export default RegisterPage;