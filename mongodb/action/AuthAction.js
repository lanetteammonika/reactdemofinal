import firebase from 'firebase';
import { NAME_CHANGED,EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_SUCCESS,LOGIN_USER_FAIL,LOGIN_USER,EMAIL_SUCCESS} from './types'
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export const emailChanged = (text) =>{
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
}

export const nameChanged = (text) =>{
    return {
        type: NAME_CHANGED,
        payload: text
    };
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
}

export const forgotPass =({email}) => {
    return (dispatch) => {
    firebase.auth().sendPasswordResetEmail(email)
        .then(()=>emailSuccess(dispatch))
        .catch((error) => {
            console.log(error)
        })
}
}
const emailSuccess =(dispatch) =>{
    // dispatch({
    //     type:EMAIL_SUCCESS
    // });
    Actions.auth();
}

export const logoutUser = () =>{
    return()=>{
        firebase.auth().signOut()
        Actions.auth();
    }
}

export const loginUser = ({name1,email,password}) => {
    return(dispatch) => {
        let myApiUrl = "http://localhost:4000/insert";
        dispatch({type:LOGIN_USER});
        debugger
        axios.post(myApiUrl, {
            name: name1,
            email: email,
            password: password
        })
            .then(function (response) {
                Actions.albumlist();
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    };
}

export const signUser = ({email,password}) => {
    return(dispatch) => {
        let myApiUrl = "http://localhost:4000/signin";
        axios.post(myApiUrl, {
            email: email,
            password: password
        })
            .then(function (response) {
                Actions.albumlist();
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

const loginUserFail =(dispatch) =>{
    dispatch({
        type:LOGIN_USER_FAIL
    });
}

const loginUserSuccess = (dispatch,user) =>{
    dispatch({
        type:LOGIN_USER_SUCCESS,
        payload:user
    });
    Actions.main();
}