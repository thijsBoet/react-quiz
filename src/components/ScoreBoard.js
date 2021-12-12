import React from 'react';

const Scoreboard = ({ score, questionsAnswered }) => {
	return (
		<div>
			<h1>
				Score - {score}/{questionsAnswered}
			</h1>
		</div>
	);
};

export default Scoreboard;
