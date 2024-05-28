import Title from "../components/Title";
import Image from "../assets/sekar-porto.jpg";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function About({ names }) {
	const imageVariants = {
		offscreen: {
			opacity: 0,
			y: -100,
		},
		onscreen: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				duration: 0.8,
			},
		},
	};

	const textVariants = {
		offscreen: {
			opacity: 0,
			x: -100,
		},
		onscreen: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				duration: 0.8,
			},
		},
	};
	return (
		<>
			<section id="about">
				<Title names={names} title={"About"} classCSS={"stroke-text"} />
				<div className="lg:flex justify-center">
					<div className="p-4 lg:basis-1/2">
						<motion.p
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ margin: "-150px" }}
							variants={textVariants}
							className="relative"
						>
							Bachelor's degree in Biology with communication, administrative
							and research skills gained through work and organizational
							experience. Over the course of my career, I have exceeded sales
							performance goals and successfully built strong client
							relationships through negotiation, interpersonal and communication
							skills.
							{/* <motion.span className="after:block after:absolute after:-inset-1 w-full after:bg-primary"></motion.span> */}
						</motion.p>
					</div>

					<div className="relative h-[550px] overflow-hidden lg:basis-1/2">
						<motion.img
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ margin: "-150px" }}
							variants={imageVariants}
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
