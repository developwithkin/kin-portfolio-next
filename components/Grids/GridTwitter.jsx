import React, { useEffect, useState } from "react";

// import mapboxgl from "mapbox-gl";

import { motion, useAnimationControls } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import Image from "next/image";

import { useFilter } from "../../context/FilterContext";
import { FILTER } from "../../constants/FilterConstants";

const GridTwitter = () => {
	const { filter } = useFilter()
	const visible = filter === FILTER.ALL || filter === FILTER.ABOUT

	return (
		<motion.div
			whileHover={"hover"}
			className={`bg-[#1B1F23] h-full w-full flex justify-center items-center transition-opacity ${!visible && "opacity-25"}`}
		>
			<img src="twitter.png" alt="twitter-logo" className="h-20" />
			{/*<Link 
			label="Twitter"
			href="https://x.com/kata_nico"
			/>
			{/* <motion.div
				className="item-link transition-shadow duration-300 cursor-pointer bg-white w-9 h-9 absolute left-5 bottom-5 rounded-full flex justify-center items-center"
				variants={variants}
				transition={{ duration: 0.3 }}
			>
				<motion.p
					className="mr-9 ml-4 opacity-0"
          style={{ transform: "translateX(-12px)"}}
					variants={text_variants}
          transition={{ duration: 0.3 }}
				>
					Github
				</motion.p>
				<motion.div className="absolute right-0 w-9 h-9 flex justify-center items-center">
					<ImArrowUpRight2 className="" />
				</motion.div>
			</motion.div> */}
		</motion.div>
	);
};

export default GridTwitter;
