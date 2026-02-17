import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import WorkExperienceItem from "./WorkExperienceItem";

const WORK_EXPERIENCE = [
  {
    role: "Web Developer & Designer",
    office: "PT. Novatech Integra Solusindo",
    status: "Jakarta, Indonesia",
    period: "Jun 2023 - Now",
    responsibility: [
      "Developed and maintained corporate websites using responsive and mobile-ﬁrst approaches.",
      "Improved website performance by optimizing assets, implementing caching strategies, and refactoring legacy code, resulting in a 30–40% reduction in load time.",
      "Collaborated with marketing teams to build high-converting landing pages for digital campaigns.",
      "Implemented technical SEO strategies including meta tags optimization, schema markup, and structured data.",
      "Designed UI/UX improvements to enhance user engagement and streamline user flow.",
      "Managed WordPress CMS including deployment, plugin updates, security patches,and routine maintenance.",
      "Proposed and implemented performance improvement initiatives aligned with business objectives.",
      "Supported digital advertising initiatives through landing page optimization (CRO).",
      "Designed social media assets, product catalogs, and promotional brochures to support branding initiatives."
    ]
  },
  {
    role: "Web Developer & Designer",
    office: "PT. vOffice Indonesia",
    status: "Jakarta, Indonesia",
    period: "Okt 2022 - Apr 2023",
    responsibility: [
      "Developed and optimized landing pages for digital marketing campaigns with a focus on performance and conversion rate.",
      "Built new features and prototypes for internal web applications.",
      "Applied clean code principles and modular architecture to improve maintainability.",
      "Conducted debugging and performance optimization to enhance system stability.",
      "Integrated Google Analytics and event tracking to support campaign performance analysis.",
      "Contributed to scalable and user-friendly web application development."
    ]
  },
  {
    role: "IT Staff, Web Developer & Designer",
    office: "Grha De Arteri Group",
    status: "Semarang, Indonesia",
    period: "Okt 2018 - Okt 2022",
    responsibility: [
      "Developed internal information systems using Laravel and MySQL to support operational processes.",
      "Managed and optimized Tokopedia marketplace listings to improve product visibility and sales performance.",
      "Performed server maintenance, routine backups, and system security monitoring.",
      "Designed digital marketing materials to support promotional strategies.",
      "Improved IT infrastructure efﬁciency through regular system optimization and monitoring.",
    ]
  },
  {
    role: "IT Staff & Designer",
    office: "Topeng Wedding and Event Organizer",
    status: "Semarang, Indonesia",
    period: "Sep 2015 - Sep 2018",
    responsibility: [
      "Edit event book rundown.",
      "Prepare and calculate event needs.",
      "Design VIP table names at weddings, banners, business cards, posters, ﬂayers, social media promotion,etc",
      "Check and ensure that all computers used by the user can be used.",
      "Ensure that supporting systems such as printers and scanners can operate."
    ]
  }
]

const WorkExperience = () => {
	return (
		<div id="work" className="mt-8">
			<SectionTitle href={"#work"}>Professional Experience</SectionTitle>

			<div>
        {WORK_EXPERIENCE.map((work, idx) => (
          <WorkExperienceItem key={idx} work={work} />
        ))}
			</div>
		</div>
	);
};

export default WorkExperience;
