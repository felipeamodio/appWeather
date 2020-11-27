import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import MainCard from './src/components/MainCard';
import InfoCard from './src/components/InfoCard';
import * as Location from 'expo-location';
import getCurrentWeather from './api/ConsultApi';
import * as Animatable from 'react-native-animatable';

const AnimateCard = Animatable.createAnimatableComponent(View)
const AnimateButton = Animatable.createAnimatableComponent(View)
const AnimateRefresh = Animatable.createAnimatableComponent(TouchableOpacity)
const AnimateText = Animatable.createAnimatableComponent(Text)
const AnimateMain = Animatable.createAnimatableComponent(View)


export default function App() {

const [darkTheme, setDarkTheme] = useState(true)
const [currentTemperatura, setCurrentTemperatura] = useState('29')
const [locationCoords, setLocationCoords] = useState(null) 
const [location, setLocation] = useState('BR, São Paulo')
const [currentHour, setCurrentHour] = useState('14:26')



//variaveis das informações

  const [wind, setWind] = useState('10')
  const [humidity, setHumidity] = useState('48')
  const [tempMin, setTempMin] = useState('18')
  const [tempMax, setTempMax] = useState('32')


  async function Hour(){
    let date = new Date()
    setCurrentHour(date.getHours() + ':' + date.getMinutes())
  }

  useEffect(() => {
    Hour()
  }, [])

/* 
  async function setCurrentWeather(){
    await getLocation()

   

    const data = await getCurrentWeather(locationCoords)

    setCurrentTemperatura(convertKelvinToC(data[0]))
    setTempMin(convertKelvinToC(data[1]))
    setTempMax(convertKelvinToC(data[2]))
    setLocation(data[3])
    setWind(data[4])
    setHumidity(data[5]) 
  }

  //os valores vão dar em kelvin e essa função converte de kelvin para celsius

  function convertKelvinToC(kelvin){
    return parseInt(kelvin - 273)
  }


  async function getLocation(){
    let {status} = await Location.requestPermissionsAsync()
    if(status !== 'granted'){
      setErrorMsg('Sem Permição')
    }else{
      let location = await Location.getCurrentPositionAsync({})
      await setLocationCoords(location.coords)
    }
  }

  useEffect(() => {
    setCurrentWeather()
  }, [])

  */

  return (
    <View style={[styles.container, {backgroundColor: darkTheme ? '#232634' : '#F5F5F5'}]}>

     <AnimateRefresh animation="fadeIn" duration={3500} style={styles.refresh} onPress={() => setCurrentWeather()}> 
      <EvilIcons name="refresh" size={40} color={darkTheme ? '#FFFFFF' : '#232634'} />
      </AnimateRefresh>

      <AnimateButton animation="fadeIn" duration={3500} style={styles.themeButton}>
        <View style={[styles.squareButton, {backgroundColor: darkTheme ? '#F2F2F2' : '#8F8F8F',}]}>
          <TouchableOpacity style={[styles.circleButton, {backgroundColor: darkTheme ? '#232634' : '#F2F2F2', alignSelf: darkTheme ? 'flex-end' : 'flex-start'}]} onPress={() => darkTheme ? setDarkTheme(false) : setDarkTheme(true)}></TouchableOpacity>
        </View>
      </AnimateButton>

      <Feather style={styles.sun} name="sun" size={40} color="black" />
      <View style={styles.temperatura}>
        <AnimateText animation="fadeIn" duration={4500} style={[styles.tempTxt, {color: darkTheme ? '#E0E0E0' : '#000000'}]}>{currentTemperatura}</AnimateText>
        <AnimateText animation="fadeIn" duration={4500} style={[styles.tempTxt, {fontSize: 25, color: darkTheme ? '#E0E0E0' : '#000000'}]}>° C</AnimateText>
      </View>

  <AnimateText animation="fadeIn" duration={3000} style={{fontSize: 20, color: darkTheme ? '#E0E0E0' : '#000000'}}>{location}, {currentHour}</AnimateText>

  <AnimateMain animation="bounceIn" duration={3500}>
      <View style={[styles.cardView, {color: darkTheme ? '#000000' : '#FFFFFF'}]}>
        <MainCard title={'Manhã'}
                  backgroundColor={darkTheme ? '#CDAD00' : '#CC6E30'}
                  icon={'morning'} 
                  temperatura={'21°'}
                   />

        <MainCard title={'Tarde'}
                  backgroundColor={darkTheme ? '#D29600' : '#FCC63F'}
                  icon={'afternoon'} 
                  temperatura={'29°'}/>

        <MainCard title={'Noite'}
                  backgroundColor={darkTheme ? '#191970' : '#38B7B8'}
                  icon={'night'} 
                  temperatura={'18°'}/>

      </View>
    </AnimateMain>


      <View style={[styles.infoCard, {backgroundColor: darkTheme ? '#393E54' : '#8F8F8F'}]}>
        <Text style={[styles.infoTxt, {color: darkTheme ? '#E0E0E0' : '#FFFFFF'}]}>Informações adicionais</Text>
          <AnimateCard animation="fadeIn" duration={4000} style={styles.cardInfo}>
            <InfoCard title={'Wind'} value={wind + ' km /h'}/>
            <InfoCard title={'Air Humidity'} value={humidity + '%'}/>
            <InfoCard title={'Temp. Min'} value={tempMin + '°C'}/>
            <InfoCard title={'Temp. Max'} value={tempMax + '°C'}/>
          </AnimateCard>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  sun: {
    color: '#FFD700',
    shadowColor: '#FFFF00',
    shadowOpacity: 5
  },
  temperatura: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  tempTxt: {
    fontSize: 50
  },
  refresh: {
    position: 'absolute',
    margin: 30,
    alignSelf: 'flex-start',
  },
  cardView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoCard: {
    alignItems: 'center',
    borderRadius: 20,
    width: 350,
    height: 230
  },
  infoTxt: {
    margin: 15,
    fontSize: 20,
    fontWeight: 'bold'
  },
  cardInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  themeButton: {
    margin: 10,
    marginLeft: 300,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25
  },
  squareButton: {
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 20,
    width: 50,
    height: 25
  },
  circleButton: {
    margin: 5,
    width: 20,
    height: 20,
    borderRadius: 50
  }
});
