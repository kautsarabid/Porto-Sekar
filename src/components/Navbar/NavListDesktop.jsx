import NavigationBar from "./NavigationBar";
import { motion } from "framer-motion";

export default function NavListDesktop({ items }) {
	return (
		<motion.nav className="fixed top-0 left-0 w-full bg-primary py-3 px-4 z-50 shadow-md">
			<div className="max-w-7xl flex items-center justify-between ">
				<h1 className="font-display font-extrabold text-3xl text-tertiary">
					<a href="#">MSH</a>
				</h1>

				<div className="hidden lg:flex gap-5 justify-between">
					<NavigationBar items={items} />
				</div>
			</div>
		</motion.nav>
	);
}
