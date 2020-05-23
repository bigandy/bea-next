import { Fragment } from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

const Page = ({ children, subPage = false, aboutPage = false }) => {
	return (
		<Fragment>
			<Head>
				<link href="/static/css/style.css" rel="stylesheet" />
			</Head>
			<div id="page">
				<Header subPage={subPage} aboutPage={aboutPage} />

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
