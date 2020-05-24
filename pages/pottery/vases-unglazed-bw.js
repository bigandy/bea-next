import Page from "components/Page";
import Gallery from "components/Gallery";

const images = [
	{
		bigImage: "/static/images/2012/03/BK-101-earthstone.jpg",
		smallImage: "/static/images/2012/03/BK-101-earthstone-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-102-black-smooth-textured.jpg",
		smallImage:
			"/static/images/2012/03/BK-102-black-smooth-textured-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-103-black-smooth-textured.jpg",
		smallImage:
			"/static/images/2012/03/BK-103-black-smooth-textured-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-104-earthstone.jpg",
		smallImage: "/static/images/2012/03/BK-104-earthstone-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-105-black-chunky-crank-.jpg",
		smallImage: "/static/images/2012/03/BK-105-black-chunky-crank--125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-106-black-smooth-textured.jpg",
		smallImage:
			"/static/images/2012/03/BK-106-black-smooth-textured-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-107-black-smooth-textured.jpg",
		smallImage:
			"/static/images/2012/03/BK-107-black-smooth-textured-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-108-black-smooth-textured.jpg",
		smallImage:
			"/static/images/2012/03/BK-108-black-smooth-textured-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-109-earthstone-glazed-inside.jpg",
		smallImage:
			"/static/images/2012/03/BK-109-earthstone-glazed-inside-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-110-earthstone.jpg",
		smallImage: "/static/images/2012/03/BK-110-earthstone-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-111-black-smooth-textured.jpg",
		smallImage:
			"/static/images/2012/03/BK-111-black-smooth-textured-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-112-earthstone.jpg",
		smallImage: "/static/images/2012/03/BK-112-earthstone-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-113-black-chunky-crank-.jpg",
		smallImage: "/static/images/2012/03/BK-113-black-chunky-crank--125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-114-black-chunky-crank.jpg",
		smallImage: "/static/images/2012/03/BK-114-black-chunky-crank-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-115-earthstone.jpg",
		smallImage: "/static/images/2012/03/BK-115-earthstone-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-116-black-smooth-textured.jpg",
		smallImage:
			"/static/images/2012/03/BK-116-black-smooth-textured-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-117-black-smooth-textured.jpg",
		smallImage:
			"/static/images/2012/03/BK-117-black-smooth-textured-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-118-earthstone.jpg",
		smallImage: "/static/images/2012/03/BK-118-earthstone-125x125.jpg",
	},
];

export default () => {
	const title = "vases unglazed b&w";
	return (
		<Page title={title}>
			<h2 className="entry-title">{title}</h2>

			<Gallery images={images} />
		</Page>
	);
};
