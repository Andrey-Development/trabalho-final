import React, { useEffect, useState, useContext } from "react";
import { View, Text, Button, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, db } from './../../firebaseConnection';
import styles from './styles';
import { UserContext } from '../../contexts/AuthContext';

export default function Home({ apiUrlRoute, navigation }) {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [data, setData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch(apiUrlRoute);
    //         const data = await response.json();
    //         setData(data);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);

    // const handleAnswerSelection = (questionId, selectedOption) => {
    //     setSelectedAnswers({
    //         ...selectedAnswers,
    //         [questionId]: selectedOption,
    //     });
    // };

    return (
        <View style={styles.container}>
            <Text>Home</Text>

            <Button 
                title="Ranking"
                onPress={() => { navigation.navigate('Ranking') }} 
            />
        </View>
    );
}