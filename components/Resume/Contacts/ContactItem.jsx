import React from "react";

const ContactItem = ({ icon: Icon, title, value, className, link }) => {
	return (
		<li>
			<div className="flex items-center gap-4 group">
				<div className={`flex items-center justify-center aspect-square h-12 text-white ${className}`}>
					<Icon />
				</div>
				<div>
					<h2 className="grid font-semibold text-lg underline decoration-2 decoration-amber-500">
						{title}
					</h2>
					<a href={link} className="after:content-[''] after:w-full group-hover:after:scale-x-100 after:scale-x-0 after:origin-left after:duration-300 after:transition-all after:h-2 after:absolute after:left-0 after:bottom-1 after:dark:bg-amber-700 after:bg-amber-200 after:-z-10 relative">{value}</a>
				</div>
			</div>
		</li>
	);
};

export default ContactItem;
