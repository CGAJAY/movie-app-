import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import initialMovies from "./movies";

const App = () => {
	// State to store the list of movies. Starts with the initialMovies array
	const [movies, setMovies] = useState(initialMovies);
	// State to store the information of a new movie to be added
	const [newMovie, setNewMovie] = useState({
		title: "",
		description: "",
		posterURL: "",
		rating: "",
	});

	// Function to add a new movie to the list
	const addMovie = () => {
		// Add the new movie to the current list of movies
		setMovies([...movies, newMovie]);
		// Reset the input fields for adding a new movie after it's been added
		setNewMovie({
			title: "",
			description: "",
			posterURL: "",
			rating: "",
		});
	};

	// Function to filter movies based on title and rating
	const filterMovies = (title, rating) => {
		// Filter movies based on title and rating
		const filtered = initialMovies.filter((movie) => {
			// Check if the movie's title contains the searched title
			const matchesTitle = movie.title
				.toLowerCase()
				.includes(title.toLowerCase());

			// Check if the movie's rating is greater than or equal to the searched rating
			const matchesRating =
				!rating || movie.rating >= Number(rating);
			return matchesTitle && matchesRating;
		});
		// Update the state with the filtered movies
		setMovies(filtered);
	};

	return (
		<div className="p-8 bg-gray-900 text-white min-h-screen">
			{/* Main heading of the app */}
			<h1 className="text-4xl mb-6">My Movie App</h1>
			{/* Filter component that allows users to filter movies by title or rating */}
			<Filter filterMovies={filterMovies} />

			{/* Form to add a new movie */}
			<div className="mb-6">
				{/* Input field for the movie title */}
				<input
					type="text"
					placeholder="Movie Title"
					className="p-2 rounded-md mr-2"
					value={newMovie.title}
					required
					// Updates the title state when the user types
					onChange={(e) =>
						setNewMovie({
							...newMovie,
							title: e.target.value,
						})
					}
				/>

				{/* Input field for the movie description */}
				<input
					type="text"
					placeholder="Movie Description"
					className="p-2 rounded-md mr-2"
					value={newMovie.description}
					required
					// Updates the description state
					onChange={(e) =>
						setNewMovie({
							...newMovie,
							description: e.target.value,
						})
					}
				/>

				{/* Input field for the poster URL */}
				<input
					type="text"
					placeholder="Poster URL"
					className="p-2 rounded-md mr-2"
					value={newMovie.posterURL}
					required
					// Update the posterURL state
					onChange={(e) =>
						setNewMovie({
							...newMovie,
							posterURL: e.target.value,
						})
					}
				/>

				{/* Input field for the movie rating */}
				<input
					type="number"
					placeholder="Rating"
					className="p-2 rounded-md mr-2"
					value={newMovie.rating}
					required
					// Update the rating state
					onChange={(e) =>
						setNewMovie({
							...newMovie,
							rating: e.target.value,
						})
					}
				/>

				{/* Button to add the new movie */}
				<button
					onClick={addMovie}
					className="bg-green-500 p-2 rounded-md text-white"
				>
					Add Movie
				</button>
			</div>

			{/* MovieList component that displays the list of movies */}
			<MovieList movies={movies} />
		</div>
	);
};

export default App;
