import React from 'react';
import { Scene,Router,Actions,Route,TabBar } from 'react-native-router-flux';
import SignUp from './component/LoginForm';
import LoginForm from './component/SignIn';
import AlbumList from './component/AlbumList';

const RouterComponent = () => {
    return(
        <Router sceneStyle={{paddingTop:65}}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please SignUP" initial />
                <Scene key="signup" component={SignUp} title="Please SignIn"  />
                <Scene key="albumlist" component={AlbumList} title="List of Users"  />
            </Scene>
        </Router>
    );

}

export default RouterComponent