import React, { useState } from "react";

import { motion } from "framer-motion";
import LoadingText from "../components/UI/LoadingText";

const withTransition = (OriginalComponent) => {
	// eslint-disable-next-line react/display-name
	return () => (
		<>
			<OriginalComponent />
			
		</>
	);
};

export default withTransition;
