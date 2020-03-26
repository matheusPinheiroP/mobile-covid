import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image``;

export const HeaderTitle = styled.Text`
  font-size: 15px;
  color: #333;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #13131a;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #333;
`;

export const CardsList = styled.View`
  margin-top: 32px;
`;

export const CasesList = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const TextProperty = styled.Text`
  font-size: 14px;
  color: #414d;
  font-weight: bold;
`;

export const TextValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  margin-bottom: 24px;
  color: #737380;
`;

export const SubmitButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;
