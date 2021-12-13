import React, {useState} from 'react';
import SingleQuestion from './SingleQuestion';

const Question = ({
		questions,
		handleScoreToApp
	}) => {
	const [scoreBoard, setScoreBoard] = useState({
		score: 0,
		questionsAnswered: 0,
	})

	const handleScore = (scoreBoard) => {
		setScoreBoard({
			score: score, 
			questionsAnswered: questionsAnswered
		})
		handleScoreToApp(scoreBoard)
	}
	return (
		<div>
			{questions.map((question, index) => {
				return (
					<div key={index}>
						<h1>{question.question}</h1>
						<SingleQuestion
							answers={question.answers}
							correctAnswer={question.correctAnswer}
							handleScore = {(scoreBoard) => handleScore(scoreBoard)}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Question;
