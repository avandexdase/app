import data from "./data.json";
import userData from "./UserData.json";
import {USERDATA , DATA, EDITDATA, DELETEDATA, ROLEOFUSER, ADDNEWDATA} from './actionTypes';

const initialState = {
  data: data.productList,
  userData: userData,
  Role: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case DATA:
      return state.data;
    case USERDATA:
      return state.userData;
      case EDITDATA:
      return state.data;
      case DELETEDATA:
        const updatedData = state.data.filter(each=>each.id !== action.id);
      return {...state,data:updatedData}
      case ROLEOFUSER:
      return {...state,Role:action.Role};
      case ADDNEWDATA: 
      return {...state,data:action.data};
    default:
      return state;
  }
}
