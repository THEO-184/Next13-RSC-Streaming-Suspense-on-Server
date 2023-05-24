import React from "react";

interface Props extends React.PropsWithChildren {}

const AboutLayout = ({ children }: Props) => {
	return (
		<div>
			<h1>THIS IS THE ABOUT LAYOUT</h1>
			{children}
		</div>
	);
};

export default AboutLayout;
