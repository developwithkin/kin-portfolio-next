import React from "react";
import SectionTitle from "../../UI/SectionTitle";

import {
	SiReact,
	SiExpress,
	SiNodedotjs,
	SiSequelize,
	SiJavascript,
	SiPython,
	SiCss3,
	SiHtml5,
	SiTypescript,
	SiDart,
	SiReactivex,
	SiReactrouter,
	SiNextdotjs,
	SiMysql,
	SiMongodb,
	SiFlutter,
	SiRedux,
	SiTailwindcss,
	SiChakraui,
	SiSass,
	SiPostcss,
	SiApplemusic,
	SiAdobepremierepro,
	SiAdobephotoshop,
	SiAbletonlive,
	SiProtools,
} from "react-icons/si";
import StarRating from "../../UI/StarRating";
import SkillItem from "./SkillItem";

import { motion } from "framer-motion";

const Skills = () => {
	return (
		<div className="mt-8" id="skills">
			<SectionTitle href={"#skills"}>My Skills</SectionTitle>

			<h2 className="mt-4 grid font-semibold text-lg underline decoration-2 decoration-amber-500">
				Programming and Markup Language
			</h2>
			<motion.ul
				initial={"hidden"}
				whileInView={"show"}
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.05, ease: "linear" }}
				className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2"
			>
				<SkillItem
					icon={SiJavascript}
					title={"Javascript"}
					className={"bg-amber-500"}
					rating={4.5}
					key={"js"}
				/>
				<SkillItem
					icon={SiPython}
					title={"Python"}
					className={"bg-yellow-500"}
					rating={4}
					key={"py"}
				/>
				<SkillItem
					icon={SiCss3}
					title={"CSS3"}
					className={"bg-blue-500"}
					rating={4.5}
					key={"css"}
				/>
				<SkillItem
					icon={SiHtml5}
					title={"HTML"}
					className={"bg-orange-500"}
					rating={4.5}
					key={"html"}
				/>
				<SkillItem
					icon={SiTypescript}
					title={"TypeScript"}
					className={"bg-blue-500"}
					rating={4}
					key={"ts"}
				/>
				<SkillItem
					icon={SiDart}
					title={"Dart"}
					className={"bg-sky-400"}
					rating={3.5}
					key={"dart"}
				/>
			</motion.ul>

			<h2 className="mt-4 grid font-semibold text-lg underline decoration-2 decoration-amber-500">
				Frameworks
			</h2>
			<motion.ul
				initial={"hidden"}
				whileInView={"show"}
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.05, ease: "linear" }}
				className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2"
			>
				<SkillItem
					icon={SiReact}
					title={"ReactJS"}
					certificate={"http://ude.my/UC-ba644920-7503-409f-96a4-111ec0e23465"}
					className={"bg-sky-500"}
					rating={4.5}
					key={"react"}
				/>
				<SkillItem
					icon={SiReactrouter}
					title={"React Router"}
					className={"bg-red-400"}
					rating={4}
					key={"rrd"}
				/>
				<SkillItem
					icon={SiExpress}
					title={"ExpressJS"}
					className={"bg-gray-800"}
					certificate={"http://ude.my/UC-48d95105-9bbd-4103-9764-b9ca650c9b26"}
					rating={4}
					key={"expressjs"}
				/>
				<SkillItem
					icon={SiNodedotjs}
					title={"NodeJS"}
					className={"bg-emerald-500"}
					certificate={"http://ude.my/UC-48d95105-9bbd-4103-9764-b9ca650c9b26"}
					rating={4}
					key={"nodejs"}
				/>
				<SkillItem
					icon={SiNextdotjs}
					title={"NextJS"}
					certificate={"http://ude.my/UC-ba644920-7503-409f-96a4-111ec0e23465"}
					className={"bg-gray-800"}
					rating={4}
					key={"nodejs"}
				/>
				<SkillItem
					icon={SiFlutter}
					title={"Flutter"}
					className={"bg-cyan-500"}
					rating={3.5}
					key={"flutter"}
				/>
				<SkillItem
					icon={SiRedux}
					title={"Redux"}
					certificate={"http://ude.my/UC-ba644920-7503-409f-96a4-111ec0e23465"}
					className={"bg-purple-500"}
					rating={4}
					key={"redux"}
				/>
			</motion.ul>

			<h2 className="mt-4 grid font-semibold text-lg underline decoration-2 decoration-amber-500">
				CSS Framework
			</h2>
			<motion.ul
				initial={"hidden"}
				whileInView={"show"}
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.05, ease: "linear" }}
				className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2"
			>
				<SkillItem
					icon={SiTailwindcss}
					title={"TailwindCSS"}
					className={"bg-sky-400"}
					rating={4.5}
					key={"tailwind"}
				/>
				<SkillItem
					icon={SiChakraui}
					title={"Chakra UI"}
					className={"bg-teal-500"}
					rating={4.5}
					key={"chakra"}
				/>
				<SkillItem
					icon={SiPostcss}
					title={"PostCSS"}
					className={"bg-pink-500"}
					rating={4}
					key={"sass"}
				/>
			</motion.ul>

			<h2 className="mt-4 grid font-semibold text-lg underline decoration-2 decoration-amber-500">
				Database
			</h2>
			<motion.ul
				initial={"hidden"}
				whileInView={"show"}
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.05, ease: "linear" }}
				className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2"
			>
				<SkillItem
					icon={SiMysql}
					title={"MySQL"}
					className={"bg-sky-700"}
					rating={4.5}
					key={"mysql"}
				/>
				<SkillItem
					icon={SiMongodb}
					title={"MongoDB"}
					className={"bg-green-500"}
					rating={4.5}
					key={"mongo"}
				/>
				<SkillItem
					icon={SiSequelize}
					title={"Sequelize"}
					className={"bg-blue-500"}
					rating={4}
					key={"sequelize"}
				/>
			</motion.ul>

			<h2 className="mt-4 grid font-semibold text-lg underline decoration-2 decoration-amber-500">
				Miscellaneous
			</h2>
			<motion.ul
				initial={"hidden"}
				whileInView={"show"}
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.05, ease: "linear" }}
				className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2"
			>
				<SkillItem
					icon={SiAbletonlive}
					title={"Music Production"}
					className={"bg-slate-500"}
					rating={4}
					key={"music"}
				/>
				<SkillItem
					icon={SiProtools}
					title={"Audio Production"}
					className={"bg-red-500"}
					rating={4}
					key={"music"}
				/>
				<SkillItem
					icon={SiAdobepremierepro}
					title={"Video Editing"}
					className={"bg-purple-500"}
					rating={4}
					key={"video"}
				/>
				<SkillItem
					icon={SiAdobephotoshop}
					title={"Graphic Design"}
					className={"bg-blue-500"}
					rating={4}
					key={"design"}
				/>
			</motion.ul>
		</div>
	);
};

export default Skills;
