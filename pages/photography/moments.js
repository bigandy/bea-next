import { useState } from "react";
import Link from "next/link";

import Page from "components/Page";
import Gallery from "components/Gallery";

const images = [
	{
		bigImage: "/static/images/2015/09/BK-401-cornwall.jpg",
		smallImage: "/static/images/2015/09/BK-401-cornwall-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-402-Nepal-ABCtrek.jpg",
		smallImage: "/static/images/2015/09/BK-402-Nepal-ABCtrek-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-403-corsica.jpg",
		smallImage: "/static/images/2015/09/BK-403-corsica-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-404-Nepal-ABC-camp.jpg",
		smallImage: "/static/images/2015/09/BK-404-Nepal-ABC-camp-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-405-N-Dampus.jpg",
		smallImage: "/static/images/2015/09/BK-405-N-Dampus-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-406-StCathrinehill.jpg",
		smallImage: "/static/images/2015/09/BK-406-StCathrinehill-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-407-N-Sarangkot-sunrise.jpg",
		smallImage: "/static/images/2015/09/BK-407-N-Sarangkot-sunrise-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-408-Turkey-3.jpg",
		smallImage: "/static/images/2015/09/BK-408-Turkey-3-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-409-Turkey-4.jpg",
		smallImage: "/static/images/2015/09/BK-409-Turkey-4-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-410-Turkey-5.jpg",
		smallImage: "/static/images/2015/09/BK-410-Turkey-5-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-411-Turkey-6.jpg",
		smallImage: "/static/images/2015/09/BK-411-Turkey-6-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-412-Turkey-7.jpg",
		smallImage: "/static/images/2015/09/BK-412-Turkey-7-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-413-Dorset-2.jpg",
		smallImage: "/static/images/2015/09/BK-413-Dorset-2-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-414-N-Lupra.jpg",
		smallImage: "/static/images/2015/09/BK-414-N-Lupra-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-415-beagarden-1.jpg",
		smallImage: "/static/images/2015/09/BK-415-beagarden-1-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-416-Winchester-1.jpg",
		smallImage: "/static/images/2015/09/BK-416-Winchester-1-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-417-Nepal-Jhong.jpg",
		smallImage: "/static/images/2015/09/BK-417-Nepal-Jhong-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-418-Granada-1.jpg",
		smallImage: "/static/images/2015/09/BK-418-Granada-1-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-419-Wnchester-2.jpg",
		smallImage: "/static/images/2015/09/BK-419-Wnchester-2-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-420-Wnchester-3.jpg",
		smallImage: "/static/images/2015/09/BK-420-Wnchester-3-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-421-Jharkot-steps.jpg",
		smallImage: "/static/images/2015/09/BK-421-Jharkot-steps-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-422-Baktipur1.jpg",
		smallImage: "/static/images/2015/09/BK-422-Baktipur1-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-423-Malaga.jpg",
		smallImage: "/static/images/2015/09/BK-423-Malaga-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-424-Annapurna.jpg",
		smallImage: "/static/images/2015/09/BK-424-Annapurna-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-425-Kinga.jpg",
		smallImage: "/static/images/2015/09/BK-425-Kinga-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-426-Granada-2.jpg",
		smallImage: "/static/images/2015/09/BK-426-Granada-2-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-427-Dorset-coast.jpg",
		smallImage: "/static/images/2015/09/BK-427-Dorset-coast-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-428-N-Baktipur.jpg",
		smallImage: "/static/images/2015/09/BK-428-N-Baktipur-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-429-Thorong-La.jpg",
		smallImage: "/static/images/2015/09/BK-429-Thorong-La-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-430-N-Jharkot.jpg",
		smallImage: "/static/images/2015/09/BK-430-N-Jharkot-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-431-Jharkot-roof.jpg",
		smallImage: "/static/images/2015/09/BK-431-Jharkot-roof-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-432-NepalFestival.jpg",
		smallImage: "/static/images/2015/09/BK-432-NepalFestival-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-433-JharkotMonastry.jpg",
		smallImage: "/static/images/2015/09/BK-433-JharkotMonastry-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-434-Chomrong.jpg",
		smallImage: "/static/images/2015/09/BK-434-Chomrong-125x125.jpg",
	},

	{
		bigImage: "/static/images/2015/09/BK-435-Protugal-fishing.jpg",
		smallImage: "/static/images/2015/09/BK-435-Protugal-fishing-125x125.jpg",
	},
];

export default () => {
	const title = "moments";
	return (
		<Page title={title}>
			<h2 className="entry-title">{title}</h2>

			<Gallery images={images} />
		</Page>
	);
};
