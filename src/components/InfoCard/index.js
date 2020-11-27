import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

const AnimateInfo = Animatable.createAnimatableComponent(Text)


export default function InfoCard(props){    
    return(
        <View style={styles.card}>
           <AnimateInfo animation="fadeIn" duration={5000} style={[styles.cardTxt, {fontWeight: 'bold'}]}>{props.title}</AnimateInfo>
           <AnimateInfo animation="fadeIn" duration={7000} style={[styles.cardTxt, {color: '#D3D3D3'}]}>{props.value}</AnimateInfo>
        </View>

    )

    
}


const styles = StyleSheet.create({
   card: {
       alignItems: 'center',
       margin: 10,
       minWidth: 150
   },
   cardTxt: {
       color: '#E8E8E8',
       margin: 5,
       marginLeft: 15,
       fontSize: 18
   }
})



