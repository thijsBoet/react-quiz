import React from 'react';
import SingleQuestion from './SingleQuestion';

const Question = ({ questions }) => {
	return (
		// <div>
		// 	<h1>{questions[0].question}</h1>
		// 	<p>
		// 		<a href=''>{questions[0].answers[0]}</a>
		// 	</p>
		// </div>
		<div>
			{questions.map((question, index) => {
				return (
					<div key={index}>
						<h1>{question.question}</h1>
						<SingleQuestion
							answers={question.answers}
							correctAnswer={question.correctAnswer}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Question;
