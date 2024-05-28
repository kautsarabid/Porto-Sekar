const NavigationBar = ({ items }) => {
	return (
		<>
			<div className="flex lg:flex-row flex-col text-center">
				{items.map((item, index) => (
					<a
						className={`relative block px-4 py-4 text-primary hover:text-tertiary lg:text-tertiary lg:hover:text-secondary font-base nav-list group`}
						key={index}
						href={item.url}
					>
						{item.label}
						<div className="w-0 h-0.5 mt-0.5 rounded-full bg-tertiary group-hover:w-full transition-width duration-300"></div>
					</a>
				))}
			</div>
		</>
	);
};

export default NavigationBar;
