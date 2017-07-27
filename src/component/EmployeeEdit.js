import React, { Component } from 'react';
import {Alert,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import {Card,CardSection,Buttons,Confirm} from './common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate ,employeeSave,employeeDelete} from '../actions';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component{
    state={showModal:false};

    componentWillMount(){
        _.each(this.props.employee,(value,prop)=>{
               this.props.employeeUpdate({prop,value});
            }
        );
    }

    onButtonPress(){
        const {name,phone,shift} =this.props;
        this.props.employeeSave({name,phone,shift,uid:this.props.employee.uid});
    }
    onTextPress(){
        const {phone,shift} = this.props;
        console.log(phone)
       Communications.text(phone,`Your upcoming shift is on ${shift}`);
        //SendSMS.send(phone.toString(), "Hey.., this is me!\nGood to see you. Have a nice day.", (msg)=>{ Alert.alert(msg) });
    }

    onAccept(){
        const {uid}=this.props.employee;
        this.props.employeeDelete({uid});
        this.setState({showModal:false})
    }

    onDecline(){
        this.setState({showModal:false})
    }

    render(){
        return(
            <Card>
                <ScrollView>
                <EmployeeForm/>
                <CardSection>
                    <Buttons onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Buttons>
                </CardSection>
                <CardSection>
                    <Buttons onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Buttons>
                </CardSection>
                <CardSection>
                    <Buttons onPress={()=>this.setState({showModal: !this.state.showModal})} >
                        Fire Employee
                    </Buttons>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure want to delete this?
                </Confirm>
                </ScrollView>
            </Card>
        );
    }
}
const mapStateToProps=(state)=>{
    const {name,phone,shift}=state.employeeForm;
    return {name,phone,shift};
}


export default connect(mapStateToProps,{employeeUpdate,employeeSave,employeeDelete})(EmployeeEdit);