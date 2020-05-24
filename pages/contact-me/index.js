import Page from "../../components/Page";

export default () => {
	const title = "contact me";
	return (
		<Page title={title}>
			<h2 className="entry-title">{title}</h2>

			<p>
				You can email me{" "}
				<a href="mailto:b@beatrixkovacs.co.uk">b@beatrixkovacs.co.uk</a>
			</p>
		</Page>
	);
};
