import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

export const Badge = ({ children, className }) => {
	return (
		<span
			className={clsx(
				"inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
				"bg-gray-200 text-gray-800", // Default styles
				className // Custom styles passed as props
			)}
		>
			{children}
		</span>
	);
};

Badge.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

Badge.defaultProps = {
	className: "",
};

export default Badge;
