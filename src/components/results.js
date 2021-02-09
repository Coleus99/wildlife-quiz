import React from 'react';

// Their rating:
// 0 - 33% = below average
// 34% - 66% = average
// 67% - 10% = above average
// A simple bar chart showing their score per answer
// Output their score and rating to a PDF

const Results = () => {
  let myQuizAnswers= JSON.parse(localStorage.getItem('myQuizAnswers'));
  console.log(myQuizAnswers)
  let totalScore = 0;
  myQuizAnswers.forEach(question => {
    totalScore+= question.score;
  });
  let percentageScore = Math.round(totalScore/75*100);
  let rating;
  if(percentageScore<34){
    rating = 'Below average'
  } else if(percentageScore<67) {
    rating = 'Average'
  }
  else{
    rating = 'Above average'
  };
  return (
    <div>
      <h1>Results</h1>
      <p>Score: {percentageScore}%</p>
      <p>Rating: {rating}</p>
      <div className="barChart">
        <div className="bar">
          <label htmlFor="q1">Q1</label>
          <progress id="q1" value={myQuizAnswers[0].score} max="15"></progress>
        </div>
        <div className="bar">
          <label htmlFor="q2">Q2</label>
          <progress id="q2" value={myQuizAnswers[1].score} max="15"></progress>
        </div>
        <div className="bar">
          <label htmlFor="q3">Q3</label>
          <progress id="q3" value={myQuizAnswers[2].score} max="15"></progress>
        </div>
        <div className="bar">
          <label htmlFor="q4">Q4</label>
          <progress id="q4" value={myQuizAnswers[3].score} max="15"></progress>
        </div>
        <div className="bar">
          <label htmlFor="q5">Q5</label>
          <progress id="q5" value={myQuizAnswers[4].score} max="15"></progress>
        </div>
      </div>
    </div>
  );
}

export default Results;