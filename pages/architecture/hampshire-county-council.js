import Page from "components/Page";
import Gallery from "components/Gallery";

const images = [
	{
		bigImage: "/static/images/2016/02/01_BK_portfolio_HCC_NCC_s.jpg",
		smallImage: "/static/images/2016/02/01_BK_portfolio_HCC_NCC_s-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/02_BK_portfolio_HCC_Clthrp_s.jpg",
		smallImage:
			"/static/images/2016/02/02_BK_portfolio_HCC_Clthrp_s-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/ASC_01.jpg",
		smallImage: "/static/images/2016/02/ASC_01-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/ASC_02.jpg",
		smallImage: "/static/images/2016/02/ASC_02-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/ASC_03.jpg",
		smallImage: "/static/images/2016/02/ASC_03-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/ASC_04.jpg",
		smallImage: "/static/images/2016/02/ASC_04-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/ASC_05.jpg",
		smallImage: "/static/images/2016/02/ASC_05-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/ASC_06.jpg",
		smallImage: "/static/images/2016/02/ASC_06-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/ASC_07.jpg",
		smallImage: "/static/images/2016/02/ASC_07-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/ASC_08.jpg",
		smallImage: "/static/images/2016/02/ASC_08-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/ASC_09.jpg",
		smallImage: "/static/images/2016/02/ASC_09-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/ASC_10.jpg",
		smallImage: "/static/images/2016/02/ASC_10-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/ASC_11.jpg",
		smallImage: "/static/images/2016/02/ASC_11-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/ASC_12.jpg",
		smallImage: "/static/images/2016/02/ASC_12-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/ASC_13.jpg",
		smallImage: "/static/images/2016/02/ASC_13-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/ASC_14.jpg",
		smallImage: "/static/images/2016/02/ASC_14-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_01.jpg",
		smallImage: "/static/images/2016/02/Clthrp_01-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_02.jpg",
		smallImage: "/static/images/2016/02/Clthrp_02-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_03.jpg",
		smallImage: "/static/images/2016/02/Clthrp_03-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_04.jpg",
		smallImage: "/static/images/2016/02/Clthrp_04-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_05.jpg",
		smallImage: "/static/images/2016/02/Clthrp_05-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_06.jpg",
		smallImage: "/static/images/2016/02/Clthrp_06-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_07.jpg",
		smallImage: "/static/images/2016/02/Clthrp_07-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_08.jpg",
		smallImage: "/static/images/2016/02/Clthrp_08-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_09.jpg",
		smallImage: "/static/images/2016/02/Clthrp_09-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_10.jpg",
		smallImage: "/static/images/2016/02/Clthrp_10-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_11.jpg",
		smallImage: "/static/images/2016/02/Clthrp_11-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_12.jpg",
		smallImage: "/static/images/2016/02/Clthrp_12-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_13.jpg",
		smallImage: "/static/images/2016/02/Clthrp_13-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_14.jpg",
		smallImage: "/static/images/2016/02/Clthrp_14-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_15.jpg",
		smallImage: "/static/images/2016/02/Clthrp_15-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_16.jpg",
		smallImage: "/static/images/2016/02/Clthrp_16-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_17.jpg",
		smallImage: "/static/images/2016/02/Clthrp_17-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_18.jpg",
		smallImage: "/static/images/2016/02/Clthrp_18-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_19.jpg",
		smallImage: "/static/images/2016/02/Clthrp_19-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_20.jpg",
		smallImage: "/static/images/2016/02/Clthrp_20-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_21.jpg",
		smallImage: "/static/images/2016/02/Clthrp_21-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_22.jpg",
		smallImage: "/static/images/2016/02/Clthrp_22-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_23.jpg",
		smallImage: "/static/images/2016/02/Clthrp_23-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_24.jpg",
		smallImage: "/static/images/2016/02/Clthrp_24-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_25.jpg",
		smallImage: "/static/images/2016/02/Clthrp_25-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_26.jpg",
		smallImage: "/static/images/2016/02/Clthrp_26-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_27.jpg",
		smallImage: "/static/images/2016/02/Clthrp_27-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_28.jpg",
		smallImage: "/static/images/2016/02/Clthrp_28-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_29.jpg",
		smallImage: "/static/images/2016/02/Clthrp_29-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_30.jpg",
		smallImage: "/static/images/2016/02/Clthrp_30-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/Clthrp_31.jpg",
		smallImage: "/static/images/2016/02/Clthrp_31-125x125.jpg",
	},
];

export default () => {
	return (
		<Page subPage>
			<h2 className="entry-title">hampshire county council</h2>

			<Gallery images={images} />
		</Page>
	);
};
