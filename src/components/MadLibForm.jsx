import { useState } from 'react';

/**
 * The MadLibForm component renders a form for user input.
 * Users can enter values for various fields that will be used
 * to generate a MadLib story. The form handles input changes and submission.
 *
 * Props:
 * - onSubmit: A callback function to handle the form data submission.
 */
const MadLibForm = ({ onSubmit }) => {
	// State to store the form data entered by the user
	const [form, setForm] = useState({
		noun: '',
		adjective: '',
		noun2: '',
		color: '',
	});

	// Handles changes in the form fields & updates state
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	// Handles form submission, sends form data to parent component
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(form);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Noun: </label>
				<input
					type="text"
					name="noun"
					value={form.noun}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>Adjective: </label>
				<input
					type="text"
					name="adjective"
					value={form.adjective}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>Noun: </label>
				<input
					type="text"
					name="noun2"
					value={form.noun2}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>Color: </label>
				<input
					type="text"
					name="color"
					value={form.color}
					onChange={handleChange}
				/>
			</div>
			<button type="submit">Get Story</button>
		</form>
	);
};

export default MadLibForm;
