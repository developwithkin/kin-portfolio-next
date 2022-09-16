import React from "react";
import Link from "../Link/Link";

import { useFilter } from "../../context/FilterContext";
import { FILTER } from "../../constants/FilterConstants";

import { motion } from "framer-motion";
import Image from "next/image";

import Hariku from "../../public/projects/hariku.png";

const GridHariku = () => {
	const { filter } = useFilter();
	const visible = filter === FILTER.ALL || filter === FILTER.PROJECTS;

	return (
		<motion.div
			whileHover={"hover"}
			className={`h-full w-full relative flex justify-center items-center transition-opacity ${
				!visible && "opacity-25"
			}`}
		>
			<Image
				src="/projects/hariku_bg.svg"
				layout="fill"
				// objectFit="contain"
				alt=""
				className="w-full  object-cover dark:opacity-30"
				/>
			<Image
				src={Hariku}
				layout="fill"
				placeholder="blur"
				// objectFit="contain"
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
