import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { UserContext } from '../../contexts/AuthContext';

export default function SignUp({ navigation }) {
    const { user, setUser } = useContext(UserContext);

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Nome</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setUser({ ...user, nome: texto })}
                value={user.nome}
            />

            <Text style={styles.texto}>Email</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setUser({ ...user, email: texto })}
                value={user.email}
            />

            <Text style={styles.texto}>Numero de questões</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setUser({ ...user, numberQuestion})}
                value={user.numberQuestion}
            />

            <Text style={styles.texto}>Senha</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setUser({ ...user, dificulty: texto })}
                value={user.dificulty}
            />

            <View style={styles.divButtoms}>
                <Button
                    title="Cadastrar"
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                />

                <Button
                    title="Já possuo cadastro"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3c3c3c',
        flex: 1,
        padding: 10,
    },
    texto: {
        color: '#f1f1fa',
        fontSize: 20
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#c6c6c6',
        height: 45,
        fontSize: 17,
        marginBottom: 12,
    },
    divButtoms: {
        marginTop: 16,
        gap: 12,
    },
    button: {
        color: '#f1f1fa',
        backgroundColor: '#00cbcc',
        marginBottom: 12,
    }
});