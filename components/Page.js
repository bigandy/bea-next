import { Fragment } from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

const Page = ({ children, title }) => {
	return (
		<Fragment>
			<Head>
				<link href="/static/css/style.css" rel="stylesheet" />

				<meta charset="utf-8" />

				<meta name="viewport" content="width=device-width" />
				<meta name="description" content="Beatrix Kovacs' personal site" />
				<meta name="author" content="Beatrix Kovacs" />

				<title>{title !== "home" ? `${title} | ` : ""}beatrix kovacs</title>
			</Head>
			<div id="page">
				<Header />

				<div id="main">
					<div id="primary" className="landing-page">
						<div id="content" role="main">
							<section>{children}</section>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</Fragment>
	);
};

export default Page;
