import React, { useState, useEffect } from "react";
import NavListMobile from "./NavListMobile";
import NavListDesktop from "./NavListDesktop";

import { useCycle } from "framer-motion";

export default function NavBody() {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const listNavItems = [
		{ label: "About", url: "#" },
		{ label: "Skill", url: "#service" },
		{ label: "Project", url: "#facility" },
		{ label: "Certificate", url: "#pricelist" },
		{ label: "Contact", url: "#contact" },
	];

	if (isMobile) {
		return (
			<NavListMobile
				items={listNavItems}
				isOpen={isOpen}
				onClick={() => toggleOpen()}
			/>
		);
	} else {
		return <NavListDesktop items={listNavItems} />;
	}
}
