import Link from "next/link";

import Page from "../../components/Page";

export default () => {
	const title = "yard and meter 2013";
	return (
		<Page title={title}>
			<h2 className="entry-title">{title}</h2>

			<div className="entry-content">
				<p>
					to view the the book of our collaboration (in pdf format), please
					click on:
				</p>
				<p>
					<a
						href="/static/images/2015/10/Yard-and-Metre-2013-.pdf"
						target="_blank"
						rel="noopener"
					>
						Yard and Metre 2013
					</a>
				</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
				<p>&nbsp;</p>
			</div>
		</Page>
	);
};
