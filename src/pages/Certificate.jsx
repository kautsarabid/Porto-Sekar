import Title from "../components/Title";
import Image1 from "../assets/Guest-Lecture.png";
import Image2 from "../assets/Sertifikat-HMB-1.png";
import Modal from "../components/Modal";
import { useState } from "react";

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
			title: "Sertifikat 1",
		},
		{
			image: Image2,
			title: "Sertifikat Himpunan Biologi",
		},
	];
	return (
		<>
			<section>
				<Title names={names} title={"Certificate"} />

				<div className="grid grid-cols-1 gap-2 p-4">
					{items.map((item, index) => (
						<div
							className="flex flex-col items-start justify-center border h-[280px] w-full rounded-md cursor-pointer"
							key={index}
							onClick={() => handleItemClick(item)}
						>
							<div
								className="w-full h-full bg-cover"
								style={{
									backgroundImage: `url(${item.image})`,
									backgroundSize: "",
									backgroundPosition: "top",
								}}
							></div>

							<div className="p-2">
								<h2 className="font-bold capitalize">{item.title}</h2>
								<p>{item.desc}</p>
							</div>
						</div>
					))}
				</div>
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
