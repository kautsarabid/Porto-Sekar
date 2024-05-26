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
							<h1 className="font-excalibur text-3xl text-secondary uppercase tracking-widest title relative">
								Maghfirah Sekar Hilmawita
							</h1>
							<p className="text-tertiary opacity-85 text-base capitalize">
								Human Resources, Admin, research and development
							</p>
						</div>
						<button className="px-4 py-2 rounded-xl bg-secondary text-primary font-bold font-primary shadow-md hover:bg-tertiary hover:px-10 transition-all duration-300">
							Download CV
						</button>
					</div>
				</section>

				<section>
					<Title names={names} title={"About"} />

					<div className="p-4">
						<p>
							Bachelor's degree in Biology with communication, administrative
							and research skills gained through work and organizational
							experience. Over the course of my career, I have exceeded sales
							performance goals and successfully built strong client
							relationships through negotiation, interpersonal and communication
							skills.
						</p>
					</div>

					<div>
						<img src={Image} alt="poto sekar" />
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
