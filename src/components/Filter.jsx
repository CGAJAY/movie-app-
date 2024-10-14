import React, { useState } from "react";

// The Filter component filters the movies based on title and rating.
// Receives a function called `filterMovies` from its parent component (App).
const Filter = ({ filterMovies }) => {
	const [title, setTitle] = useState("");
	const [rating, setRating] = useState("");

	// handleFilter() is called when the "Filter" button is clicked.
	// It passes the title and rating values to the `filterMovies` function (from the parent component).
	const handleFilter = () => {
		// filters the movies with the current title and rating.
		filterMovies(title, rating);
	};

	return (
		<div className="mb-6">
			{/* Input field for the user to type the movie title */}
			<input
				type="text"
				placeholder="Search by title"
				className="p-2 rounded-md mr-2 text-black mb-2"
				// The value of the input is connected to the `title` state
				value={title}
				// When the user types, update the `title` state
				onChange={(e) => setTitle(e.target.value)}
			/>

			{/* Input field for the user to enter the minimum rating  */}
			<input
				type="number"
				placeholder="Minimum Rating"
				className="p-2 rounded-md mr-2 text-black"
				// The value of the input is connected to the `rating` state
				value={rating}
				// When the user types, update the `rating` state
				onChange={(e) => setRating(e.target.value)}
			/>

			<button
				// Call the `handleFilter` function when the button is clicked
				onClick={handleFilter}
				className="bg-red-500 p-2 rounded-md text-white"
			>
				Filter
			</button>
		</div>
	);
};

export default Filter;
