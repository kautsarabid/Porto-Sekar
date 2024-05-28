import { motion } from "framer-motion";
import ImageSekar from "../assets/sekar-nobg.png";
export default function Home() {
	return (
		<>
			<section className="bg-primary h-screen pt-20 overflow-hidden">
				<div className="flex flex-col justify-center items-center h-full relative">
					<div className="text-center mb-2">
						<h1 className="font-excalibur text-[3.9rem] leading-none text-secondary uppercase tracking-widest title lg:text-5xl flex flex-col md:text-9xl lg:text-[9rem] xl:flex-row">
							<motion.span
								initial={{ x: -1000 }}
								animate={{ x: 0 }}
								transition={{ duration: 0.5 }}
								className="xl:absolute xl:top-24 xl:left-10 xl:text-[7rem]"
							>
								Maghfira
							</motion.span>
							<motion.span
								initial={{ x: 1000 }}
								animate={{ x: 0 }}
								transition={{ delay: 0.5, duration: 0.5 }}
								className="xl:text-[7rem] xl:absolute xl:top-[14rem] x:lright-[8rem]"
							>
								Sekar
							</motion.span>
							<motion.span
								initial={{ x: -1000 }}
								animate={{ x: 0 }}
								transition={{ delay: 1, duration: 0.5 }}
								className="xl:text-[7rem] xl:absolute xl:bottom-[4rem] xl:left-10"
							>
								Hilmawita
							</motion.span>
						</h1>

						<motion.img
							src={ImageSekar}
							alt="foto sekar"
							className="absolute bottom-0 left-0 right-0 w-full scale-[2.6] z-10 md:-bottom-[18rem] md:scale-[2.4] xl:scale-[1] xl:-bottom-[65rem] overflow-hidden"
						/>

						<h1 className="font-excalibur text-[3.9rem] leading-none stroke-text-hero text-transparent uppercase tracking-widest title lg:text-5xl flex flex-col z-20 md:text-9xl lg:text-[9rem] xl:z-0 xl:flex-row relative xl:static">
							<motion.span
								initial={{ x: 1000 }}
								animate={{ x: 0 }}
								transition={{ delay: 1.5, duration: 0.5 }}
								className="xl:absolute xl:top-24 xl:right-[1rem] xl:text-[7rem]"
							>
								Maghfira
							</motion.span>
							<motion.span
								initial={{ x: -1000 }}
								animate={{ x: 0 }}
								transition={{ delay: 2, duration: 0.5 }}
								className="xl:text-[7rem] xl:absolute xl:top-[15.5rem] xl:left-[20rem]"
							>
								Sekar
							</motion.span>
							<motion.span
								initial={{ x: 1000 }}
								animate={{ x: 0 }}
								transition={{ delay: 2.5, duration: 0.5 }}
								className="xl:text-[7rem] xl:absolute xl:bottom-[4rem] xl:right-6"
							>
								Hilmawita
							</motion.span>
						</h1>

						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 3, duration: 0.5 }}
							className="bg-primary z-20 relative rounded-md xl:absolute xl:right-0 xl:left-0 xl:bottom-[6rem]"
						>
							<p className="text-tertiary opacity-85 text-base capitalize lg:text-2xl p-2 ">
								Human Resources, Admin, research and development
							</p>
						</motion.div>
					</div>
					<button className="px-8 py-4 rounded-xl bg-secondary text-primary font-bold font-primary shadow-md hover:bg-tertiary hover:px-16 transition-all duration-300 lg:px-16 lg:py-8 lg:hover:px-24 lg:text-3xl z-10 xl:absolute xl:bottom-3 xl:py-5 xl:px-10 xl:text-2xl">
						Download CV
					</button>
				</div>
			</section>
		</>
	);
}
