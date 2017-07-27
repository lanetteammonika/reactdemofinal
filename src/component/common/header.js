import React,{ Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

const Header = (props) => (
        <View style={styles.viewstyle}>
            <Text style={styles.textstyle}>{props.headertext}</Text>
        </View>
);

const styles=StyleSheet.create({
    viewstyle: {
        backgroundColor: "#F8F8F8",
        justifyContent:'center',
        alignItems:'center',
        paddingTop:15,
        height:60
    },
    textstyle:{
        fontSize:20,
    }
});
export {Header}
