import Link from "next/link";
import React from "react";

import { RiProfileLine } from "react-icons/ri";
import { motion } from "framer-motion";

const FloatingResume = () => {
	return (
		<Link href={"/resume"}>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ scale: 0, rotate: -360 }}
				transition={{ duration: 0.3 }}
				className="fixed group bottom-5 left-5 rounded-full flex flex-col bg-teal-500 justify-center items-center aspect-square p-3 shadow"
			>
				<RiProfileLine className="text-2xl group-hover:opacity-50 transition-opacity" />
				<p className="text-xs font-medium group-hover:opacity-50 transition-opacity">RESUME</p>
			</motion.div>
		</Link>
	);
};

export default FloatingResume;
