export default function Title({ names, title }) {
	return (
		<>
			<div className="w-full overflow-hidden">
				<h1 className="stroke-text text-transparent text-7xl my-3 text-nowrap">
					<ul className="flex gap-4 justify-center">
						{names.map((_, index) => (
							<li>{title}</li>
						))}
					</ul>
				</h1>
			</div>
		</>
	);
}
