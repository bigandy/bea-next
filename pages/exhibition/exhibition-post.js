import Page from "components/Page";
import Gallery from "components/Gallery";

const images = [
	{
		bigImage: "/static/images/2012/02/BK-101-exhb_flyer.jpg",
		smallImage: "/static/images/2012/02/BK-101-exhb_flyer-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-102-exhb-before.jpg",
		smallImage: "/static/images/2012/02/BK-102-exhb-before-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-103-exhb-space-sketch1.jpg",
		smallImage: "/static/images/2012/02/BK-103-exhb-space-sketch1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-104-exhb-space-sketch2.jpg",
		smallImage: "/static/images/2012/02/BK-104-exhb-space-sketch2-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-105-exhb-all-made1.jpg",
		smallImage: "/static/images/2012/02/BK-105-exhb-all-made1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-106-exhb-all-made2.jpg",
		smallImage: "/static/images/2012/02/BK-106-exhb-all-made2-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-107-all-painted.jpg",
		smallImage: "/static/images/2012/02/BK-107-all-painted-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-108-all-assembled1.jpg",
		smallImage: "/static/images/2012/02/BK-108-all-assembled1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-109-all-assembled2.jpg",
		smallImage: "/static/images/2012/02/BK-109-all-assembled2-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-110-all-assembled3.jpg",
		smallImage: "/static/images/2012/02/BK-110-all-assembled3-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-111-all-assembled4.jpg",
		smallImage: "/static/images/2012/02/BK-111-all-assembled4-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-112-all-assembled5.jpg",
		smallImage: "/static/images/2012/02/BK-112-all-assembled5-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-113-all-assembled6.jpg",
		smallImage: "/static/images/2012/02/BK-113-all-assembled6-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-114-all-assembled7_break.jpg",
		smallImage:
			"/static/images/2012/02/BK-114-all-assembled7_break-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-115-all-assembled8.jpg",
		smallImage: "/static/images/2012/02/BK-115-all-assembled8-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-116-all-assembled9.jpg",
		smallImage: "/static/images/2012/02/BK-116-all-assembled9-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-117-all-assembled10.jpg",
		smallImage: "/static/images/2012/02/BK-117-all-assembled10-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-118-all-assembled11_ready.jpg",
		smallImage:
			"/static/images/2012/02/BK-118-all-assembled11_ready-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-119-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-119-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-120-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-120-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-121-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-121-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-122-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-122-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-123-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-123-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-124-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-124-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-125-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-125-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-126-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-126-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-127-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-127-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-128-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-128-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-129-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-129-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-130-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-130-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-131-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-131-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-132-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-132-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-133-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-133-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-134-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-134-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-135-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-135-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-136-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-136-exhb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-137-exhb.jpg",
		smallImage: "/static/images/2012/02/BK-137-exhb-125x125.jpg",
	},
];

export default () => {
	const title = "the laundry 2010";
	return (
		<Page title={title}>
			<h2 className="entry-title">{title}</h2>

			<Gallery images={images} />
		</Page>
	);
};
