import React, { Fragment, useState } from 'react';
import { Link, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
// import { setAlert } from '../../actions/alert';


const Login = ({login,isAuthenticated}) => {
  const [formData, setFormData] = useState({

    username: '',
    password:''

  });
  const { username,password } = formData;

  const onChangeForm = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
   login({username,password})
  }






  if (isAuthenticated === true) {  
    return <Navigate to='/dashboard' />;
      
  };



  return (
    <Fragment>
      <h1 className='large text-primaryy'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Sign Into Your Account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Username'
            name='username'
            value={username}
            onChange={e => onChangeForm(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChangeForm(e)}
            minLength='6'
          />
        </div>
  
    
        <input type='submit' className='btn btn-primary' value='Login' />
     
      </form>
      <p className = 'my-1'>Forgot Password? Click
      <Link to = '/check-email-pw'> Here</Link>
      </p>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up!</Link>
      </p>
    </Fragment>
    // link to forget password page twigger api call to send email with random string 
  );
};
// Login.propTypes = {
 
//   isAuthenticated: PropTypes.bool
// };
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  
});
export default connect(mapStateToProps, {login})(Login);