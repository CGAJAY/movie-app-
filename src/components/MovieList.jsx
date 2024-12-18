import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{movies.map((movie, index) => (
				<MovieCard key={index} id={index} movie={movie} />
			))}
		</div>
	);
};

export default MovieList;
