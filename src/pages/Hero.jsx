<div className="">
	<div className="text-center flex flex-col justify-center gap-3 h-screen relative">
		{names.map((_, index) => (
			<h2
				key={index}
				className={`font-display font-extrabold text-4xl  ${
					index % 2 === 0 ? "text-secondary" : "stroke-text text-transparent"
				} ${index === 0 || index === 5 ? "z-10" : ""}`}
			>
				Maghfira <span className="z-10">Sekar</span> Hilmawita
			</h2>
		))}

		<div className="bottom-36 right-10 z-10  bg-primary text-center px-8 py-3">
			<p className="text-tertiary text-start text-lg mb-1">
				<p>Human Resources</p>
				<p>Administration</p>
			</p>
			<button className=" px-4 py-2 rounded-xl bg-secondary text-primary font-bold font-primary">
				Download CV
			</button>
		</div>
	</div>
	{/* 
						<div className="absolute bottom-36 right-6 rounded-xl overflow-hidden z-0 shadow-sm">
							<img
								src={Image}
								alt=""
								width={250}
								// height={250}
								className="block brightness-75"
							/>
						</div> */}
</div>;
