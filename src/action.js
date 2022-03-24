import {USERDATA , DATA, EDITDATA, DELETEDATA, ROLEOFUSER, ADDNEWDATA} from './actionTypes';

export function getData () {
    return{
        type: DATA
    }
}
export function getUserData () {
    return{
        type: USERDATA
    }
}
export function editDataAction () {
    return{
        type: EDITDATA
    }
}
export function DeleteDataAction (id) {
    return{
        type: DELETEDATA,
        id
    }
}
export function setUserRoleAction (Role) {
    return{
        type: ROLEOFUSER,
        Role
    }
}
export function addNewData (data) {
    return{
        type: ADDNEWDATA,
        data
    }
}