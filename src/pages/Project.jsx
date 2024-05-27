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
		{
			image: Kkp,
			title: "Intern di Puslabfor POLDA Sumut",
			desc: "Mempelajari teknik-teknik forensik",
			fulldesc:
				"Mempelajari teknik-teknik forensik: saya mempelajari beberapa teknik forensik seperti analisis sidik jari, pemeriksaan DNA, pemeriksaan toksikologi, bercak darah dan sperma.Berkontribusi dalam penyelidikan kriminal: saya berperan dalam membantu menyelesaikan kasus kriminal, seperti membantu mengidentifikasi pelaku sesuai dengan bukti yang diserahkan secara ilmiah.Mengembangkan kemampuan problem-solving dan analisis: selama melakukan kegiatan magang di pusat laboratorium forensik membantu saya mengasah kemampuan memecahkan masalah dan menganalisis informasi secara kritis.Meningkatkan keterampilan komunikasi dan teamwork: saya mendapatkan pengalaman dalam bekerja sama dengan tim forensik dan berkomunikasi dengan penegak hukum.Menemukan passion di bidang forensik: saya memiliki ketertarikan di bidang forensik dan keinginan untuk belajar lebih mengenai ilmu forensik.",
		},
		{
			image: Image1,
			title: "Project 3",
			desc: "lorem",
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
