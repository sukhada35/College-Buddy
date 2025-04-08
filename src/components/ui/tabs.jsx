import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

// Tabs Context
const TabsContext = React.createContext();

export const Tabs = ({ children, defaultValue, onValueChange, className }) => {
	const [activeTab, setActiveTab] = useState(defaultValue);

	const handleTabChange = (value) => {
		setActiveTab(value);
		if (onValueChange) {
			onValueChange(value);
		}
	};

	return (
		<TabsContext.Provider value={{ activeTab, handleTabChange }}>
			<div className={clsx("tabs", className)}>{children}</div>
		</TabsContext.Provider>
	);
};

Tabs.propTypes = {
	children: PropTypes.node.isRequired,
	defaultValue: PropTypes.string.isRequired,
	onValueChange: PropTypes.func,
	className: PropTypes.string,
};

Tabs.defaultProps = {
	onValueChange: null,
	className: "",
};

export const TabsList = ({ children, className }) => {
	return (
		<div className={clsx("tabs-list flex border-b", className)}>{children}</div>
	);
};

TabsList.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

TabsList.defaultProps = {
	className: "",
};

export const TabsTrigger = ({ value, children, className }) => {
	const { activeTab, handleTabChange } = React.useContext(TabsContext);

	return (
		<button
			className={clsx(
				"tabs-trigger px-4 py-2 text-sm font-medium focus:outline-none",
				activeTab === value
					? "border-b-2 bg-[#E94057] text-[#FFF]"
					: "text-gray-500",
				className
			)}
			onClick={() => handleTabChange(value)}
		>
			{children}
		</button>
	);
};

TabsTrigger.propTypes = {
	value: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

TabsTrigger.defaultProps = {
	className: "",
};

export const TabsContent = ({ value, children, className }) => {
	const { activeTab } = React.useContext(TabsContext);

	if (activeTab !== value) {
		return null;
	}

	return <div className={clsx("tabs-content p-4", className)}>{children}</div>;
};

TabsContent.propTypes = {
	value: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

TabsContent.defaultProps = {
	className: "",
};
