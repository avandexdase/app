import React from "react";
import { connect } from "react-redux";
import { DeleteDataAction, editDataAction } from "../action";

function Product(props) {
  return (
    <div className="productCard">
      {props.data.map((each) => (
        <div className="productBox" key={each.id}>
          <h4>{each.name}</h4>
          <span>Rs.{' '}{each.price}{' '}</span>
          <span>{each.category}</span>
          {sessionStorage.Role === "Admin" ? (
            <div>
              <button className="btn">edit</button>
              <button className="btn" onClick={()=>props.deleteData(each.id)}>delete</button>
            </div>
          ) : undefined}
        </div>
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}
function mapDispatchtoProps(dispatch) {
  return {
    deleteData: (id) => dispatch(DeleteDataAction(id)),
    editData: () => dispatch(editDataAction()),
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(Product);
