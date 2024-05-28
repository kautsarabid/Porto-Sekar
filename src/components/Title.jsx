import { motion } from "framer-motion";

const liAnimate = {
	offscreen: {
		x: 0,
	},
	onscreen: {
		x: 80,
		transition: {
			duration: 0.8,
		},
	},
};
export default function Title({ names, title, classCSS }) {
	return (
		<>
			<div className="w-full overflow-hidden pt-4 mt-10">
				<motion.h1
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ margin: "-100px", once: true }}
					variants={liAnimate}
					className={`${classCSS} text-transparent text-7xl my-3 text-nowrap font-excalibur lg:text-9xl`}
				>
					<ul className="flex gap-4 justify-center">
						{names.map((_, index) => (
							<motion.li key={index}>{title}</motion.li>
						))}
					</ul>
				</motion.h1>
			</div>
		</>
	);
}
