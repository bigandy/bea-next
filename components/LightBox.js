const LightBox = ({
	currentImage,
	images,
	handleClose,
	handleNext,
	handlePrevious,
}) => {
	return (
		<div>
			<img src={images[currentImage].bigImage} alt="" />
			<button onClick={handleNext} className="next button">
				Next
			</button>
			<button onClick={handlePrevious} className="previous button">
				Previous
			</button>

			<button onClick={handleClose} className="close button">
				Close
			</button>
			<style jsx>
				{`
					div {
						z-index: 9999;
						position: fixed;
						top: 0;
						left: 0;
						height: 100%;
						background: black;
						width: 100%;
						display: grid;
					}

					.button {
						position: absolute;
						border: 0;
					}

					.close,
					.next {
						right: 2em;
					}

					.close {
						top: 2em;
					}

					.previous {
						left: 2em;
					}

					.next,
					.previous {
						top: 50%;
					}

					img {
						margin: auto;
					}
				`}
			</style>
		</div>
	);
};

export default LightBox;
