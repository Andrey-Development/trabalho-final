import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Texto, CampoInput, Botao, ButtonText, Logo, PickerContainer } from './styles';
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";
import styled from 'styled-components/native';
import imgQuestion from '../../../assets/question.png'
import { UserContext } from '../../contexts/AuthContext';

export default function SignUp({ navigation }) {
    const { user, setUser } = useContext(UserContext);

    const [selectedNumberQuestion, setSelectedNumberQuestion] = useState('10');
    const [selectedDifficulty, setSelectedDifficulty] = useState('easy');

    const onSubmit = () => {
        const apiUrl = buildApiUrl();
        console.log('API URL:', apiUrl);
        navigation.navigate(apiUrl, 'Home');
    };

    return (
        <LinearGradient
            colors={["#179A93", "#265e8d"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}>
            <Container>
                <Logo source={imgQuestion}></Logo>

                <Texto>Nome</Texto>
                <CampoInput
                    onChangeText={(texto) => setUser({ ...user, name: texto })}
                    value={user.name}
                />

                <Texto>Email</Texto>
                <CampoInput onChangeText={(texto) => setUser({ ...user, email: texto })}
                    value={user.email}
                />
                <Texto>Numero de questões</Texto>

                <Picker
                    selectedValue={user.numberQuestion}
                    onValueChange={(numberSelected) => setUser({ ...user, numberQuestion: numberSelected })}
                    style={{ color: '#FFF' }}
                >
                    <Picker.Item label="10" value="10" />
                    <Picker.Item label="20" value="20" />
                    <Picker.Item label="30" value="30" />
                </Picker>

                <Texto>Dificuldade</Texto>

                <Picker
                    selectedValue={user.dificulty}
                    onValueChange={(valueSelected) => setUser({ ...user, dificulty: valueSelected })}
                    style={{ color: '#FFF' }}
                >
                    <Picker.Item label="Fácil" value="easy" />
                    <Picker.Item label="Médio" value="medium" />
                    <Picker.Item label="Difícil" value="hard" />
                </Picker>

                <Container>
                    <Botao
                        onPress={() => {
                            navigation.navigate('Home');
                        }}
                    >
                        <LinearGradient
                            colors={["#265e8d", "#179A93"]}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={{ flex: 1, width: '100%', borderRadius: 15, alignItems: "center", justifyContent: 'center' }}
                        >
                            <ButtonText>Começar</ButtonText>
                        </LinearGradient>
                    </Botao>
                </Container>
            </Container>
        </LinearGradient >
    );
}