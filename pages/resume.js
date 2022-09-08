import React from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";

import headshot from "../public/headshot.jpg";
import Divider from "../components/UI/Divider";
import TextHighlight from "../components/UI/TextHighlight";
import AboutMe from "../components/Resume/AboutMe";
import Education from "../components/Resume/Education/Education";
import OrganizationExperience from "../components/Resume/OrganizationExperience/OrganizationExperience";
import WorkExperience from "../components/Resume/WorkExperience/WorkExperience";

const ResumePage = () => {
	return (
		<>
			<div className="flex flex-col w-full max-w-screen-lg mx-auto p-3">
				<button className="text-xl sm:self-center h-11 w-11 rounded-full bg-amber-100 flex justify-center items-center sm:mt-10">
					<MdClose />
				</button>

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
			</div>

			{/* Footer */}
			<div className="flex justify-center items-center p-4">
				<p className="text-sm font-medium">Reinhard Kevin © 2022</p>
			</div>
		</>
	);
};

export default ResumePage;
