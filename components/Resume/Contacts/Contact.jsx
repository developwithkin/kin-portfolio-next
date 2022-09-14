import React from "react";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import SectionTitle from "../../UI/SectionTitle";
import ContactItem from "./ContactItem";

const Contact = () => {
	return (
		<div id="contact" className="mt-8">
			<SectionTitle href={"#contact"}>Contact</SectionTitle>

			<ul className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
				<ContactItem
					icon={SiInstagram}
					title={"Instagram"}
					value={"@reinhaaard13"}
					link={"https://www.instagram.com/reinhaaard13/"}
          className={"bg-pink-500"}
				/>
				<ContactItem
					icon={SiLinkedin}
					title={"LinkedIn"}
					value={"reinhaaard13"}
					link={"https://www.linkedin.com/in/reinhaaard13/"}
          className={"bg-blue-500"}
				/>
				<ContactItem
					icon={SiGmail}
					title={"Email"}
					value={"reinhardkevin.rk@gmail.com"}
					link={"mailto:reinhardkevin.rk@gmail.com"}
          className={"bg-red-500"}
				/>
				<ContactItem
					icon={SiGithub}
					title={"Github"}
					value={"reinhaaard13"}
					link={"https://github.com/reinhaaard13"}
          className={"bg-gray-800"}
				/>
			</ul>
		</div>
	);
};

export default Contact;
