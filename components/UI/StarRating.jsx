import React from "react";

import { IoIosStar } from "react-icons/io";

const StarRating = ({ rating }) => {
	const stars = Array(5)
		.fill(<IoIosStar className="text-white" />, 0, rating)
		.fill(<IoIosStar className="stroke-white opacity-30" />, rating, 5);

	return (
		<div className="flex items-center">
			{stars} <span className="ml-1 text-xs font-medium">{rating}/5</span>
		</div>
	);
};

export default StarRating;
