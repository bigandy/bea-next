import { useState } from "react";

import LightBox from "components/LightBox";

const Gallery = ({ images }) => {
	const imagesCount = images.length;
	const [currentImage, setCurrentImage] = useState(0);
	const [lightboxOpen, setLightBoxOpen] = useState(false);

	const handleNextImage = () => {
		setCurrentImage(currentImage === imagesCount - 1 ? 0 : currentImage + 1);
	};

	const handlePreviousImage = () => {
		setCurrentImage(currentImage === 0 ? imagesCount - 1 : currentImage - 1);
	};

	return (
		<div className="gallery">
			{images &&
				images.map(({ bigImage, smallImage }, index) => {
					const handleImageClick = (e) => {
						e.preventDefault();

						setCurrentImage(index);
						setLightBoxOpen(true);
					};
					return (
						<a
							className="gallery-icon"
							href={bigImage}
							onClick={handleImageClick}
							key={`gallery-icon-${index}`}
						>
							<img
								width="125"
								height="125"
								src={smallImage}
								className="attachment-test-square size-test-square"
								alt=""
								lazyload="true"
							/>
						</a>
					);
				})}
			{lightboxOpen && (
				<LightBox
					currentImage={currentImage}
					handleClose={() => setLightBoxOpen(false)}
					handleNext={handleNextImage}
					handlePrevious={handlePreviousImage}
					images={images}
				/>
			)}
		</div>
	);
};
export default Gallery;
