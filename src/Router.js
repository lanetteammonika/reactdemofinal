import React,{Component} from 'react';
import { Scene,Router,Actions,Route,TabBar } from 'react-native-router-flux';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';
import EmployeeCreate from './component/EmployeeCreate';
import EmployeeEdit from './component/EmployeeEdit';
import ForgotPass from './component/ForgotPass';
class RouterComponent extends Component {

    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="auth">
                        <Scene key="login" component={LoginForm} title="Please Login" initial/>
                        <Scene key="forgotPassword2" component={ForgotPass} title="Forgot Password"/>
                    </Scene>
                    <Scene key="main">
                        <Scene key="employeeList"
                               onRight={() => Actions.employeeCreate()}
                               rightTitle="Add"
                               component={EmployeeList}
                               renderBackButton={null}
                               title="Employees"
                               initial/>
                        <Scene key="employeeCreate" component={EmployeeCreate} title="Employee Create"/>
                        <Scene key="employeeEdit" component={EmployeeEdit} title="Employee Edit"/>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

export default RouterComponent