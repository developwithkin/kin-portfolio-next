import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { MdClose } from "react-icons/md";

import {
	motion,
	useSpring,
	useMotionTemplate,
	useTransform,
} from "framer-motion";

import headshot from "../public/headshot.jpg";
import Divider from "../components/UI/Divider";
import TextHighlight from "../components/UI/TextHighlight";
import AboutMe from "../components/Resume/AboutMe";
import Education from "../components/Resume/Education/Education";
import OrganizationExperience from "../components/Resume/OrganizationExperience/OrganizationExperience";
import WorkExperience from "../components/Resume/WorkExperience/WorkExperience";
import Skills from "../components/Resume/Skill/Skills";

const ResumePage = () => {
	const router = useRouter();
	const [hovered, setHovered] = useState(false);
	const spring = useSpring(0);
	const transform = useMotionTemplate`translateY(${spring}px)`;
	const opacity = useTransform(spring, [0, 10], [1, 0.7]);

	useEffect(() => {
		if (hovered) {
			spring.set(10);
		} else {
			spring.set(0);
		}
	}, [hovered]);

	return (
		<>
			<Head>
				<title>Reinhard Kevin - Resume</title>
			</Head>
			<motion.button
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				onClick={() => router.push("/")}
				className="text-xl sm:mx-auto m-3 h-11 w-11 rounded-full bg-amber-100 dark:bg-dark-lightgray hover:scale-110 transition-all duration-300 flex justify-center items-center sm:mt-10"
			>
				<MdClose />
			</motion.button>
			<motion.div
				className="flex flex-col w-full max-w-screen-lg mx-auto p-3"
				style={{ transform, opacity }}
			>
				<div className="flex flex-col sm:flex-row mt-4 sm:mt-10 items-center">
					<Image
						src={headshot}
						alt="profile picture"
						width="150px"
						height="150px"
						className="rounded-full"
					/>
					<div className="flex flex-col items-center sm:items-start sm:ml-8 hover:-skew-y-2 hover:tracking-wider cursor-pointer transition-all">
						<h1 className="font-moranga text-center sm:text-inherit text-2xl sm:text-3xl mt-4 sm:mt-0">
							Reinhard Kevin Mustakim
						</h1>
						<h2>Fullstack Developer</h2>
					</div>
				</div>

				<Divider className={"mx-2 mt-4"} />

				{/* About Me Section */}
				<AboutMe />

				{/* Education Section */}
				<Education />

				{/* Organizational Experience Section */}
				<OrganizationExperience />

				{/* Work Experience Section */}
				<WorkExperience />

				{/* Skills Section */}
				<Skills />
			</motion.div>

			{/* Footer */}
			<div className="flex justify-center items-center p-4">
				<p className="text-sm font-medium">
					<TextHighlight>Reinhard Kevin</TextHighlight> © 2022
				</p>
			</div>
		</>
	);
};

export default ResumePage;
