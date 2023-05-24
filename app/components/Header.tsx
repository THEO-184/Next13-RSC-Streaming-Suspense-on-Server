import Link from "next/link";
import React from "react";

const Links = [
	{
		name: "About",
		link: "/about",
	},
	{
		name: "Our Team",
		link: "/about/team",
	},
	{
		name: "Code",
		link: "/code/repos",
	},
];

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="logo">
					<Link href="/">Next 13 App</Link>
				</div>
				<div className="links">
					{Links.map((link) => (
						<Link key={link.name} href={link.link}>
							{link.name}
						</Link>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
