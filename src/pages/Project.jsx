import Title from "../components/Title";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Kkp from "../assets/kkp.jpg";

import { useState } from "react";
import Modal from "../components/Modal";
import Card from "../components/Card";

export default function Project({ names }) {
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
			title: "Design Poster",
			desc: "Membuat Poster Pencarian Pasien Koas Kedokteran Gigi",
		},
	];
	return (
		<>
			<section className="bg-primary" id="project">
				<Title names={names} title={"Project"} classCSS={"stroke-text-odd"} />

				<Card.Container>
					{items.map((item, index) => (
						<Card
							items={items}
							onClick={() => handleItemClick(item)}
							key={index}
							index={index}
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
