import React, { useEffect, useState } from "react";

// import mapboxgl from "mapbox-gl";

import { motion, useAnimationControls } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import Image from "next/image";

import { useFilter } from "../../context/FilterContext";
import { FILTER } from "../../constants/FilterConstants";

const GridMap = () => {
	const [isHovered, setIsHovered] = useState(false);
	const img_ctrl = useAnimationControls();
	const { darkMode } = useTheme();

	const { filter } = useFilter();
	const visible = filter === FILTER.ALL || filter === FILTER.ABOUT;

	const variants = {
		hover: {
			scale: 1.1,
			transition: {
				duration: 0.5,
			},
		},
	};

	useEffect(() => {
		if (isHovered) {
			img_ctrl.start({
				rotate: isHovered ? [0, -20, 0, 20, 0] : 0,
				scale: isHovered ? [1, 1.2, 1, 1.2, 1] : 1,
				transition: {
					duration: 2,
					repeat: Infinity,
				},
			});
		} else {
			img_ctrl.start({
				rotate: 0,
				scale: 1,
				transition: {
					repeat: 0,
				},
			});
		}
	}, [img_ctrl, isHovered]);

	return (
		<motion.div
			whileHover={"hover"}
			className={`w-full h-full relative transition-opacity ${!visible && "opacity-25"}`}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>
			<motion.div
				className="absolute z-10 h-24 w-24 flex justify-center items-center top-[calc(50%-3rem)] left-[calc(50%-3rem)] backdrop-blur-[1px] shadow-md border-[6px] border-white rounded-full"
				style={{ backgroundColor: "#9ecdee" }}
				variants={variants}
			>
				<motion.img
					src="memoji-smile.png"
					alt=""
					className="h-12"
					animate={img_ctrl}
				/>
			</motion.div>
			<Image
				layout="fill"
				src={
					darkMode
						? `https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/106.975969,-6.259513,14,0,40/360x360?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}&attribution=false&logo=false`
						: `https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/106.975969,-6.259513,14,0,40/360x360?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}&attribution=false&logo=false`
				}
				alt=""
			/>
		</motion.div>
	);
};

export default GridMap;
