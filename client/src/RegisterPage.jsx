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
        console.log(this.state.user);        
        //TODO: fetch by username        
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