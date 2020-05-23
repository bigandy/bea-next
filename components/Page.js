import { Fragment } from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

const Page = ({ children }) => {
	return (
		<Fragment>
			<Head>
				<link href="/static/css/style.css" rel="stylesheet" />

				<meta charset="utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>
				<meta name="description" content="Description" />
				<meta name="keywords" content="Keywords" />

				<link rel="manifest" href="/static/manifest.json" />
				<meta name="theme-color" content="#317EFB" />
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
