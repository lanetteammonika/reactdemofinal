import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducer';
import Router from './Router';

class App extends Component{

    render(){
        return(
            <Provider store={createStore(reducer,{},applyMiddleware(ReduxThunk))}>
                 <Router />
            </Provider>
        );
    }
}
export default App;