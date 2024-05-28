import Title from "../components/Title";
import Image1 from "../assets/Guest-Lecture.png";
import Image2 from "../assets/Sertifikat-HMB-1.png";
import Modal from "../components/Modal";
import { useState } from "react";
import Card from "../components/Card";

export default function Certificate({ names }) {
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
			image: Image1,
			title: "Forensic Seminar Certificate",
		},
		{
			image: Image2,
			title: "Biology Association Certificate",
		},
	];
	return (
		<>
			<section id="certificate">
				<Title names={names} title={"Certificate"} classCSS={"stroke-text"} />

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
