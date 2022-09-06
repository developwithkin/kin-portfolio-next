import React, { useState } from "react";

import { TbRepeat } from "react-icons/tb";

import { motion, useAnimationControls } from "framer-motion";

const GridBio = () => {
	const [excited, setExcited] = useState(true);

	// const styles = useSpring({
	// 	opacity: 1,
	// 	scale: 1,
	// 	rotate: 0,
	// });

	const avatar_ctrl = useAnimationControls();

	const handleExcitement = async () => {
		// console.log("clicked")
		// styles.scale.start({ to: 0 })
		// styles.rotate.start({ to: 90 })
		// await styles.opacity.start({ to: 0 })
		// setExcited(prev => !prev)
		// styles.opacity.start({ to: 1 });

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
		<div className="p-8 md:p-12 flex flex-col h-full justify-between">
			<button
				onClick={handleExcitement}
				className="z-10 absolute right-10 top-10 py-2 px-4 rounded-full shadow-border-light dark:shadow-border-dark font-medium hover:shadow-border-light-outer dark:hover:shadow-border-dark-outer transition-all duration-300 flex items-center"
			>
				<TbRepeat className="w-4 h-4 mr-1" />
				<p className="text-sm">Toggle PSBB!</p>
			</button>
			<motion.img
				src={excited ? "avatar-2.png" : "avatar-1.png"}
				alt="avatar"
				animate={avatar_ctrl}
				className="w-fit h-28"
			/>
			<p className="tracking-wide">
				I am <span className="font-moranga text-3xl">rei</span>, a developer
				based in Jakarta, Indonesia. I develop web and mobile based
				applications. I work with React, React Native, Node, Express, and MySQL
				or MongoDB.
			</p>
		</div>
	);
};

export default GridBio;
