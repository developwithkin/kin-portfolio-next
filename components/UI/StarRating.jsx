import React from "react";

import { IoIosStar } from "react-icons/io";

const StarRating = ({ rating }) => {
	const stars = Array(5)
		.fill(<IoIosStar className="text-white" />, 0, rating)
		.fill(<IoIosStar className="opacity-30" />, rating, 5);

	const star = Array.from(Array(5), (_, i) => {
		return (
			<IoIosStar
				className={`text-white ${
					i >= rating ? "opacity-30" : "opacity-100"
				}`}
				key={i}
			/>
		);
	})

	return (
		<div className="flex items-center">
			{star} <span className="ml-1 text-xs font-medium">{rating}/5</span>
		</div>
	);
};

export default StarRating;
