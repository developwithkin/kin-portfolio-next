import React from "react";
import Link from "../Link/Link";

import {motion} from "framer-motion";

const GridHariku = () => {
	return (
		<motion.div whileHover={"hover"} className="h-full w-full flex justify-center items-center">
			<img
				src="projects/hariku_bg.svg"
				alt=""
				className="w-full h-[103%] object-cover -translate-y-1 dark:opacity-30"
			/>
			<img
				src="projects/hariku.png"
				alt=""
				className="absolute w-full h-full object-cover"
			/>
			<Link 
				label="Hariku Diary"
				href="https://github.com/reinhaaard13/Hariku-App"
			/>
		</motion.div>
	);
};

export default GridHariku;
