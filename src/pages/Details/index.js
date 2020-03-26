import React from 'react';
import Constants from 'expo-constants';
import * as MailComponser from 'expo-mail-composer';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from "@expo/vector-icons"
import { Linking } from 'react-native'

import logo from '../../assets/logo.png';

import 
{ 
  Container, 
  Header, 
  Logo, 
  HeaderTitle, 
  CasesContainer, 
  TextProperty, 
  TextValue,
  ContactBox,
  Title,
  Subtitle,
  TextDescription,
  ActionsContent,
  ActionButton,
  ActionText
} from './styles';

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${incident.name}, vi o seu caso e gostaria de poder ajudar no ${incident.title} com o valor de ${Intl.NumberFormat('pt-BR', 
  { style:'currency', currency: 'BRL' }).format(incident.value)} ou de outra forma possível, ok?`

  function sendToCases() {
    navigation.navigate('Cases');
  }

  function sendMail(){
    MailComponser.composeAsync({
      subject: `Quem quer ajudar: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
  }

  return (
    <Container style={{paddingTop: Constants.statusBarHeight + 20}}>
      <Header>
        <Logo source={logo} />
        <HeaderTitle onPress={sendToCases}>
          <Feather name="arrow-left" size={28} color="#e02041"  />
        </HeaderTitle>
      </Header>

      <CasesContainer>
      <TextProperty style={{ marginTop: 0 }}>NOME:</TextProperty>
      <TextValue>{incident.name} de {incident.city}/{incident.uf}</TextValue>

        <TextProperty>CASO:</TextProperty>
        <TextValue>{incident.title}</TextValue>

        <TextProperty>VALOR:</TextProperty>
        <TextValue>{incident.value}</TextValue>

      </CasesContainer>

      <ContactBox>
        <Title>Salve o dia de alguém</Title>
        <Subtitle>Ajude agora mesmo.</Subtitle>

        <TextDescription>Entre em contato</TextDescription>

        <ActionsContent>
          <ActionButton onPress={sendWhatsapp}>
            <ActionText>Whatsapp</ActionText>
          </ActionButton>

          <ActionButton onPress={sendMail}>
            <ActionText>Email</ActionText>
          </ActionButton>
        </ActionsContent>
      </ContactBox>
    </Container>
  );
}
