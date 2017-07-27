import firebase from 'firebase';
import { EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_SUCCESS,LOGIN_USER_FAIL,LOGIN_USER,EMAIL_SUCCESS} from './types'
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) =>{
    return {
        type: EMAIL_CHANGED,
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

export const loginUser = ({email,password}) => {
    return(dispatch) => {
        dispatch({type:LOGIN_USER});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch,user))
            .catch((error)=>{
                    console.log(error);
                    firebase.auth().createUserWithEmailAndPassword(email,password)
                        .then(user => loginUserSuccess(dispatch,user))
                        .catch(()=>loginUserFail(dispatch));
                }

            );
        //firebase.auth().sendPasswordResetEmail(email)
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