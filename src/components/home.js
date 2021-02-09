import React, { useEffect, useState} from 'react'
import Question from './question'

const Home = () => {

  // Enable scrolling through questions
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion+1)
  }
  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion-1)
  }
  useEffect(() => {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
      if(question.id==currentQuestion){
        question.classList.add('active')
      }
      else{
        question.classList.remove('active');
      }
    })
  },[currentQuestion])

  // Get data from local storage
  useEffect(() => {
    let myQuizAnswers= JSON.parse(localStorage.getItem('myQuizAnswers')) || [
      {answer: '',score: 0},
      {answer: '',score: 0},
      {answer: '',score: 0},
      {answer: '',score: 0},
      {answer: '',score: 0}
    ]
    myQuizAnswers.forEach(question => {
      if(question.answer){
        document.querySelector(`#${question.answer}`).checked=true
      }
    })

    // Save data to local storage
    const questions = document.querySelectorAll('.question')
    questions.forEach(question => {
      let inputs = question.querySelectorAll('input');
      inputs.forEach(input => {
        input.addEventListener('change', () => {
          if(input.checked===true){
            myQuizAnswers[question.id - 1].answer = input.id
            myQuizAnswers[question.id - 1].score = parseInt(input.value)
            localStorage.setItem('myQuizAnswers', JSON.stringify(myQuizAnswers));
          }
        })
      })
    })
  },[])

  return (
    <div>
      <h1>Question {currentQuestion}</h1>
      <div className="questions">
        <Question 
          number="1"
          active={true}
          text="How long do tigers live in the wild?" 
          answer1="5-10 years"
          answer1score="5"
          answer2="10-12 years" 
          answer2score="10"
          answer3="12-15 years"
          answer3score="15"
          nextQuestion={nextQuestion}
          prevQuestion={prevQuestion}
          />
        <Question 
          number="2"
          active={false}
          text="How heavy is a great white shark?" 
          answer1="Up to 1,500 kg"
          answer1score="10"
          answer2="Up to 2,250 kg" 
          answer2score="15"
          answer3="Up to 4,000 kg"
          answer3score="5"
          nextQuestion={nextQuestion}
          prevQuestion={prevQuestion}
          />
        <Question 
          number="3"
          active={false}
          text="How long is a komodo dragon?" 
          answer1="Up to 3m long"
          answer1score="15"
          answer2="Up to 2m long" 
          answer2score="10"
          answer3="Up to 1m long"
          answer3score="5"
          nextQuestion={nextQuestion}
          prevQuestion={prevQuestion}
          />
        <Question 
          number="4"
          active={false}
          text="What's the wingspan of a steller's sea eagle?" 
          answer1="1m"
          answer1score="10"
          answer2="2.5m" 
          answer2score="15"
          answer3="5m"
          answer3score="5"
          nextQuestion={nextQuestion}
          prevQuestion={prevQuestion}
          />
        <Question 
          number="5"
          active={false}
          text="How long do Anaconda's live?" 
          answer1="5-10 years"
          answer1score="5"
          answer2="10-30 years" 
          answer2score="15"
          answer3="20-40 years"
          answer3score="10"
          nextQuestion={nextQuestion}
          prevQuestion={prevQuestion}
          />
        </div>
    </div>
  );
}

export default Home;