import React from "react";
import { TbCertificate } from "react-icons/tb";
import StarRating from "../../UI/StarRating";

import { motion } from "framer-motion"

const SkillItem = ({ icon: Icon, title, rating, className, certificate }) => {
	const variants = {
		hidden: {
			opacity: 0,
			translateY: 20,
		},
		show: {
			opacity: 1,
			translateY: 0,
		},
	}

	return (
		<motion.li
			className={`flex justify-between px-4 py-2 relative overflow-clip ${className} text-white hover:scale-[0.98] transition-all after:content-[""] after:w-full after:h-full after:bg-black after:absolute after:top-0 after:left-0 after:opacity-5 after:translate-y-full hover:after:translate-y-0 after:transition-transform after:duration-300`}
			variants={variants}
		>
			<div className="text-md hover:font-semibold transition-all duration-200">
				<div className="flex gap-1 items-center">
					<Icon />
					<p>{title}</p>
				</div>
				<StarRating rating={rating} />
			</div>
			{certificate && (
				<a
					className="flex items-center gap-1 hover:underline z-10"
					href={certificate}
					target="_blank"
					rel="noreferrer"
				>
					<TbCertificate />
					<p className="text-xs">Certificate</p>
				</a>
			)}
			<Icon className="absolute opacity-30 -top-4 -right-4 text-[60px]" />
		</motion.li>
	);
};

export default SkillItem;
