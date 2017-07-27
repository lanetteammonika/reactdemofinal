import React, {Component} from 'react';
import {Card,CardSection,Buttons,Input} from './common';
import { connect } from 'react-redux';
import { employeeUpdate,employeeCreate,employeeDataClear } from '../actions';
import {Picker,Text} from 'react-native';
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component{
    componentWillMount(){
        this.props.employeeDataClear();
    }
    onButtonPress(){
        const {name,phone,shift}=this.props;
        this.props.employeeCreate({name,phone,shift:shift || 'Monday'});
    }


    render(){
        console.log(this.props.employee);
        return(
           <Card>
               <EmployeeForm {...this.props}/>
               <CardSection>
                   <Buttons onPress={this.onButtonPress.bind(this)}>
                       Create
                   </Buttons>
               </CardSection>

           </Card>
        );
    }
}

const styles={
    pickerStyleText:{
        fontSize:18,
        paddingLeft:20
    }
}

const mapStateToProps=(state)=>{
    const {name,phone,shift}= state.employeeForm;
    return {name,phone,shift};
}

export default connect(mapStateToProps,{employeeUpdate,employeeCreate,employeeDataClear})(EmployeeCreate)