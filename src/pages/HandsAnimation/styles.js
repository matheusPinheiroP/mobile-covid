import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 13px;
`;

export const ActionsContent = styled.View`
   margin-top: 30px;
   flex-direction: row;
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
