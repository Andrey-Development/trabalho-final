import React, { useEffect, useState, useContext } from "react";
import { View, Text, Button, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, db } from './../../firebaseConnection';
import styles from './styles';
import { UserContext } from '../../contexts/AuthContext';
import QuestionCard from '../../components/CardQuestion';

export default function Home({ apiUrlRoute, navigation }) {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(apiUrlRoute);
            const data = await response.json();
            setData(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    const handleAnswerSelection = (questionId, selectedOption) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: selectedOption,
        });
    };

    const renderQuestions = ({ item, index }) => {
        return (
            <QuestionCard
                question={item.question}
                options={[item.correct_answer, ...item.incorrect_answers]}
                onSelect={(selectedOption) => handleAnswerSelection(index, selectedOption)}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Perguntas</Text>
            <FlatList
                data={questions}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderQuestions}
            />
            <TouchableOpacity
                style={styles.finalizarButton}
                onPress={() => {
                    // Handle finalizar jogo logic here
                    // You can navigate to a summary screen or perform other actions
                }}
            >
                <Text style={styles.finalizarButtonText}>Finalizar Jogo</Text>
            </TouchableOpacity>
        </View>
    );
}