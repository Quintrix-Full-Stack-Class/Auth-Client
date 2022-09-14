import React, { Fragment, useState} from 'react';
 import { connect } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';




const Register = ({register, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    username:'',
    firstName: '',
    lastName:'',
    email: '',
    password:''
    // phoneNumber:''
  });

  const navigate = useNavigate();

  

  const {  email, firstName, lastName, username,password} = formData;


  const onChangeForm = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // const onChangeDropDown = e =>
    // setFormData({ ...formData, [e.target.name]: e.target.value });






  const onSubmit = async e => {
    e.preventDefault();
    try{
    await register({ email, firstName,lastName, username,password });
    navigate('/login')
    }catch(err){
      console.log(err)
    }


    }


//  console.log(formData)
    
  
  //  }



  return (
    <Fragment>
      <h1 className='large text-primaryy'>Sign Up</h1>
      <p className='lead'>

        <i className='fas fa-user' /> Create Your Account
      </p>
    
      <form className='form' onSubmit={e => onSubmit(e)} >
      <div className='form-group'>
          <input
            type='text'
            placeholder='Username'
            name='username'
            value={username}
            onChange={e => onChangeForm(e)}
          />
          </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='First name'
            name='firstName'
            value={firstName}
            onChange={e => onChangeForm(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Last name'
            name='lastName'
            value={lastName}
            onChange={e => onChangeForm(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChangeForm(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChangeForm(e)}
          />
        </div>
        {/* <div className='form-group'>
          <input
            type='tel'
            placeholder='Phone number'
            name='phoneNumber'
            value={phoneNumber}
            onChange={e => onChangeForm(e)}
          />
        </div> */}
   
     
      
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
    
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
 
           


    </Fragment>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);