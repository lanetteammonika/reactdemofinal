import React,{ Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

const Footer = () => (
    <View style={styles.viewstyle}>
        <Text style={styles.textstyle}>Log out</Text>
    </View>
);

const styles=StyleSheet.create({
    viewstyle: {
        backgroundColor: "#F8F8F8",
        justifyContent:'center',
        alignItems:'center',
        height:60
    },
    textstyle:{
        fontSize:20,
    }
});
export {Footer}
