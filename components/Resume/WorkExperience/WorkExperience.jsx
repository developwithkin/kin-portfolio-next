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
      "Creates a responsive website, Cross-browser, Mobile friendly, Clean Code, Reusable & Maintainable.",
      "Content edit, test, code debug, web pages redesign.",
      "Create a UI UX Design to create an interactive website.",
      "Optimize loading speed website.",
      "Make design for instagram content of @novatech_life",
      "Make design for digital advertisements",
      "Edit videos for advertisement or campaign purposes"
    ]
  },
  {
    role: "Web Developer & Designer",
    office: "PT. vOffice Indonesia",
    status: "Jakarta, Indonesia",
    period: "Okt 2022 - Apr 2023",
    responsibility: [
      "Develop, test, and maintain responsive websites using HTML, CSS, JavaScript, and other relevant programming languages.",
      "Optimize website performance, including speed, scalability, and security.",
      "Content edit, test, code debug, web pages redesign.",
      "Debug and troubleshoot technical issues across different browsers and devices.,"
    ]
  },
  {
    role: "IT Staff, Web Developer & Designer",
    office: "Grha De Arteri Group",
    status: "Semarang, Indonesia",
    period: "Okt 2018 - Okt 2022",
    responsibility: [
      "Designing and developing Information System using laravel framework for grha de arteri group's website.",
      "Build a store on the marketplace (Tokopedia).",
      "Designing Instagram Content.",
      "Install and conﬁgure antivirus for computer security.",
      "Creating or assembling networks and data cables.",
      "Ensure that supporting systems such as printers and scanners can operate.",
      "Perform data backup server.",
      "Update the operating system or applications regularly.",
      "Ensure that user data on the computer cannot be read or taken by unauthorized persons.",
      "Make design for instagram content of @grhadearteri",
      "Make design for digital advertisements",
      "Edit videos for advertisement or campaign purposes"
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
