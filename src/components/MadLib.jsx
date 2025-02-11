import { useState } from 'react';
import MadLibForm from './MadLibForm';
import MadLibStory from './MadLibStory';
import './MadLib.css';

/**
 * The MadLib component is the main container for this MadLibs application.
 * It manages the state of the form data and whether the form has been submitted.
 *
 * Core Functionality:
 * - Displays the form for user input until submitted.
 * - After submission, displays the generated MadLib story.
 * - Allows users to restart the process to create a new story.
 */
const MadLib = () => {
	// State to store form input data
	const [formData, setFormData] = useState({});
	// State to track wether the form has been submitted
	const [isSubmitted, setIsSubmitted] = useState(false);

	// Handles form submission by saving form data & toggling story display/view
	const handleFormSubmit = (data) => {
		setFormData(data);
		setIsSubmitted(true);
	};

	// Resets application state. Allows user the start over.
	const handleRestart = () => {
		setFormData({});
		setIsSubmitted(false);
	};

	return (
		<div className="MadLib-container">
			<h1>MadLibs!</h1>
			{isSubmitted ? (
				<MadLibStory
					data={formData} // Passes form data
					onRestart={handleRestart} // Passes restart handler
				/>
			) : (
				<MadLibForm onSubmit={handleFormSubmit} /> // Passes submission handler
			)}
		</div>
	);
};

export default MadLib;
