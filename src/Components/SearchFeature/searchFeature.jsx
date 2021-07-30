import React, { Component } from 'react';

let errors = this.state.errors;

class NameForm extends Component{
    state = {
        firstName: '',
        lastName: '',
        errors: {
            firstName: '',
            lastName: ''
        }
    };
    handleChange = (event) => {
        let errors = this.state.errors;
        switch (event.target.name) {
            case 'firstName':
                errors.firstName = event.target.value.length < 2 ? "First name must be at least two characters" : null;
                break;
            case 'lastName':
                errors.lastName = event.target.value.length < 2 ? "Last name must be at least two characters" : null;
            default:
                break;
        }
        this.setState({
            [event.target.name]: event.target.value,
            errors: errors
        })
    };
    handleSubmit=(event) => {
        event.preventDefault();
        alert(`First Name: ${this.state.firstName} Last Name: ${this.state.lastName}`)
    };
    render(){
        return(
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
                </div>
                {this.state.errors.firstName ? <p style={{color:'red'}}>{this.state.errors.firstName}</p> : ''}
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
                </div>
                {this.state.errors.lastName ? <p style={{color:'red'}}>{this.state.errors.lastName}</p> : ''}
                <button type='submit'>Add Name</button>
            </form>
        )
    }
}


export default NameForm;