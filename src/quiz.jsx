import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { Typography, Button, CardContent } from '@material-ui/core';
import celeb from './images/Celebration.svg';
import lost from './images/Lost.svg';

import { makeStyles,  createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';

export default function QuizApp() {
	const theme = createMuiTheme({
		palette: {
		  primary: { main: '#673ab7' },
		  secondary: { main: '#021626' },
		},
		customError: { color: 'red' }
	  });
	const questions = [
		{
			questionText: 'What is the waste entailing risk of injury?',
			answerOptions: [
				{ answerText: 'Infectious', isCorrect: false },
				{ answerText: 'Anatomical', isCorrect: false },
				{ answerText: 'Sharps', isCorrect: true },
				{ answerText: 'Cytotoxic', isCorrect: false },
			],
		},
		{
			questionText: '	How many categories are there for the health risks associated with hazardous medical waste?',
			answerOptions: [
				{ answerText: '3', isCorrect: false },
				{ answerText: '4', isCorrect: true },
				{ answerText: '5', isCorrect: false },
				{ answerText: '6', isCorrect: false },
			],
		},
		{
			questionText: 'Cleaning products and, disinfectants in particular, are examples of ____________ chemicals which are used in large quantities in hospitals.',
			answerOptions: [
				{ answerText: 'Dangerous', isCorrect: true },
				{ answerText: 'Harmless', isCorrect: false },
				{ answerText: 'Beneficial', isCorrect: false },
				{ answerText: 'None of the Above', isCorrect: false },
			],
		},
		{
			questionText: 'The plastic part of syringes is recycled in some regions, but this practice is ________________ in ICRC contexts.',
			answerOptions: [
				{ answerText: 'Recommended', isCorrect: false },
				{ answerText: 'Not Recommended', isCorrect: true },
			],
		},
		{
			questionText: '__________________ is a thermal process at low temperatures where waste is subjected to pressurized saturated steam for a sufficient length of time to be disinfected',
			answerOptions: [
				{ answerText: 'Disposing', isCorrect: false },
				{ answerText: 'Autoclaving', isCorrect: true },
				{ answerText: 'Heating', isCorrect: false },
				{ answerText: 'Shredding', isCorrect: false },
			],
		},
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<MuiThemeProvider theme={theme}>
		<div className='app'>
    	{showScore ? (
        score>questions.length/2?(<Card className="quizCard" style={{backgroundColor: "rgba(255,255,255,0.8)"}}>
        <CardContent >
        <br></br>
        <br></br>
        <div className='score-section'>
          <h4>You scored {score} out of {questions.length}!</h4>
          <img className="celeb" src={celeb} alt="Celebration"/>
		  </div>
		  <Button variant="contained" color="primary" onClick={() => {setCurrentQuestion(0); setScore(0); setShowScore(0);}}>Start Again</Button>
        </CardContent>
        </Card>):
        <Card className="quizCard" style={{backgroundColor: "rgba(255,255,255,0.7)"}}>
          <CardContent >
          <br></br>
          <br></br>
          <div className='score-section'>
            <h4>You scored {score} out of {questions.length} :(</h4>
            <img className="celeb" src={lost} alt="Better Luck Next time"/>
			<br></br>
			</div>
			<Button variant="contained" color="primary" onClick={() => {setCurrentQuestion(0); setScore(0);  setShowScore(0);}}>Start Again</Button>
          
          </CardContent>
        </Card>
			) : (
				<>
          <Card className="quizCard" style={{backgroundColor: "rgba(255,255,255,0.7)"}}>
					<div className='question-section'>
						<div className='question-count'>
						
						<br></br>
              <Typography><span><i><b>Question {currentQuestion + 1}</b>/{questions.length}</i></span>  &nbsp;&nbsp;<span>Score: {score}</span></Typography>
			  <br></br>
						</div>
						<div className='question-text'><p>{questions[currentQuestion].questionText}</p></div>
            <br></br>        
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<div className="option">
                <Button variant="contained" color="secondary" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button>
                <br/>
                <br/>
              </div>
						))}
					</div>
          </Card>
				</>
			)}
		</div>
		</MuiThemeProvider>
	);
}