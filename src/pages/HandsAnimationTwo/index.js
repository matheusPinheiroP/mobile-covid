import React from 'react';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';

import { Container, Title, ActionButton, ActionText, ActionsContent } from './styles';

import handsanimation from '../../assets/people.json';

export default function HandsAnimationTwo() {
  const navigation = useNavigation();

  function sendToFaceAnimation() {
    navigation.navigate('Cases')
  }

  return (
    <Container style={{paddingTop: Constants.statusBarHeight + 20}}>
      <Lottie 
        resizeMode="contain" 
        autoSize 
        source={handsanimation} 
        autoPlay 
        loop 
        style={{width: 300, height: 300}} 
      /> 

      <Title>Não use mascáras se você não tem Covid-19.</Title>

      <ActionsContent>
        <ActionButton onPress={sendToFaceAnimation}>
          <ActionText>Prosseguir para o App</ActionText>
        </ActionButton>
      </ActionsContent>
    </Container>
  )
}