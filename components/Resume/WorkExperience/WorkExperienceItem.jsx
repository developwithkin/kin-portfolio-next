import React from "react";

const WorkExperienceItem = ({work}) => {
	return (
		<div className="mt-4">
			<div className="flex justify-between flex-col sm:flex-row">
				<div>
					<h3 className="font-semibold text-lg underline decoration-2 decoration-amber-500">
						{work.role}
					</h3>
					<p className="font-medium">{work.office}</p>
					<p>{work.status}</p>
				</div>
				<p className="font-medium text-sm opacity-70">{work.period}</p>
			</div>

			<ul className="list-disc list-inside">
        {work.responsibility.map((responsibility, idx) => (
          <li key={idx}>{responsibility}</li>
        ))}
			</ul>
		</div>
	);
};

export default WorkExperienceItem;
