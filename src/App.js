import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducer';
import firebase from 'firebase';
import Router from './Router';

class App extends Component{

    componentWillMount(){
        const config= {
            apiKey: "AIzaSyDjO-Wd5u06oOhJ_AuUT_OA_pAZa1VB_Zc",
            authDomain: "manager-6bf64.firebaseapp.com",
            databaseURL: "https://manager-6bf64.firebaseio.com",
            projectId: "manager-6bf64",
            storageBucket: "manager-6bf64.appspot.com",
            messagingSenderId: "729652987529"
        };

       // firebase.database.enableLogging(true);
        firebase.initializeApp(config);

    }

    render(){
        return(
            <Provider store={createStore(reducer,{},applyMiddleware(ReduxThunk))}>
                 <Router />
            </Provider>
        );
    }
}
export default App;