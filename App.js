import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const[currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const quizData = [
    {
      question : "What is the goat in history of football",
      options: ['Cr7', 'ozil', 'zidane', 'modric' ],
      answer: 'ozil',
    },
    {
      question : "What is the goat in history of football",
      options: ['Cr7', 'ozil', 'zidane', 'modric' ],
      answer: 'ozil',
    },
    {
      question : "What is the goat in history of football",
      options: ['Cr7', 'ozil', 'zidane', 'modric' ],
      answer: 'ozil',
    },
    {
      question : "What is the goat in history of football",
      options: ['Cr7', 'ozil', 'zidane', 'modric' ],
      answer: 'ozil',
    }
    
  ] 
const handAnswer = {selectedAnswer} => {
  const answer = quizData[currentQuestion]?.answer;
  if (answer == selectedAnswer){
    setScore((prevScore)=> prevScore + 1);
  }
  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < quizData.length){
    setCurrentQuestion(nextQuestion)
  }else{
    setShowScore(true);
  }
}

  return (
    <View style={styles.container}>
      {showScore ? <View>
          <Text> {score}</Text>
      </View> :
        <View style={styles.questionContainer}>
          {/* the questions */}
          <Text style={styles.questionText}> { quizData[currentQuestion]?.question }</Text>
          {/* options */}
          {quizData[currentQuestion]?.options.map(((item) => {
            return <TouchableOpacity onPress={()=> handAnswer(item)} style={styles.optionContainer}>
              <Text style={styles.optionsStyle}> {item}</Text>
            </TouchableOpacity>
           }))}
          </View>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer: {
    backgroundColor: '@DDDDDDD',
    padding: 10,
    margin: 10,
    borderRadius:5,
  },
  optionsStyle:{
    color: 'green',
    padding: 5,
    alignSelf: 'center',
    fontSize: 20,

  },
  optionContainer:{
    borderColor: "black",
    borderWidth: 2,
    marginTop: 15,
  },
  questionText:{
    fontSize: 20,

  }
});
