import React, { useState } from "react";
// import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import {setUserRoleAction} from '../action';
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [userPsw, setUserPsw] = useState("");
  const navigate = useNavigate();
  function checkAuthenticity() {
    if (userName === "") alert("please enter the user name");
    else if (userPsw === "") alert("please enter the password");
    else {
      const user = props.userData.filter(
        (each) => each.UserName === userName && each.UserPsw === userPsw
      );
      if (user.length === 0) {
        alert("please enter the correct credentials");
      } else {
        console.log(user);
        props.onSetUserRole(user[0].Role);
        sessionStorage.setItem('Role',user[0].Role);
        setUserName('');
        setUserPsw('');
      navigate('/Product',{replace:true});
        // <Redirect to="/Product" />
      }
    }
  }
  return (
    <div>
      <h3>this is login page</h3>
      <div>
        <span>UserId</span>
        <input
          type="Text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <span>Password</span>
        <input
          type="password"
          value={userPsw}
          onChange={(e) => setUserPsw(e.target.value)}
        />
        <button onClick={() => checkAuthenticity()}>SignIn</button>
      </div>
    </div>
  );
}

function mapStateToProps (state){
  return{
    userData: state.userData,
  }
}
function mapDispatchtoProps(dispatch) {
  return {
    onSetUserRole: (Role) => dispatch(setUserRoleAction(Role)),
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(Login)