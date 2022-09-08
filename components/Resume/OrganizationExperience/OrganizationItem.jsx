import React from "react";

import TextHighlight from "../../UI/TextHighlight";

const OrganizationItem = ({ organization: org }) => {
	return (
		<div className="mt-4">
			<div className="flex flex-col sm:flex-row justify-between">
				<div>
					<p className="font-semibold text-lg underline decoration-2 decoration-amber-500">{org.role}</p>
					<p className="font-medium">{org.organization}</p>
					<h4>{org.instance}</h4>
				</div>
				<p className="opacity-70 text-sm font-medium">{org.period}</p>
			</div>

			<ul className="list-disc list-inside">
        { org.responsibility.map((responsibility, idx) => (
          <li key={idx}>{responsibility}</li>
        ))}
			</ul>
		</div>
	);
};

export default OrganizationItem;
