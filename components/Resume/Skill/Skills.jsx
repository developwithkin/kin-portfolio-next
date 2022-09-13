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
} from "react-icons/si";
import StarRating from "../../UI/StarRating";
import SkillItem from "./SkillItem";

const Skills = () => {
	return (
		<div className="mt-8" id="skills">
			<SectionTitle href={"#skills"}>My Skills</SectionTitle>

			<h2 className="mt-4 grid font-semibold text-lg underline decoration-2 decoration-amber-500">
				Programming and Markup Language
			</h2>
			<ul className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
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
			</ul>

			<h2 className="mt-4 grid font-semibold text-lg underline decoration-2 decoration-amber-500">
				Frameworks
			</h2>
			<ul className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
				<SkillItem
					icon={SiReact}
					title={"ReactJS"}
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
					rating={4}
					key={"expressjs"}
				/>
				<SkillItem
					icon={SiNodedotjs}
					title={"NodeJS"}
					className={"bg-emerald-500"}
					rating={4}
					key={"nodejs"}
				/>
				<SkillItem
					icon={SiNextdotjs}
					title={"NextJS"}
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
					className={"bg-purple-500"}
					rating={4}
					key={"redux"}
				/>
			</ul>

			<h2 className="mt-4 grid font-semibold text-lg underline decoration-2 decoration-amber-500">
				CSS Framework
			</h2>
			<ul className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
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
			</ul>

			<h2 className="mt-4 grid font-semibold text-lg underline decoration-2 decoration-amber-500">
				Database
			</h2>
			<ul className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
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
			</ul>
		</div>
	);
};

export default Skills;
