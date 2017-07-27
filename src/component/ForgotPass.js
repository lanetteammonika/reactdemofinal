import React, { Component } from 'react';
import {Card,CardSection,Input,Buttons,ConfirmMail} from './common';
import { forgotPass,emailChanged } from  '../actions';
import {connect} from 'react-redux';
import {View,Text} from 'react-native';
class ForgotPass extends Component{
    state={showModal:false};

    onEmailChange2(text){
        this.props.emailChanged(text);
    }

    onButtonPress2() {
        const {email} =this.props;
        this.props.forgotPass({email});
        this.setState({showModal: !this.state.showModal})
    }
    onDecline(){
        this.setState({showModal:false})
        //this.props.forgotPass({email});
    }

    render(){
        return(
            <View style={{flex: 1}}>
                 <Card>
                     <CardSection>
                         <Input
                             label="Email"
                             placeholder="email@gmail.com"
                             onChangeText={this.onEmailChange2.bind(this)}
                             value={this.props.email}
                         />
                     </CardSection>
                     <CardSection>
                     <Buttons onPress={this.onButtonPress2.bind(this)}>
                         Send
                     </Buttons>
                     </CardSection>
                     <ConfirmMail
                         visible={this.state.showModal}
                         onDecline={this.onDecline.bind(this)}
                     >
                         Please Check Your Email
                     </ConfirmMail>
                 </Card>
            </View>
        );

    }
}
const mapStateToProps = state => {
    return {
        email:state.auth.email,

    };
}
export default connect(mapStateToProps,{forgotPass,emailChanged})(ForgotPass);