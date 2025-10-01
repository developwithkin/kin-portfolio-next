import React, { useState } from "react";

import { TbRepeat } from "react-icons/tb";

import { motion, useAnimationControls } from "framer-motion";

import { useFilter } from "../../context/FilterContext";
import { FILTER } from "../../constants/FilterConstants";

const GridBio = () => {
	const [excited, setExcited] = useState(true);

	const avatar_ctrl = useAnimationControls();

	const {filter} = useFilter()
	const visible = filter === FILTER.ALL || filter === FILTER.ABOUT

	const handleExcitement = async () => {

		await avatar_ctrl.start({
			rotate: 60,
			scale: 0,
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		});
		setExcited((prev) => !prev);
		avatar_ctrl.start({
			rotate: 0,
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		});
	};

	return (
		<div className={`p-8 md:p-12 flex flex-col h-full justify-between transition-opacity ${!visible && "opacity-25"}`}>
			<button
				onClick={handleExcitement}
				className="z-10 absolute right-10 top-10 py-2 px-4 rounded-full shadow-border-light dark:shadow-border-dark font-medium hover:shadow-border-light-outer dark:hover:shadow-border-dark-outer transition-all duration-300 flex items-center"
			>
				<TbRepeat className="w-4 h-4 mr-1" />
				<p className="text-sm">{excited ? "Found a Bug!" : "Solved It!"}</p>
			</button>
			<motion.img
				src={excited ? "memoji-sad.png" : "memoji-smile.png"}
				alt="avatar"
				animate={avatar_ctrl}
				className="w-28 aspect-square object-contain"
			/>
			<p className="tracking-wide">
				I&apos;m <span className="font-moranga text-3xl">Nico</span>, a developer and designer 
				based in Jakarta, Indonesia. 
				I&apos;m interested in React, Node, Product Design, Sports, Cryptocurrencies and Music.
			</p>
		</div>
	);
};

export default GridBio;
