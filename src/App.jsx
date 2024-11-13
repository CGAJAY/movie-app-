import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDescription from "./components/MovieDescription";
import initialMovies from "./movies";

const App = () => {
	// Store for movies
	const [movies, setMovies] = useState(initialMovies);
	// Store for a new movie
	const [newMovie, setNewMovie] = useState({
		title: "",
		description: "",
		posterURL: "",
		rating: "",
		trailerURL: "", // Add trailer URL here
	});
	// function to add a new movie
	const addMovie = () => {
		// get the newmovie and add it to the main store
		setMovies([...movies, newMovie]);
		// Reset the input fields for adding a new movie
		setNewMovie({
			title: "",
			description: "",
			posterURL: "",
			rating: "",
			trailerURL: "",
		});
	};

	// function to filter movies based on title and rating
	const filterMovies = (title, rating) => {
		const filtered = initialMovies.filter((movie) => {
			const matchesTitle = movie.title
				.toLowerCase()
				.includes(title.toLowerCase());
			const matchesRating =
				!rating || movie.rating >= Number(rating);
			return matchesTitle && matchesRating;
		});
		// update the store with filtered movies
		setMovies(filtered);
	};

	return (
		<Router>
			<div className="p-8 bg-gray-900 text-white min-h-screen">
				<h1 className="text-4xl mb-6">My Movie App</h1>
				<Filter filterMovies={filterMovies} />

				<div className="mb-6">
					<input
						type="text"
						placeholder="Movie Title"
						className="p-2 rounded-md mr-2 mb-2"
						value={newMovie.title}
						onChange={(e) =>
							setNewMovie({
								...newMovie,
								title: e.target.value,
							})
						}
					/>
					<input
						type="text"
						placeholder="Movie Description"
						className="p-2 rounded-md mr-2 mb-2"
						value={newMovie.description}
						onChange={(e) =>
							setNewMovie({
								...newMovie,
								description: e.target.value,
							})
						}
					/>
					<input
						type="text"
						placeholder="Poster URL"
						className="p-2 rounded-md mr-2 mb-2"
						value={newMovie.posterURL}
						onChange={(e) =>
							setNewMovie({
								...newMovie,
								posterURL: e.target.value,
							})
						}
					/>
					<input
						type="number"
						placeholder="Rating"
						className="p-2 rounded-md mr-2 mb-2"
						value={newMovie.rating}
						onChange={(e) =>
							setNewMovie({
								...newMovie,
								rating: e.target.value,
							})
						}
					/>
					<input
						type="text"
						placeholder="Trailer URL"
						className="p-2 rounded-md mr-2 mb-2"
						value={newMovie.trailerURL}
						onChange={(e) =>
							setNewMovie({
								...newMovie,
								trailerURL: e.target.value,
							})
						}
					/>
					<button
						onClick={addMovie}
						className="bg-green-500 p-2 rounded-md text-white"
					>
						Add Movie
					</button>
				</div>

				<Routes>
					{/* Home route with movie list */}
					<Route
						path="/"
						element={<MovieList movies={movies} />}
					/>
					{/* Movie description route */}
					<Route
						// Dynamic route for individual movie
						path="/movie/:id"
						element={<MovieDescription movies={movies} />}
					/>
				</Routes>
			</div>
		</Router>
	);
};

export default App;
