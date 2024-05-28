import Title from "../components/Title";

import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const items = [
	{
		image: <RiInstagramFill />,
		url: "https://www.instagram.com/sekarhilmakantoen/",
	},
	{
		image: <RiLinkedinBoxFill />,
		url: "https://www.linkedin.com/in/maghfirah-hilmawita?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
	},
	{
		image: <MdEmail />,
		url: "mailto:sekar.hilma20@gmail.com",
	},
];
export default function Contact({ names }) {
	return (
		<>
			<section className="bg-primary" id="contact">
				<Title names={names} title={"Contact"} classCSS={"stroke-text-odd"} />
				<div className="flex items-center justify-center gap-5 ">
					{items.map((item, index) => (
						<a
							key={index}
							target="_blank"
							href={item.url}
							rel="noopener noreferrer"
							className="text-6xl text-tertiary hover:text-secondary transition duration-500"
						>
							{item.image}
						</a>
					))}
				</div>
			</section>
		</>
	);
}
