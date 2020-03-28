import React from 'react';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';

import { Container, Title, ActionButton, ActionText, ActionsContent } from './styles';

import handsanimation from '../../assets/hands.json';

export default function HandsAnimation() {
  const navigation = useNavigation();

  function sendToFaceAnimation() {
    navigation.navigate('HandsAnimationTwo')
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

      <Title>Lave suas mãos, evite contato desnecessário.</Title>

      <ActionsContent>
        <ActionButton onPress={sendToFaceAnimation}>
          <ActionText>Prosseguir</ActionText>
        </ActionButton>
      </ActionsContent>
    </Container>
  )
}