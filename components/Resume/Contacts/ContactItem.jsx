import React from "react";

const ContactItem = ({ icon: Icon, title, value, className }) => {
	return (
		<li>
			<div className="flex items-center gap-4">
				<div className={`flex items-center justify-center aspect-square h-12 text-white ${className}`}>
					<Icon />
				</div>
				<div>
					<h2 className="grid font-semibold text-lg underline decoration-2 decoration-amber-500">
						{title}
					</h2>
					<p>{value}</p>
				</div>
			</div>
		</li>
	);
};

export default ContactItem;
