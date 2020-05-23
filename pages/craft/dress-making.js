import Page from "components/Page";
import Gallery from "components/Gallery";

const images = [
	{
		bigImage: "/static/images/2015/09/BK-201-jamiehoody-11.jpg",
		smallImage: "/static/images/2015/09/BK-201-jamiehoody-11-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-202-jamiehoody-back1.jpg",
		smallImage: "/static/images/2015/09/BK-202-jamiehoody-back1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-203-jamiehoody-detail11.jpg",
		smallImage: "/static/images/2015/09/BK-203-jamiehoody-detail11-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-204-jamiehoody-detail21.jpg",
		smallImage: "/static/images/2015/09/BK-204-jamiehoody-detail21-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-205-beach-trousers1.jpg",
		smallImage: "/static/images/2015/09/BK-205-beach-trousers1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-206-blackdress11.jpg",
		smallImage: "/static/images/2015/09/BK-206-blackdress11-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-207-blackdress21.jpg",
		smallImage: "/static/images/2015/09/BK-207-blackdress21-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-208-grey-orangedress-1.jpg",
		smallImage: "/static/images/2015/09/BK-208-grey-orangedress-1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-209-greyorangedress-d11.jpg",
		smallImage: "/static/images/2015/09/BK-209-greyorangedress-d11-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-210-grey-orangedress-d2-1.jpg",
		smallImage:
			"/static/images/2015/09/BK-210-grey-orangedress-d2-1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-211-grey-knitted-dress1.jpg",
		smallImage: "/static/images/2015/09/BK-211-grey-knitted-dress1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-212-grey-knitted-dress-detail1.jpg",
		smallImage:
			"/static/images/2015/09/BK-212-grey-knitted-dress-detail1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-213-zigzagdress1.jpg",
		smallImage: "/static/images/2015/09/BK-213-zigzagdress1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-214-zigzagdress-detail1.jpg",
		smallImage: "/static/images/2015/09/BK-214-zigzagdress-detail1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-215-blueflowersdess1.jpg",
		smallImage: "/static/images/2015/09/BK-215-blueflowersdess1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-216-blueflowersback1.jpg",
		smallImage: "/static/images/2015/09/BK-216-blueflowersback1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-217-blueflowers-detail21.jpg",
		smallImage:
			"/static/images/2015/09/BK-217-blueflowers-detail21-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-218-blueflowers-detail31.jpg",
		smallImage:
			"/static/images/2015/09/BK-218-blueflowers-detail31-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-219-blueflowers-detail41.jpg",
		smallImage:
			"/static/images/2015/09/BK-219-blueflowers-detail41-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-220-grey-flower-dress1.jpg",
		smallImage: "/static/images/2015/09/BK-220-grey-flower-dress1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-221-grey-flower-dress-detail.jpg",
		smallImage:
			"/static/images/2015/09/BK-221-grey-flower-dress-detail-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-222-blue-orrange-flower-dress1.jpg",
		smallImage:
			"/static/images/2015/09/BK-222-blue-orrange-flower-dress1-125x125.jpg",
	},
	{
		bigImage:
			"/static/images/2015/09/BK-223-blue-orrange-flower-dress-back1.jpg",
		smallImage:
			"/static/images/2015/09/BK-223-blue-orrange-flower-dress-back1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-224-blue-orrange-flower-dress-d11.jpg",
		smallImage:
			"/static/images/2015/09/BK-224-blue-orrange-flower-dress-d11-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-225-blue-orrange-flower-dress-d21.jpg",
		smallImage:
			"/static/images/2015/09/BK-225-blue-orrange-flower-dress-d21-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-226-grey-dress1.jpg",
		smallImage: "/static/images/2015/09/BK-226-grey-dress1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-227-grey-dress-back1.jpg",
		smallImage: "/static/images/2015/09/BK-227-grey-dress-back1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-228-grey-dress-d11.jpg",
		smallImage: "/static/images/2015/09/BK-228-grey-dress-d11-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-229-grey-dress-d21.jpg",
		smallImage: "/static/images/2015/09/BK-229-grey-dress-d21-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-230-red-flower-dress1.jpg",
		smallImage: "/static/images/2015/09/BK-230-red-flower-dress1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-231-red-flower-dress-detail1.jpg",
		smallImage:
			"/static/images/2015/09/BK-231-red-flower-dress-detail1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-232-red-nepali-dress1.jpg",
		smallImage: "/static/images/2015/09/BK-232-red-nepali-dress1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-233-red-nepali-dress-back1.jpg",
		smallImage:
			"/static/images/2015/09/BK-233-red-nepali-dress-back1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-234-red-nepali-dress-d11.jpg",
		smallImage:
			"/static/images/2015/09/BK-234-red-nepali-dress-d11-125x125.jpg",
	},
	{
		bigImage: "/static/images/2015/09/BK-235-red-nepali-dress-d21.jpg",
		smallImage:
			"/static/images/2015/09/BK-235-red-nepali-dress-d21-125x125.jpg",
	},
];

export default () => {
	return (
		<Page subPage>
			<h2 className="entry-title">dress making</h2>
			<Gallery images={images} />
		</Page>
	);
};
