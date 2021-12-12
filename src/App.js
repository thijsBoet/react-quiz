import React, { useState } from 'react';

import './App.css';
import Questions from './components/Questions';
import Scoreboard from './components/ScoreBoard';

function App() {
	const [score, setScore] = useState(0);
	const [questionsAnswered, setQuestionsAnswered] = useState(0);

	const questions = [
		{
			id: 1,
			question: 'What does JSX stand for?',
			answers: [
				'JavaScript XML',
				'JavaScript XHTML',
				'Java XML',
				'JavaScript HTML',
      		],
      		correctAnswer: 'JavaScript XML',
		},
	];

	return (
		<div className='container'>
			<Scoreboard score={score} questionsAnswered={questionsAnswered} />
			<Questions questions={questions} />
		</div>
	);
}

export default App;
