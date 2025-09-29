import React from "react";
import Link from "../Link/Link";

import { motion } from "framer-motion";
import Image from "next/image";

import { useFilter } from "../../context/FilterContext";
import { FILTER } from "../../constants/FilterConstants";

import Bot2521 from "../../public/projects/ibs.png";

const Grid2521 = () => {
	const { filter } = useFilter();
	const visible = filter === FILTER.ALL || filter === FILTER.PROJECTS

	return (
		<motion.div
			whileHover={"hover"}
			className={`h-full w-full relative flex justify-center items-center transition-opacity ${!visible && "opacity-25"}`}
		>
			<Image
				src="/projects/ibs-bg.svg"
				layout="fill"
				alt=""
				className="w-full object-cover dark:opacity-30"
				/>
			<Image
				src={Bot2521}
				placeholder="blur"
				layout="fill"
				alt=""
				className="absolute w-full h-full object-cover"
			/>
			<Link
				label="www.ibs.co.id"
				href="https://ibs.co.id/"
			/>
		</motion.div>
	);
};

export default Grid2521;
