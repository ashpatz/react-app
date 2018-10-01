import React from 'react'
import { connect } from 'react-redux'
import { LoginUser } from './users'

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleInputChange  (event)  {
        // event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit  (event)  {
        event.preventDefault();
        this.props.login(this.state);
    }
    render() {
        return (
            <form id='loginForm' className='login' onSubmit={this.handleSubmit.bind(this)}>
                <label>Username</label>
                <input id='email' onChange={this.handleInputChange.bind(this)} name='email' type='text' />
                <label>Password</label>
                <input id='password' onChange={this.handleInputChange.bind(this)} name='password' type='password' />
                <button>Submit</button>
            </form>
        )
    }
}
const  mapDispatchToProps = (dispatch) => {
    return {
        login: (userparams, history) => {
            dispatch(LoginUser(userparams, history))
        }
    }
}
export default connect(mapDispatchToProps) (Login)