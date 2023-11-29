import styled from 'styled-components/native';
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #001021;
  padding-bottom: 12%;
`;

export const Texto = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  padding: 15px;
  color: #FFF;
`;
export const TextoHeader = styled.Text`
  font-size: 30px;
  margin-top: 25px;
  padding: 20px;
  color: #FFF;
`;

export const Input = styled.TextInput`
  margin-top: 10px;
  padding: 10px;
  border-width: 1px;
  border-color: #FFF;
  height: 45px;
  width: 85%;
  font-size: 17px;
  border-radius: 15px;
  align-self: center;
  color: #FFF;
`;

export const Botao = styled.TouchableOpacity`
  margin-top: 80px;
  align-items: center;
  justify-content: center;
  border-color: #121212;
  border-width: 1px;
  background-color: #68B2;
  border-radius: 15px;
  height: 75px;
  width: 88%;
  align-self: center;
`;

export const ButtonText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;

export const Header1 = styled.View`
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: #001021;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 200px;
`;

export const LinkText = styled.Text`
  color: #1917;
  font-size: 30px;
  align-self: center;
`;

export const StyledSwitch = styled.Switch`
  width: 40px;
  height: 40px;
`;
