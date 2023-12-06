import styled from 'styled-components/native';
import { Text, View, SafeAreaView, ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 3%;
`;

export const Texto = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  padding: 15px;
  color: #f5f7f8;
  fontWeight: bold;
`;
export const TextoHeader = styled.Text`
  font-size: 30px;
  margin-top: 25px;
  padding: 20px;
  color: #f5f7f8;
`;

export const CampoInput = styled.TextInput`
  margin-top: 10px;
  padding: 10px;
  border-width: 1px;
  border-color: #FFF;
  height: 45px;
  width: 85%;
  font-size: 17px;
  border-radius: 15px;
  align-self: center;
  color: #f5f7f8;

`;

export const Botao = styled.TouchableOpacity`
  margin-top: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  height: 75px;
  width: 100%;
  align-self: center;
`;

export const ButtonText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #f5f7f8;
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

export const Logo = styled.Image`
  margin-bottom: 20px;
  width: 85%;
  height: 22%;
  resizeMode: contain;
  margin-right: 10px;
  margin-start: 25px;
`;

export const PickerContainer = styled.View`
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  align-self: center;
  width: 377px;
`;