import Page from "components/Page";
import Gallery from "components/Gallery";

const images = [
	{
		bigImage: "/static/images/2015/09/BK-101-linocutbee.jpg",
		smallImage: "/static/images/2015/09/BK-101-linocutbee-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-103-linocutbee.jpg",
		smallImage: "/static/images/2015/09/BK-103-linocutbee-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-104-linocutbees.jpg",
		smallImage: "/static/images/2015/09/BK-104-linocutbees-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-105-linocut-hugmonsters.jpg",
		smallImage: "/static/images/2015/09/BK-105-linocut-hugmonsters-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-106-linocut-hug.jpg",
		smallImage: "/static/images/2015/09/BK-106-linocut-hug-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-108-linocut-hug.jpg",
		smallImage: "/static/images/2015/09/BK-108-linocut-hug-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-110-linocut-hugstripy.jpg",
		smallImage: "/static/images/2015/09/BK-110-linocut-hugstripy-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-111-linocut-hugs.jpg",
		smallImage: "/static/images/2015/09/BK-111-linocut-hugs-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-112-linocut-hugtext.jpg",
		smallImage: "/static/images/2015/09/BK-112-linocut-hugtext-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-115-linocut-hugstockm.jpg",
		smallImage: "/static/images/2015/09/BK-115-linocut-hugstockm-125x125.jpg",
	},
];

export default () => {
	return (
		<Page subPage>
			<h2 className="entry-title">linocut</h2>

			<Gallery images={images} />
		</Page>
	);
};
