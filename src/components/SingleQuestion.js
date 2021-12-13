import React, { useState} from 'react';
import './SingleQuestion.css';

const SingleQuestions = ({
	answers,
	correctAnswer,
	handleScore
}) => {
	const [score, setScore] = useState(0);
	const [questionsAnswered, setQuestionsAnswered] = useState(0);

	const clickHandler = event => {
		event.preventDefault();
		const answer = event.target.innerText;
		setQuestionsAnswered(prevQuestionsAnswered => prevQuestionsAnswered +1)
		answer === correctAnswer && setScore(prevScore => prevScore + 1)

		handleScore(score, questionsAnswered)
	};

	return answers.map(answer => {
		return ( 
			<p key = {answer}onClick = {clickHandler}>
			<a href = '#' > {answer} </a> </p>
		);
	});
};

export default SingleQuestions;