import React, { useState } from 'react'
import {sendCode} from '../../actions/auth'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const Verfication = ({sendCode}) => {
    const [verificationCode, setVerificationCode]= useState();



    const onSubmitVerificationCode = async e =>{
        sendCode(verificationCode)
    }

  return (
    <>
    <div>Verfication</div>
    <p>Please enter code sent to your email to verifiy user identity</p>
    <form className='form' onSubmit={e => onSubmitVerificationCode(e)} >
        <div className='form-group'>
          <input
            type='text'
            placeholder='verificationCode'
            name='verificationCode'
            value={verificationCode}
            onChange={e => setVerificationCode(e.target.value)}
          />
          </div>
          <input type='submit' className='btn btn-primary' value='Submit' />
          </form>
    </>
  )
}
Verfication.propTypes = {
    sendCode: PropTypes.func.isRequired,
    // isAuthenticated: PropTypes.bool
  };
  
//   const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
//   });

export default connect(null, { sendCode })(Verfication);