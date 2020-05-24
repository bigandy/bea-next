import Page from "components/Page";
import Gallery from "components/Gallery";

const images = [
	{
		bigImage: "/static/images/2012/03/BK-100-bordoeaux12.jpg",
		smallImage: "/static/images/2012/03/BK-100-bordoeaux12-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-101-bordoeaux22.jpg",
		smallImage: "/static/images/2012/03/BK-101-bordoeaux22-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-102-rome1.jpg",
		smallImage: "/static/images/2012/03/BK-102-rome1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-103-Malaga.jpg",
		smallImage: "/static/images/2012/03/BK-103-Malaga-125x125.jpg",
	},

	{
		bigImage: "/static/images/2012/03/BK-104-sydney1.jpg",
		smallImage: "/static/images/2012/03/BK-104-sydney1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-105-bangkok-tuktuk.jpg",
		smallImage: "/static/images/2012/03/BK-105-bangkok-tuktuk-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-106-Swarangkot-1.jpg",
		smallImage: "/static/images/2012/03/BK-106-Swarangkot-1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-107-cornwall1.jpg",
		smallImage: "/static/images/2012/03/BK-107-cornwall1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-108-nepali-village.jpg",
		smallImage: "/static/images/2012/03/BK-108-nepali-village-125x125.jpg",
	},

	{
		bigImage: "/static/images/2012/03/BK-109-bornemouth2.jpg",
		smallImage: "/static/images/2012/03/BK-109-bornemouth2-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-110-bangkok1.jpg",
		smallImage: "/static/images/2012/03/BK-110-bangkok1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-111-Brittany-11.jpg",
		smallImage: "/static/images/2012/03/BK-111-Brittany-11-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-112-beagarden31.jpg",
		smallImage: "/static/images/2012/03/BK-112-beagarden31-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-113-beagarden11.jpg",
		smallImage: "/static/images/2012/03/BK-113-beagarden11-125x125.jpg",
	},

	{
		bigImage: "/static/images/2012/03/BK-114-beagarden21.jpg",
		smallImage: "/static/images/2012/03/BK-114-beagarden21-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-115-N-Jarkot-roof1.jpg",
		smallImage: "/static/images/2012/03/BK-115-N-Jarkot-roof1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-116-Berlin-tube-sunset1.jpg",
		smallImage: "/static/images/2012/03/BK-116-Berlin-tube-sunset1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-117-Berlin-flats1.jpg",
		smallImage: "/static/images/2012/03/BK-117-Berlin-flats1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK-118-St-Aldhelms-Chapel1.jpg",
		smallImage: "/static/images/2012/03/BK-118-St-Aldhelms-Chapel1-125x125.jpg",
	},

	{
		bigImage: "/static/images/2012/03/BK-119-Venice1.jpg",
		smallImage: "/static/images/2012/03/BK-119-Venice1-125x125.jpg",
	},
];

export default () => {
	const title = "light";
	return (
		<Page title={title}>
			<h2 className="entry-title">{title}</h2>

			<Gallery images={images} />
		</Page>
	);
};
