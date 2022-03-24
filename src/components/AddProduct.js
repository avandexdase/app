import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewData } from "../action";
import { useNavigate } from "react-router-dom";

function AddProduct(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  function addProduct() {
    if (name !== "" && price !== "" && category !== "" && quantity !== "") {
      const newData = [
        ...props.data,
        {
          id: props.data.length,
          name,
          price,
          category,
          quantity,
        },
      ];
      props.onAddNewData(newData);
      navigate('/Product',{replace:true});
    //    window.location = "/Product";
    } else alert("fill all details");
  }
  return (
    <div className="newProduct">
      <div className="singleItem">
        <span>Name</span>
        <input
          value={name}
          type="text"
          onChange={(evt) => setName(evt.target.value)}
        />
      </div>
      <div className="singleItem">
        <span>Price</span>
        <input
          value={price}
          tpye="text"
          onChange={(evt) => setPrice(evt.target.value)}
        />
      </div>
      <div className="singleItem">
        <span>Category</span>
        <input
          value={category}
          type="text"
          onChange={(evt) => setCategory(evt.target.value)}
        />
      </div>
      <div className="singleItem">
        <span>Quantity</span>
        <input
          value={quantity}
          tpye="text"
          onChange={(evt) => setQuantity(evt.target.value)}
        />
      </div>
      <button onClick={() => addProduct()}>Add Product</button>
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
    onAddNewData: (data) => dispatch(addNewData(data)),
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(AddProduct);
