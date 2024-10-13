// src/App.jsx
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import moviesData from "./movies";

const App = () => {
	const [movies, setMovies] = useState(moviesData);

	return (
		<div className="bg-gray-900 min-h-screen text-white p-8">
			<h1 className="text-4xl font-bold mb-4 text-center">
				My Movie App
			</h1>
			<MovieList movies={movies} />
		</div>
	);
};

export default App;
