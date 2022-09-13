import React from "react";

import StarRating from "../../UI/StarRating";

const SkillItem = ({ icon: Icon, title, rating, className }) => {
	return (
		<li
			className={`px-4 py-2 relative overflow-clip ${className} text-white hover:scale-[0.98] transition-all after:content-[""] after:w-full after:h-full after:bg-black after:absolute after:top-0 after:left-0 after:opacity-5 after:translate-y-full hover:after:translate-y-0 after:transition-transform`}
		>
			<div className="text-md hover:font-semibold transition-all duration-200">
				<div className="flex gap-1 items-center">
					<Icon />
					<p>{title}</p>
				</div>
				<StarRating rating={rating} />
			</div>
			<Icon className="absolute opacity-30 -top-4 -right-4 text-[60px]" />
		</li>
	);
};

export default SkillItem;
