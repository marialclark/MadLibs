/**
 * The MadLibStory component displays the story generated
 * from the user's input. It also provides a button to restart
 * the process, allowing the user to create a new story.
 *
 * Props:
 * - data (object): Contains the user inputs used to generate the story.
 *   Fields:
 *     - noun (string): The first noun input.
 *     - adjective (string): The adjective input.
 *     - noun2 (string): The second noun input.
 *     - color (string): The color input.
 * - onRestart (function): A callback function to reset the app and restart the process.
 */
const MadLibStory = ({ data, onRestart }) => {
	// Renders the MadLib story using user inputs
	return (
		<div className="story-container">
			<p>
				There was a {data.color} {data.noun} who loved a {data.adjective}{' '}
				{data.noun2}.
			</p>
			<button onClick={onRestart}>Restart</button>
		</div>
	);
};

export default MadLibStory;
