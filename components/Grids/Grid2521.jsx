import React from "react";
import Link from "../Link/Link";

import { motion } from "framer-motion";
import Image from "next/image";

import { useFilter } from "../../context/FilterContext";
import { FILTER } from "../../constants/FilterConstants";

const Grid2521 = () => {
	const { filter } = useFilter();
	const visible = filter === FILTER.ALL || filter === FILTER.PROJECTS

	return (
		<motion.div
			whileHover={"hover"}
			className={`h-full w-full relative flex justify-center items-center transition-opacity ${!visible && "opacity-25"}`}
		>
			<Image
				src="/projects/2521_bg.svg"
				layout="fill"
				alt=""
				className="w-full object-cover dark:opacity-30"
			/>
			<Image
				src="/projects/2521.png"
				layout="fill"
				alt=""
				className="absolute w-full h-full object-cover"
			/>
			<Link
				label="2521 Twitter"
				href="https://twitter.com/reicehhh/status/1513228954882220044"
			/>
		</motion.div>
	);
};

export default Grid2521;
