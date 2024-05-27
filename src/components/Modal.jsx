import { IoCloseCircle } from "react-icons/io5";

export default function Modal({ show, onClose, title, fulldesc, image }) {
	if (!show) return null;

	return (
		<>
			<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
				<div className="bg-white rounded-lg w-[85%]  p-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 md:h-[85%] md:w-[65%]">
					<div className="flex justify-between items-center border-b pb-2 mb-4">
						<h2 className="text-xl font-bold capitalize">{title}</h2>
						<button
							onClick={onClose}
							className="text-gray-600 hover:text-gray-900"
						>
							<IoCloseCircle className="h-12 w-12" />
						</button>
					</div>
					<div>
						<img
							src={image}
							alt={title}
							className="w-full h-full object-cover object-center rounded-md"
						/>
						<div className="pt-3">
							<div
								dangerouslySetInnerHTML={{ __html: fulldesc }}
								className="text-sm"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
