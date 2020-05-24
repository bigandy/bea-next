import Page from "components/Page";
import Gallery from "components/Gallery";

const images = [
	{
		bigImage: "/static/images/2012/03/BK-101-black-stonew.jpg",
		smallImage: "/static/images/2012/03/BK-101-black-stonew-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-102-black-stonew.jpg",
		smallImage: "/static/images/2012/03/BK-102-black-stonew-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-103-fjord-blue-stonew.jpg",
		smallImage: "/static/images/2012/03/BK-103-fjord-blue-stonew-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-104-black-and-blue-stonew.jpg",
		smallImage:
			"/static/images/2012/03/BK-104-black-and-blue-stonew-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-105-black-and-blue2-stonew.jpg",
		smallImage:
			"/static/images/2012/03/BK-105-black-and-blue2-stonew-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-106-black-and-blue-stonew.jpg",
		smallImage:
			"/static/images/2012/03/BK-106-black-and-blue-stonew-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-107-brown-stonew.jpg",
		smallImage: "/static/images/2012/03/BK-107-brown-stonew-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-108-black-stonew.jpg",
		smallImage: "/static/images/2012/03/BK-108-black-stonew-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-109-rusty-red-stonew.jpg",
		smallImage: "/static/images/2012/03/BK-109-rusty-red-stonew-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-110-rusty-red2-stonew.jpg",
		smallImage: "/static/images/2012/03/BK-110-rusty-red2-stonew-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-111-blue-stonew.jpg",
		smallImage: "/static/images/2012/03/BK-111-blue-stonew-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-112-fjord-blue-stonew.jpg",
		smallImage: "/static/images/2012/03/BK-112-fjord-blue-stonew-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-113-speckled-white-stonew.jpg",
		smallImage:
			"/static/images/2012/03/BK-113-speckled-white-stonew-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-114-speckled-white-stonew.jpg",
		smallImage:
			"/static/images/2012/03/BK-114-speckled-white-stonew-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-115-speckled-blue-stonew.jpg",
		smallImage:
			"/static/images/2012/03/BK-115-speckled-blue-stonew-125x125.jpg",
	},
];

export default () => {
	const title = "vases glazed";
	return (
		<Page title={title}>
			<h2 className="entry-title">{title}</h2>

			<Gallery images={images} />
		</Page>
	);
};
