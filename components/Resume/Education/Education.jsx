import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import TextHighlight from "../../UI/TextHighlight";
import EducationItem from "./EducationItem";

import kalbisLogo from "../../../public/unisbank-logo.png";
import mahanaimLogo from "../../../public/logo-grafika.png";

import { motion } from "framer-motion";

const Education = () => {
	return (
		<div id="education" className="mt-8">
			<SectionTitle href="#education">Education</SectionTitle>

			<motion.div
				initial={"hidden"}
				whileInView={"show"}
				viewport={{ once: true }}
				transition={{ staggerChildren: 0.05, ease: "linear" }}
				className="grid grid-cols-1 sm:grid-cols-2 gap-2 educations mt-2"
			>
				<EducationItem
					school={"SMKN 11 Semarang"}
					course={"Grafika"}
					logo={mahanaimLogo}
					year={"2013-2015"}
				/>
				<EducationItem
					school={"Universitas Stikubank"}
					course={"Bachelor Program of Information System"}
					year={"2018-2022 (present)"}
					logo={kalbisLogo}
					//grade={"3.97"}
				/>
			</motion.div>
		</div>
	);
};

export default Education;
