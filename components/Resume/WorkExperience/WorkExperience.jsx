import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import WorkExperienceItem from "./WorkExperienceItem";

const WORK_EXPERIENCE = [
  {
    role: "Creative Designer & Editor",
    office: "Marketing Division @ Kalbis Institute, Jakarta",
    status: "Part-time worker",
    period: "Apr 2019 - Mar 2020",
    responsibility: [
      "Make design for daily instagram content of @kalbisinstitute",
      "Make design for digital advertisements of Kalbis Instute",
      "Edit videos for advertisement or campaign purposes"
    ]
  },
  {
    role: "Fullstack Developer",
    office: "PT Digital Solusi Pratama, Tangerang",
    status: "Internship",
    period: "Jun 2022 - Sep 2022",
    responsibility: [
      "Design and develop web application for internal use",
      "Develop fullstack application of ticketing system with Next.js and Express.js",
      "Deploy the application to production server",
    ]
  }
]

const WorkExperience = () => {
	return (
		<div id="work" className="mt-8">
			<SectionTitle href={"#work"}>Work Experience</SectionTitle>

			<div>
        {WORK_EXPERIENCE.map((work, idx) => (
          <WorkExperienceItem key={idx} work={work} />
        ))}
			</div>
		</div>
	);
};

export default WorkExperience;
