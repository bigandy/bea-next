import Page from "../components/Page";

export default () => {
	const title = "home";
	return (
		<Page title={title}>
			<h2 className="entry-title">{title}</h2>

			<p>
				‘by creative thinking man acquire knowledge, wisdom and a sense of
				unlimited strength, which unbinds him from the limitations of convention
				and dogma’ <em>Semjase 1975</em>
			</p>
		</Page>
	);
};
