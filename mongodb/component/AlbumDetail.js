import React from 'react';
import {View,Text,Image,Linking} from 'react-native';
import {Card,CardSection,Buttons} from './common';


const AlbumDetail = (props) =>{
return(
  <Card>
      <CardSection>
          {/*<View style={styles.ImageContainerStyle}>*/}
              {/*<Image style={styles.imageStyle}*/}
                     {/*source={{uri:"https://png.icons8.com/radio-button/win10/1600"}}*/}
              {/*/>*/}
          {/*</View>*/}
          <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle}>{props.user.name}</Text>
              <Text style={styles.headerTextStyle}>{props.user.email}</Text>
          </View>
      </CardSection>

      {/*<CardSection>*/}
          {/*<View style={{flex:1}}>*/}
              {/*<Image style={styles.ImagecontainStyle}*/}
                     {/*source={{uri:"https://www.canvasflip.com/images/logos/sketchapp-diamond.png"}}*/}

              {/*/>*/}
          {/*</View>*/}
      {/*</CardSection>*/}

      <CardSection>
          <Buttons onPress={() => Linking.openURL("https://www.google.co.in/?gfe_rd=cr&ei=NF9sWcbPNIjT8ge_zpfwAg")} >
              Google Search Engine
          </Buttons>
      </CardSection>
  </Card>
);
}

const styles={
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerTextStyle:{
      fontSize:18
    },
    imageStyle:{
        height:50,
        width:50
    },
    ImagecontainStyle:{
        height:300,
        width:null
    },
    ImageContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    }
}

export default AlbumDetail