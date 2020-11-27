import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const AnimateMorning = Animatable.createAnimatableComponent(Feather)
const AnimateAfternoon = Animatable.createAnimatableComponent(Fontisto)
const AnimateNight = Animatable.createAnimatableComponent(MaterialCommunityIcons)
const AnimateMain = Animatable.createAnimatableComponent(View)

export default function MainCard(props){

    //adicionando os ícones com o props

    const Icon = () => {
        if(props.icon === 'morning'){
            return(
                <AnimateMorning style={styles.cardIcon} 
                                name="sun" 
                                size={40} 
                                color="gold" 
                                animation="fadeIn" 
                                duration={4500}
                                useNativeDriver />
            )
        }
        if(props.icon === 'afternoon'){
            return(
                <AnimateAfternoon style={styles.cardIcon} 
                                  name="day-cloudy" 
                                  size={40} 
                                  color="black" 
                                  animation="fadeIn"
                                  duration={4500}
                                  useNativeDriver />
            )
        }
        if(props.icon === 'night'){
            return(
                <AnimateNight style={styles.cardIcon} 
                              name="weather-night" 
                              size={40} 
                              color="black" 
                              animation="fadeIn"
                              duration={4500}
                              useNativeDriver />
            )
        }
    }
    
    return(
        <AnimateMain style={styles.card} backgroundColor={props.backgroundColor}>
            <Animatable.Text animation="fadeIn" 
                             duration={8000} 
                             useNativeDriver 
                             style={styles.cardTitle}>{props.title}</Animatable.Text>
            <Icon />
            <Animatable.Text animation="fadeIn" 
                             duration={8000}
                             useNativeDriver
                             style={styles.cardTemperatura}>{props.temperatura}</Animatable.Text>
        </AnimateMain>

    )

    
}


const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 5,
        marginBottom: 10,
        borderRadius: 17,
        width: 110,
        height: 195
    },
    cardTitle: {
        color: '#FFFFFF',
        margin: 15,
        fontSize: 20,
    },
    cardIcon: {
        color: '#FFFFFF',
        margin: 15
    },
    cardTemperatura: {
        color: '#FFFFFF',
        margin: 15,
        fontSize: 17
    }
})



