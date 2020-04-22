import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './SignUpForm.css';
import {addUser} from '../../actions/Signup';
import axios from "axios"
function SignUpForm(props) {
  const [formState, setFormState] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://kidsflyapi.herokuapp.com/auth/register", formState,
      )
      .then(res => {
        console.log(res.data)
        props.history.push('/');
      })
      .catch(err => console.log(err));
    setFormState({
      username: '',
      password: ''
    });
  };

  return (
    <div className='container login-form'>
      <h2 className='dipslay-4 text-center py-5'>Sign up here</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Username</label>
          <input
            type='text'
            className='form-control'
            value={formState.username}
            onChange={handleChange}
            placeholder='Enter username'
            name='username'
            autoComplete='off'
          />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            value={formState.password}
            onChange={handleChange}
            placeholder='Password'
            name='password'
            autoComplete='off'
          />
        </div>

        <button type='submit' className='btn btn-success btn-block'>
          Sign Up
        </button>
        <small>
          Already have account{' '}
          <span className='text-danger'>
            <Link to='/'>Login</Link>
          </span>
        </small>
      </form>
    </div>
  );
}

export default connect(
  null,
  {addUser}
)(SignUpForm);
