import NavBody from "./components/Navbar/NavBody";
import Image from "./assets/sekar-porto2.jpg";
export default function App() {
	const names = Array.from({ length: 6 }, (_, index) => index + 1);
	return (
		<>
			<header>
				<NavBody />
			</header>

			<main>
				<section className="bg-primary h-screen pt-20 ">
					<div className="flex flex-col justify-center items-center h-full">
						<div className="text-center mb-2">
							<h1 className="font-display font-extrabold text-4xl text-secondary">
								Maghfirah Sekar Hilmawita
							</h1>
							<p className="text-tertiary opacity-85 text-lg capitalize">
								Human Resources, Admin, research and development
							</p>
						</div>
						<button className="px-4 py-2 rounded-xl bg-secondary text-primary font-bold font-primary shadow-md hover:bg-tertiary hover:px-10 transition-all duration-300">
							Download CV
						</button>
					</div>
				</section>

				<section>
					<div className="p-4">
						<h1 className="stroke-text text-transparent text-7xl mb-3">
							About
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Recusandae totam alias corrupti sequi, vitae nulla pariatur culpa
							et eligendi quod dolorem iure, quibusdam commodi atque saepe illum
							sed mollitia esse?. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Recusandae totam alias corrupti sequi, vitae
							nulla pariatur culpa et eligendi quod dolorem iure, quibusdam
							commodi atque saepe illum sed mollitia esse?. Lorem ipsum dolor
							sit amet consectetur adipisicing elit. Recusandae totam alias
							corrupti sequi, vitae nulla pariatur culpa et eligendi quod
							dolorem iure, quibusdam commodi atque saepe illum sed mollitia
							esse?.
						</p>
					</div>

					<div>
						<img src={Image} alt="poto sekar" />
					</div>
				</section>

				<section>
					<h1 className="stroke-text text-transparent text-7xl mb-3">Skill</h1>
					<p className="text-5xl text-center font-black">Mencintai Ekal</p>
				</section>

				<section>
					<h1 className="stroke-text text-transparent text-7xl mb-3">
						Project
					</h1>
				</section>
				<section>
					<h1 className="stroke-text text-transparent text-7xl mb-3">
						Certificate
					</h1>
				</section>
				<section>
					<h1 className="stroke-text text-transparent text-7xl mb-3">
						Contact
					</h1>
				</section>
			</main>
		</>
	);
}
