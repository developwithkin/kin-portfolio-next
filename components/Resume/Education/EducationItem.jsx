import React from "react";

const EducationItem = ({ year, school, course, grade }) => {
	return (
		<div className="educations-item">
			<p>{year}</p>
			<h2 className="font-semibold text-lg">{school}</h2>
			<p className="text-sm">{course}</p>
			{grade && (
				<p className="text-xs text-slate-500">CGPA: {grade}</p>
			)}
		</div>
	);
};

export default EducationItem;
