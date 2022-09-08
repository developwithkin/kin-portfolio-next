import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import TextHighlight from "../../UI/TextHighlight";
import EducationItem from "./EducationItem";

const Education = () => {
	return (
		<div id="education" className="mt-8">
			<SectionTitle href="#education">Education</SectionTitle>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 educations mt-2">
				<EducationItem 
          school={"SMA Mahanaim"}
          course={"Science Course"}
          year={"2016-2019"}
        />
				<EducationItem 
          school={"Kalbis Institute"}
          course={"Computer Science - Mobile Computing"}
          year={"2019-2023 (present)"}
        />
			</div>
		</div>
	);
};

export default Education;
