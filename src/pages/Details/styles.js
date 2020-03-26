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

export const HeaderTitle = styled.TouchableOpacity`
  font-size: 15px;
  color: #333;
`;

export const CasesContainer = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
  margin-top: 48px;
`;

export const TextProperty = styled.Text`
   font-size: 14px;
   color: #414d;
   font-weight: bold;
   margin-top: 24px;
`;

export const TextValue = styled.Text`
   margin-top: 8px;
   font-size: 15px;
   color: #737380;
`;

export const ContactBox = styled.View`
   padding: 24px;
   border-radius: 8px;
   background-color: #fff;
   margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const Subtitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const TextDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`;

export const ActionsContent = styled.View`
   margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButton = styled.TouchableOpacity`
  background-color: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 15px;
`;