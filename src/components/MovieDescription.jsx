import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDescription = ({ movies }) => {
	const { id } = useParams(); // Get movie ID from the URL
	const movie = movies[id]; // Fetch the movie from the list

	return (
		<div className="p-8 bg-gray-900 text-white min-h-screen">
			<h1 className="text-4xl mb-6">{movie.title}</h1>
			<div className="mb-6">
				<img
					src={movie.posterURL}
					alt={movie.title}
					className="w-full h-80 object-cover rounded-md"
				/>
				<p className="mt-4">{movie.description}</p>
				<p className="mt-4">Rating: {movie.rating} / 10</p>
				<div className="mt-6">
					<h3 className="text-xl">Trailer:</h3>
					<iframe
						width="100%"
						height="400"
						src={movie.trailerURL}
						title="Movie Trailer"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</div>
			<Link
				to="/"
				className="bg-blue-500 p-2 rounded-md text-white mt-4 inline-block"
			>
				Back to Home
			</Link>
		</div>
	);
};

export default MovieDescription;
