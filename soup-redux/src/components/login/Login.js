import React, { Component } from "react";
import { connect } from 'react-redux';
// import HomeProtected from '../homepage/HomeProtected'
import { login } from '../../actions';

class Login extends Component {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    }
  
    login = e => {
      e.preventDefault();
      this.props.login(this.state.credentials)
        .then(() => {
          // only fires if login call is successful
          this.props.history.push('/HomeProtected');
        })
    }
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value,
        }
      });
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>Log in</button>
          </form>
        </div>
      )
    }
  }

  const mapStateToProps = ({ loggingIn, error }) => ({
    error,
    loggingIn
  });
  
  export default connect(mapStateToProps, { login })(Login);