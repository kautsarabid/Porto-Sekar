import { motion } from "framer-motion";
const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: 100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const NavigationBar = ({ items }) => {
	return items.map((item, index) => (
		<motion.a
			variants={variants}
			whileHover={{ scale: 1.1, translateX: 20 }}
			whileTap={{ scale: 0.95 }}
			className="block px-4 py-4 text-white hover:text-gray-300 font-base"
			key={index}
			href={item.url}
		>
			{item.label}
		</motion.a>
	));
};

export default NavigationBar;
