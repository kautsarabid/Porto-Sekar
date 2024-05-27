export default function Title({ names, title, classCSS }) {
	return (
		<>
			<div className="w-full overflow-hidden pt-4 mt-10">
				<h1
					className={`${classCSS} text-transparent text-7xl my-3 text-nowrap font-excalibur lg:text-9xl`}
				>
					<ul className="flex gap-4 justify-center">
						{names.map((_, index) => (
							<li key={index}>{title}</li>
						))}
					</ul>
				</h1>
			</div>
		</>
	);
}
