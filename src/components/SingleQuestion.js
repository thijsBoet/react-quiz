import React from 'react';
import './SingleQuestion.css';

const SingleQuestions = ({ answers, correctAnswer }) => {
	const clickHandler = event => {
		event.preventDefault();
		const answer = event.target.innerText;
		console.log(answer === correctAnswer ? 'correct' : 'incorrect');
	};

	return answers.map(answer => {
		return (
			<p key={answer} onClick={clickHandler}>
				<a href='#'>{answer}</a>
			</p>
		);
	});
};

export default SingleQuestions;
