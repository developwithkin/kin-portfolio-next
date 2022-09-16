import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useRouter } from "next/router";

const words = [
	"Hello",
	"Annyeong",
	"Bonjour",
	"Konnichiwa",
	"Namaste",
	"Ni Hao",
	"Olá",
	"Salut",
	"Shalom",
	"Zdravo",
]

const LoadingText = () => {
	const router = useRouter();

	const [wordIdx, setWordIdx] = useState(0)

	const name =
		router.pathname === "/" ? "Home" : router.pathname.replace("/", "");

	useEffect(() => {
		setTimeout(() => {
			if (wordIdx < words.length - 1) {
				setWordIdx(wordIdx + 1);
			}
			console.log("test")
		}, 200)
	}, [wordIdx])

	useEffect(() => {
		
	}, [])

	return (
		<motion.p
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="font-moranga text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 z-[100] -translate-y-1/2"
		>
			{words[wordIdx]}
		</motion.p>
	);
};

export default LoadingText;
