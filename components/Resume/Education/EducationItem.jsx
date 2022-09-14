import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

const EducationItem = ({ year, school, course, grade, logo }) => {
	const variants = {
		hidden: {
			opacity: 0,
			translateY: 20,
		},
		show: {
			opacity: 1,
			translateY: 0,
		},
		hover: {
			scale: 1.1,
			transition: {
				duration: 0.2,
				ease: "linear"
			}
		}
	}

	return (
		<motion.div
			className="educations-item flex"
			whileHover={"hover"}
			variants={variants}
		>
			<div className="relative w-12 mr-2">
				<Image src={logo} layout="fill" objectFit="contain" alt={"logo"} />
			</div>
			<div>
				<p>{year}</p>
				<h2 className="font-semibold text-lg">{school}</h2>
				<p className="text-sm">{course}</p>
				{grade && <p className="text-xs text-slate-500">CGPA: {grade}</p>}
			</div>
		</motion.div>
	);
};

export default EducationItem;
