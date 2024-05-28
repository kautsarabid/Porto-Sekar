import Title from "../components/Title";
import Image from "../assets/sekar-porto.jpg";
export default function About({ names }) {
	return (
		<>
			<section>
				<Title names={names} title={"About"} classCSS={"stroke-text"} />
				<div className="lg:flex justify-center">
					<div className="p-4 lg:basis-1/2">
						<p>
							Bachelor's degree in Biology with communication, administrative
							and research skills gained through work and organizational
							experience. Over the course of my career, I have exceeded sales
							performance goals and successfully built strong client
							relationships through negotiation, interpersonal and communication
							skills.
						</p>
					</div>

					<div className="relative h-[550px] overflow-hidden lg:basis-1/2">
						<img
							src={Image}
							alt="poto sekar"
							className="object-cover object-center w-full h-full"
						/>

						<div className="hidden lg:block absolute bottom-10 left-0 right-0 bg-primary p-2 w-[50%] mx-auto rounded-md card-shadow">
							<p className="text-center font-excalibur text-3xl text-tertiary">
								Maghfirah Sekar Hilma
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
