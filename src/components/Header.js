import React from "react";
import { connect } from "react-redux";
import { setUserRoleAction } from "../action";

import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  function signouthandleclick() {
    props.onSignout("");
    navigate("/", { replace: true });
  }
  function onAddnewItem() {
    navigate("/AddProduct", { replace: true });
  }
  console.log(props.Role);
  return (
    <div>
      <ul className="header">
        <li className="list">Home</li>
        <li className="list">about</li>
        <span className="m15">
          {props.Role !== "" ? props.Role : "login"}
        </span>{" "}
        {props.Role !== "" ? (
          <span
            className="signOutBtn"
            onClick={() => {
              signouthandleclick();
            }}
          >
            Signout
          </span>
        ) : undefined}
        {props.Role === "Admin" ? (
          <span className="signOutBtn" onClick={() => onAddnewItem()}>
            Add New Item
          </span>
        ) : undefined}
      </ul>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    Role: state.Role,
  };
}
function mapDispatchtoProps(dispatch) {
  return {
    onSignout: () => dispatch(setUserRoleAction("")),
  };
}
export default connect(mapStateToProps, mapDispatchtoProps)(Header);
