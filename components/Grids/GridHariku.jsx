import React from "react";
import Link from "../Link/Link";

import {motion} from "framer-motion";
import Image from "next/image";


const GridHariku = () => {
	return (
		<motion.div whileHover={"hover"} className="h-full w-full relative flex justify-center items-center">
			<Image
				src="/projects/hariku_bg.svg"
				layout="fill"
				// objectFit="contain"
				alt=""
				className="w-full  object-cover dark:opacity-30"
			/>
			<Image
				src="/projects/hariku.png"
				layout="fill"
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
