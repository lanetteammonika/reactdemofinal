import React, {Component} from 'react';
import {Text,TouchableOpacity,View} from 'react-native'
import {Card,CardSection,Input,Buttons,Spinner} from './common';
import {connect} from 'react-redux';
import { signUser,emailChanged,passwordChanged,loginUser,forgotPass } from  '../action';
import { Actions } from 'react-native-router-flux';

class SignIn extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email,password} =this.props;
        this.props.signUser({email,password});
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size="large"/>
        }
        return (
            <Buttons onPress={this.onButtonPress.bind(this)}>
                Log In
            </Buttons>
        );
    }

    newAccount(){
        Actions.signup();
    }

    render(){
        return(
            <Card>

                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>

                <CardSection>
                    <TouchableOpacity activeOpacity={.5} onPress={this.newAccount.bind(this)}>
                        <View>
                            <Text style={styles.forgottext}>Create New Account</Text>
                        </View>

                    </TouchableOpacity>
                </CardSection>
            </Card>
        );
    }
}

const styles={
    errorTextStyle:{
        fontSize:18,
        alignSelf:'center',
        color:'red'
    },
    forgottext:{
        color:"#000",
        backgroundColor:"transparent",
        textDecorationLine: "underline",
        justifyContent:'center',
        alignItems:'center',
        fontSize:18,
        marginTop:10
    },
}

const mapStateToProps = state => {
    return {
        email:state.auth.email,
        password:state.auth.password,
        error:state.auth.error,
        loading:state.auth.loading
    };
}

export default connect(mapStateToProps,{signUser,emailChanged,passwordChanged,loginUser,forgotPass })(SignIn);