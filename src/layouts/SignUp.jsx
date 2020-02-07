import React, { Component } from 'react'
import { loginUser } from '../actions/authActions'
import { connect } from 'react-redux';

import { Link, withRouter } from "react-router-dom";

class SignUpComponent extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    //console.log(this.props.history)
    e.preventDefault();
    this.props.loginUser(this.state, this.props.history)
      /*.then(
        (res) => {
          //console.log(res)
          window.location.href="/admin/dashboard"
        },
        (err) => console.log(err)
      );*/
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });    
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign Up For An Account</h1>

        <label>Username</label>
        <input
          name='email'
          placeholder='Email'
          value={this.props.email}
          onChange={this.onChange}
        /><br />

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.props.password}
          onChange={this.onChange}
        /><br />

        <input type='submit' />
      </form>
    )
  }
}


const mapStateToProps = state => ({
  email: state.email,
  password: state.password
});

export default connect( mapStateToProps , { loginUser })(withRouter(SignUpComponent));

