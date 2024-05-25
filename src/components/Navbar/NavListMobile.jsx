import NavigationBar from "./NavigationBar";
import { motion } from "framer-motion";
import NavHamburgerButton from "./NavHamburgerButton";

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 246px 41px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(25px at 260px 41px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
};

export default function NavListMobile({ items, isOpen, onClick }) {
	return (
		<motion.nav
			type="mobile"
			initial={false}
			animate={isOpen ? "open" : "closed"}
			className="fixed top-0 left-0 w-full bg-primary py-6 px-4 z-50 shadow-md"
		>
			<div className="max-w-7xl flex items-center justify-between ">
				<h1 className="font-display font-extrabold text-3xl text-tertiary">
					MSH
				</h1>

				<NavHamburgerButton onClick={onClick} isOpen={isOpen} />

				<motion.div
					className="absolute top-0 right-0 bottom-0 w-[300px] h-screen lg:hidden bg-secondary"
					variants={sidebar}
				/>

				<motion.div
					variants={variants}
					className={
						isOpen
							? "flex flex-col items-center justify-center lg:hidden absolute top-0 p-[25px] right-0 w-[300px] h-screen"
							: "hidden"
					}
				>
					<NavigationBar items={items} />
				</motion.div>
			</div>
		</motion.nav>
	);
}
