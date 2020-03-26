import React, { useState ,useEffect } from 'react';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'

import api from '../../services/api';
import logo from '../../assets/logo.png';

import 
{ 
  Container, 
  Header, 
  Logo, 
  HeaderTitle, 
  Title, 
  Subtitle, 
  CardsList, 
  CasesList,
  TextProperty, 
  TextValue,
  SubmitButton,
  ButtonText 
} from './styles';

export default function Cases() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetails(incident) {
    navigation.navigate('Details', { incident })
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if(total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', {
      params: { page }
    });
    
    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPages(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, [])

  return (
    <Container style={{paddingTop: Constants.statusBarHeight + 20}}>
      <Header>
        <Logo source={logo} />
        <HeaderTitle>
          Total de {total} casos.
        </HeaderTitle>
      </Header>

      <Title>Bem-vindo</Title>
      <Subtitle>Escolha um dos casos e ajude se puder!</Subtitle>

      <FlatList 
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <CardsList>
          <CasesList>
          <TextProperty>NOME:</TextProperty>
          <TextValue>{incident.name}</TextValue>

          <TextProperty>CASO:</TextProperty>
          <TextValue>{incident.title}</TextValue>

          <TextProperty>VALOR:</TextProperty>
          <TextValue>
            {Intl.NumberFormat('pt-BR', 
            { style:'currency', 
            currency: 'BRL' 
            }).format(incident.value)}</TextValue>

          <SubmitButton onPress={() => navigateToDetails(incident)}>
            <ButtonText>Ver mais detalhes</ButtonText>
            <Feather name="arrow-right" size={16} color="#e02041" />
          </SubmitButton>

        </CasesList>
        </CardsList>
        )}
      />
    </Container>
  );
}
