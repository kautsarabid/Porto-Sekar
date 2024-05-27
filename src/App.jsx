import NavBody from "./components/Navbar/NavBody";
import Image from "./assets/sekar-porto.jpg";
import Title from "./components/Title";
import Contact from "./pages/Contact";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Certificate from "./pages/Certificate";
import WorkExperience from "./pages/WorkExperience";
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
							<h1 className="font-excalibur text-3xl text-secondary uppercase tracking-widest title relative lg:text-5xl">
								Maghfirah Sekar Hilmawita
							</h1>
							<p className="text-tertiary opacity-85 text-base capitalize lg:text-xl">
								Human Resources, Admin, research and development
							</p>
						</div>
						<button className="px-4 py-2 rounded-xl bg-secondary text-primary font-bold font-primary shadow-md hover:bg-tertiary hover:px-10 transition-all duration-300 lg:px-8 lg:py-4 lg:hover:px-16">
							Download CV
						</button>
					</div>
				</section>

				<section>
					<Title names={names} title={"About"} classCSS={"stroke-text"} />
					<div className="lg:flex justify-center">
						<div className="p-4 lg:basis-1/2">
							<p>
								Bachelor's degree in Biology with communication, administrative
								and research skills gained through work and organizational
								experience. Over the course of my career, I have exceeded sales
								performance goals and successfully built strong client
								relationships through negotiation, interpersonal and
								communication skills.
							</p>
						</div>

						<div className="relative h-[550px] overflow-hidden lg:basis-1/2">
							<img
								src={Image}
								alt="poto sekar"
								className="object-cover object-center w-full h-full"
							/>

							<div className="absolute bottom-10 left-0 right-0 bg-primary p-2 w-[50%] mx-auto rounded-md card-shadow">
								<p className="text-center font-excalibur text-3xl text-tertiary">
									Maghfirah Sekar Hilma
								</p>
							</div>
						</div>
					</div>
				</section>

				<Skill names={names} />
				<WorkExperience names={names} />
				<Project names={names} />
				<Certificate names={names} />
				<Contact names={names} />
			</main>
		</>
	);
}
