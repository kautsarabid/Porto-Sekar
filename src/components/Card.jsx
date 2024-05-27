export default function Card(props) {
	const { children, onClick } = props;

	return (
		<>
			<div
				className="flex flex-col items-start h-full w-full rounded-md overflow-hidden card-shadow cursor-pointer hover:card-shadow-inset bg-white"
				onClick={onClick}
			>
				{children}
			</div>
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
	const { title, desc } = props;
	return (
		<div className="p-2">
			<h2 className="font-bold capitalize">{title}</h2>
			<p className="text-sm">{desc}</p>
		</div>
	);
};

Card.Container = Container;
Card.Image = Image;
Card.ImageSkill = ImageSkill;
Card.Body = Body;
