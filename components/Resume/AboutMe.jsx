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
				My name is <span className="font-moranga">Reinhard Kevin</span>, or you
				can call me <span className="font-moranga">Rei</span>. I am currently an
				undergraduate student majoring in{" "}
				<TextHighlight>Computer Science</TextHighlight> in Kalbis Institute. I
				focused myself in learning web and mobile application development. The
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
				framework (and its common environment). Not only coding skills, I also
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
