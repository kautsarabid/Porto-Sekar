import NavBody from "./components/Navbar/NavBody";
import Image from "./assets/sekar-porto.jpg";
import Title from "./components/Title";
import Contact from "./pages/Contact";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Certificate from "./pages/Certificate";
import WorkExperience from "./pages/WorkExperience";

import About from "./pages/About";
import Home from "./pages/Hero";
export default function App() {
	const names = Array.from({ length: 6 }, (_, index) => index + 1);
	return (
		<>
			<header>
				<NavBody />
			</header>

			<main>
				<Home />
				<About names={names} />

				<Skill names={names} />
				<WorkExperience names={names} />
				<Project names={names} />
				<Certificate names={names} />
				<Contact names={names} />
			</main>
		</>
	);
}
