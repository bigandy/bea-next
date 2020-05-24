import Page from "components/Page";
import Gallery from "components/Gallery";

const images = [
	{
		bigImage: "/static/images/2012/03/BK-101-painting.jpg",
		smallImage: "/static/images/2012/03/BK-101-painting-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-102-stonew.jpg",
		smallImage: "/static/images/2012/03/BK-102-stonew-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-103-black-smooth-textured1.jpg",
		smallImage:
			"/static/images/2012/03/BK-103-black-smooth-textured1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-104-bisq-fired.jpg",
		smallImage: "/static/images/2012/03/BK-104-bisq-fired-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-105-blue-stonew.jpg",
		smallImage: "/static/images/2012/03/BK-105-blue-stonew-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-106-earthstone.jpg",
		smallImage: "/static/images/2012/03/BK-106-earthstone-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-107-earthstone.jpg",
		smallImage: "/static/images/2012/03/BK-107-earthstone-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-108-earthstone.jpg",
		smallImage: "/static/images/2012/03/BK-108-earthstone-125x125.jpg",
	},
];

export default () => {
	const title = "sculptures";
	return (
		<Page title={title}>
			<h2 className="entry-title">{title}</h2>

			<Gallery images={images} />
		</Page>
	);
};
