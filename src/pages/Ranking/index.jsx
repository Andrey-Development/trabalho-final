import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import { Container, HorizontalCenter, TitlePrimary, TitleSecondary, TextPrimary } from './styles';
import { onValue, ref } from 'firebase/database';
import { db } from '../../firebaseConnection';

function Ranking({ navigation }) {
  const [ranking, setRanking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [level, setLevel] = useState("easy");

  const calcularRanking = (pessoas) => {
    // Classificar o array com base no número de perguntas corretas (decrescente) e, em caso de empate, no número de perguntas erradas (crescente)
    pessoas.sort(function (a, b) {
        if (b.questoesCorretas === a.questoesCorretas) {
            return a.questoesErradas - b.questoesErradas;
        }
        return b.questoesCorretas - a.questoesCorretas;
    });
    
    // Adicionar classificação às pessoas no array
    for (let i = 0; i < pessoas.length; i++) {
        pessoas[i].classificacao = i + 1;
    }
    setLoading(false);
    setRanking(pessoas);
  }

  const montaRanking = async () => {
    try {
      onValue(ref(db, '/ranking'), (querySnapShot) => {
        const usersData = 
          querySnapShot.val() != null ? 
            Object.values(querySnapShot.val()) 
            : [];
        
        const filteredData = usersData.filter(user => user.nivel === level);

        calcularRanking(filteredData);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    montaRanking();
  }, []);

  return (
    <Container>
      <HorizontalCenter>
        <TitlePrimary>Ranking</TitlePrimary>
      </HorizontalCenter>
      <HorizontalCenter>
        <TitleSecondary>You Scored</TitleSecondary>
      </HorizontalCenter>
      <HorizontalCenter>
        {loading ? (
          <TextPrimary>Carregando...</TextPrimary>
        ) : ranking && ranking.length > 0 ? (
          ranking.map(({classificacao, nome}) => (
            <View key={classificacao}>
              <TextPrimary>{`Nome: ${nome}`}</TextPrimary>
            </View>
          ))
        ) : (
          <TextPrimary>Nenhum resultado disponivel!</TextPrimary>
        )}
      </HorizontalCenter>
    </Container>
  )
}

export default Ranking;
