import React from "react";

import { IoLinkOutline } from "react-icons/io5";

const SectionTitle = ({ href, children }) => {
	return (
		<a
			href={href}
			className="flex items-baseline relative group w-fit cursor-pointer transition-all"
		>
			<h3 className="font-semibold text-xl group-hover:opacity-100 opacity-30 transition-all translate-y-[2px] mr-1">
				<IoLinkOutline />
			</h3>
			<h3 className="font-moranga text-xl sm:text-2xl group-hover:underline decoration-amber-500">
				{children}
			</h3>
		</a>
	);
};

export default SectionTitle;
