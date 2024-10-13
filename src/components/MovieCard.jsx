// src/components/MovieCard.jsx
import React from "react";

const MovieCard = ({ movie }) => {
	return (
		<div className="max-w-sm bg-gray-800 text-white p-4 rounded-md shadow-md">
			<img
				src={movie.posterURL}
				alt={movie.title}
				className="w-full h-60 object-cover rounded-md"
			/>
			<h2 className="text-lg font-semibold mt-2">
				{movie.title}
			</h2>
			<p className="text-sm">{movie.description}</p>
			<p className="mt-2">Rating: {movie.rating} / 10</p>
		</div>
	);
};

export default MovieCard;
