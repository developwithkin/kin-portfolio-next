import React from "react";

const EducationItem = ({ year, school, course }) => {
	return (
		<div className="educations-item">
			<p>{year}</p>
			<h2 className="font-semibold text-lg">{school}</h2>
			<p className="text-sm">{course}</p>
		</div>
	);
};

export default EducationItem;
