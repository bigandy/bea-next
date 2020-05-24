import Page from "components/Page";

export default () => {
	const title = "macrame";
	return (
		<Page title={title}>
			<h2 className="entry-title">{title}</h2>
		</Page>
	);
};
