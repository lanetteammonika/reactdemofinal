import React from 'react';
import { TextInput,Text,View } from 'react-native'

const Input = ({label,value,onChangeText,placeholder,secureTextEntry}) => {
    const { inputstyle, labelstyle, containerstyle }=styles;
    return(
        <View style={containerstyle}>
            <Text style={labelstyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={inputstyle}
                />
        </View>
    );
}

const styles={
    inputstyle:{
        color:"#000",
        paddingLeft:5,
        paddingRight:5,
        fontSize:18,
        lineHeight:23,
        flex:2
    },
    labelstyle:{
        fontSize:18,
        paddingLeft:20,
        flex:1
    },
    containerstyle:{
        flex:1,
        flexDirection:'row',
        height:40,
        alignItems:'center'
    }
}

export {Input}