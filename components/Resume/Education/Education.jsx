import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import TextHighlight from "../../UI/TextHighlight";
import EducationItem from "./EducationItem";

import kalbisLogo from "../../../public/kalbis-vertical.png";
import mahanaimLogo from "../../../public/mahanaim.png";

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
					school={"SMA Mahanaim"}
					course={"Science Course"}
					logo={mahanaimLogo}
					year={"2016-2019"}
				/>
				<EducationItem
					school={"Kalbis Institute"}
					course={"Computer Science - Mobile Computing"}
					year={"2019-2023 (present)"}
					logo={kalbisLogo}
					grade={"3.97"}
				/>
			</motion.div>
		</div>
	);
};

export default Education;
