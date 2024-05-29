import { delay, motion } from "framer-motion";

export default function Card(props) {
	const { children, onClick, index } = props;
	const cardVariant = {
		offscreen: {
			y: 100,
			opacity: 0,
		},
		onscreen: (index) => ({
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				delay: index * 0.2,
			},
		}),
	};
	return (
		<>
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				custom={index}
				variants={cardVariant}
				viewport={{ once: true }}
				className="flex flex-col items-start h-full w-full rounded-md overflow-hidden card-shadow cursor-pointer hover:card-shadow-inset bg-white"
				onClick={onClick}
			>
				{children}
			</motion.div>
		</>
	);
}

const Container = (props) => {
	const { children } = props;
	return (
		<div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-4">{children}</div>
	);
};

const Image = (props) => {
	const { src, alt, classCSS } = props;
	return (
		<div className="w-full overflow-hidden h-[150px]">
			<img
				src={src}
				alt={`foto ${alt}`}
				className={`object-cover object-center w-full h-full  ${classCSS}`}
			/>
		</div>
	);
};

const ImageSkill = (props) => {
	const { src, alt, classCSS } = props;
	return (
		<div className="h-[150px]  overflow-hidden flex items-center justify-center mx-auto">
			<img
				src={src}
				alt={`foto ${alt}`}
				className={`h-[120px] w-full block object-cover object-center ${classCSS}`}
			/>
		</div>
	);
};

const Body = (props) => {
	const { title, desc, children } = props;
	return (
		<div className="p-2">
			<h2 className="font-bold capitalize">{title}</h2>
			<p className="text-sm">{desc}</p>
			{children}
		</div>
	);
};

const Date = (props) => {
	const { date } = props;
	return (
		<span className="text-sm text-slate-400 mt-3 text-end block">{date}</span>
	);
};

Card.Container = Container;
Card.Image = Image;
Card.ImageSkill = ImageSkill;
Card.Body = Body;
Card.Date = Date;
