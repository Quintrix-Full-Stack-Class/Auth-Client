import React, { useEffect } from 'react'
import CryptoComponent from "../../crypto/crypto";
import { loadUser } from '../../actions/auth';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
const Dashboard = ({auth:{user}}) =>{
// fix 
  useEffect((user)=>{
    // (async function anyNameFunction(){
      if (user === null)
      loadUser()
    // })();

  },[user]);

  useEffect(() =>{
console.log(user);
  },[user])

  return user === null ?(
    <div>
    <Spinner />
    </div>

  ):(
    <CryptoComponent user ={user}/>
  )
}
const mapStateToProps = (state) => ({
  auth: state.auth
}) 


export default connect(mapStateToProps,{loadUser})(Dashboard);