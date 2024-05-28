import Title from "../components/Title";
import { useState } from "react";

import Trilogi from "../assets/work-experience/trilogi.png";
import Kanisa from "../assets/work-experience/kanisa.jpg";
import Karyanata from "../assets/work-experience/karyanata.jpg";
import Kkp from "../assets/kkp.jpg";
import Modal from "../components/Modal";
import Card from "../components/Card";

export default function WorkExperience({ names }) {
	const [showModal, setShowModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	const handleItemClick = (item) => {
		setSelectedItem(item);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setSelectedItem(null);
	};

	const items = [
		{
			image: Trilogi,
			title: "Data Entry at Trilogi.Id",
			desc: "Experienced in accurate and efficient data management and processing.",
			fulldesc: `Experienced in accurate and efficient data management and processing. With expertise in the use of various data processing software such as Microsoft Excel, Google Sheets and Majoo. Ability to enter and verify data quickly and thoroughly.
			High attention to detail and ability to work to tight deadlines. Several successful projects have improved data entry efficiency and ensured data integrity is maintained. Dedicated to supporting organizations in effective and reliable data management..`,
		},
		{
			image: Kkp,
			title: "Intern at Puslabfor POLDA Sumut",
			desc: "Have a strong interest in criminal investigation and forensic analysis.",
			fulldesc:
				"Have a strong interest in criminal investigation and forensic analysis. Possess a deep understanding of forensic investigative techniques, evidence analysis procedures, and the use of current technology in data collection and interpretation. Experience in research and laboratory practicum has expanded my knowledge of forensic laboratory operations, including the use of equipment and analysis methodologies such as the RapidHIT 200 Instrument for DNA examination. My academic projects range from processing evidence from crime scenes to forensic identification, which provides deep insight into the complexities and challenges within this field. I am committed to carrying out every task with high integrity, meticulous rigor, and relentless dedication. My goal is to utilize my knowledge and skills to support Polda's mission in maintaining security and justice for the community.",
		},
		{
			image: Karyanata,
			title: "cashier and admin at Caryanata Cake and Dessert",
			desc: "With experience as a cashier and admin in the F&B industry, I have been trained in handling financial transactions and daily administration",
			fulldesc:
				"With experience as a cashier and admin in the F&B industry, I have been trained in handling financial transactions and daily administration. I have expertise in serving customers in a friendly and efficient manner, as well as maintaining accurate financial records.I am familiar with cashier software such as Majoo and social media applications (Instagram, Tiktok, and Whatsapp) and able to adapt quickly to changes in the work environment. I am committed to providing the best service to customers and supporting the smooth operation of the restaurant or cafe.",
		},
		{
			image: Kanisa,
			title: "staff sales and marketing at Laluna.co",
			desc: "A Sales and Marketing Event professional with experience designing and executing successful events.",
			fulldesc:
				"A Sales and Marketing Event professional with experience designing and executing successful events. Expertise includes creative marketing strategies and strong customer relationship management. With a background in event management and digital marketing, has helped various brands increase their visibility and sales through memorable events. Portfolio includes product launches, trade shows, and festivals that attract thousands of attendees. Commitment to creating memorable events that make a real impact on your business. Let's work together to create amazing events and increase sales.",
		},
	];
	return (
		<>
			<section id="we">
				<Title
					names={names}
					title={"Work Experience"}
					classCSS={"stroke-text"}
				/>

				<Card.Container>
					{items.map((item, index) => (
						<Card
							items={items}
							onClick={() => handleItemClick(item)}
							key={index}
						>
							<Card.Image src={item.image} alt={item.title} />

							<Card.Body title={item.title} desc={item.desc} />
						</Card>
					))}
				</Card.Container>
			</section>

			{selectedItem && (
				<Modal
					show={showModal}
					onClose={handleCloseModal}
					title={selectedItem.title}
					desc={selectedItem.desc}
					fulldesc={selectedItem.fulldesc}
					image={selectedItem.image}
				/>
			)}
		</>
	);
}
