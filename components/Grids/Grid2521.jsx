import React from "react";
import Link from "../Link/Link";

import { motion } from "framer-motion";

const Grid2521 = () => {
	return (
		<motion.div whileHover={"hover"} className="h-full w-full flex justify-center items-center">
			<img
				src="projects/2521_bg.svg"
				alt=""
				className="w-full h-[103%] object-cover -translate-y-1 dark:opacity-30"
			/>
			<img
				src="projects/2521.png"
				alt=""
				className="absolute w-full h-full object-cover"
			/>
			<Link 
				label="2521 Twitter Bot"
				href="https://twitter.com/reicehhh/status/1513228954882220044"
			/>
		</motion.div>
	);
};

export default Grid2521;
