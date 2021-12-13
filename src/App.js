import React from 'react';

import './App.css';
import Questions from './components/Questions';
import Scoreboard from './components/ScoreBoard';

function App() {
	const handleScoreToApp = (scoreBoard) => {

	}

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
			<Scoreboard score={0} questionsAnswered={0} />
			<Questions
				questions={questions}
				handleScoreToApp = {
					(scoreBoard) => handleScoreToApp(scoreBoard)
				}
				/>
		</div>
	);
}

export default App;
