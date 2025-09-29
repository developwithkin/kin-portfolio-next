import React from "react";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { IoLinkOutline } from "react-icons/io5"
import SectionTitle from "../UI/SectionTitle";

import TextHighlight from "../UI/TextHighlight";

const AboutMe = () => {
	return (
		<div id="about" className="mt-8">
			<SectionTitle href="#about">About Me</SectionTitle>
			<p className="text-justify mt-2">
				My name is <span className="font-moranga">Nicodemus Bagus Adi Kusuma Dahni Sualang</span>, or you
				can call me <span className="font-moranga">Nico</span>. I'm a <TextHighlight>Developer</TextHighlight> and <TextHighlight>Designer</TextHighlight>  who loves turning ideas into interactive and creative digital experiences.{" "} I
				focused myself in learning design and web development. The
				main programming language I explore is{" "}
				<TextHighlight>
					<IoLogoJavascript className="text-amber-700" />
					Javascript
				</TextHighlight>
				, and also{" "}
				<TextHighlight>
					<IoLogoReact className="text-sky-600" />
					React
				</TextHighlight>{" "}
				framework (and its common environment). Not only coding and design skills, I also
				do creative stuffs such as video editing, music production.{" "}
				<TextHighlight>I love learning things</TextHighlight>, and always
				willing to learn new things. I am{" "}
				<TextHighlight>enthusiastic,</TextHighlight>{" "}
				<TextHighlight>reliable,</TextHighlight>{" "}
				<TextHighlight>responsible</TextHighlight> and{" "}
				<TextHighlight>hard-working</TextHighlight> person.
			</p>
		</div>
	);
};

export default AboutMe;
