import Page from "components/Page";
import Gallery from "components/Gallery";

const images = [
	{
		bigImage: "/static/images/2016/02/201-SMS.jpg",
		smallImage: "/static/images/2016/02/201-SMS-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/202-SMS.jpg",
		smallImage: "/static/images/2016/02/202-SMS-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/203-SMS.jpg",
		smallImage: "/static/images/2016/02/203-SMS-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/204-SMS.jpg",
		smallImage: "/static/images/2016/02/204-SMS-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/205-SMS.jpg",
		smallImage: "/static/images/2016/02/205-SMS-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/206-SMS.jpg",
		smallImage: "/static/images/2016/02/206-SMS-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/207-SMS.jpg",
		smallImage: "/static/images/2016/02/207-SMS-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/208-SMS.jpg",
		smallImage: "/static/images/2016/02/208-SMS-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/209-SMS.jpg",
		smallImage: "/static/images/2016/02/209-SMS-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/210-SMS.jpg",
		smallImage: "/static/images/2016/02/210-SMS-125x125.jpg",
	},
];

export default () => {
	const title = "nepalese school design";
	return (
		<Page title={title}>
			<h2 className="entry-title">{title}</h2>

			<p>
				for more info please see:
				<a href="http://sangyemenlaschool.org/">
					&nbsp;http://sangyemenlaschool.org/
				</a>
			</p>

			<Gallery images={images} />
		</Page>
	);
};
