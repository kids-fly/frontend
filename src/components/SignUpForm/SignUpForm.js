import React, {useState} from 'react';
import './SignUpForm.css';
import {Link} from 'react-router-dom';

function SignUpForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='container login-form'>
      <h2 className='dipslay-4 text-center py-5'>Sign up here</h2>
      <form>
        <div class='form-group'>
          <label>Name</label>
          <input
            type='text'
            className='form-control'
            value={formState.name}
            onChange={handleChange}
            placeholder='Enter name'
            name='name'
            autoComplete='off'
          />
        </div>
        <div className='form-group'>
          <label>Email address</label>
          <input
            type='email'
            className='form-control'
            value={formState.email}
            onChange={handleChange}
            placeholder='Enter email'
            name='email'
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
            <Link to='/login'>Login</Link>
          </span>
        </small>
      </form>
    </div>
  );
}

export default SignUpForm;
