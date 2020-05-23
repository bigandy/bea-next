import Page from "components/Page";
import Gallery from "components/Gallery";

const images = [
	{
		bigImage: "/static/images/2012/03/BK201-Jamie-2y.jpg",
		smallImage: "/static/images/2012/03/BK201-Jamie-2y-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK202-N-Dampus1.jpg",
		smallImage: "/static/images/2012/03/BK202-N-Dampus1-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK203-Jamie-4y.jpg",
		smallImage: "/static/images/2012/03/BK203-Jamie-4y-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK204-Nina.jpg",
		smallImage: "/static/images/2012/03/BK204-Nina-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK205-N-Lapka.jpg",
		smallImage: "/static/images/2012/03/BK205-N-Lapka-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK206-N-Dolma.jpg",
		smallImage: "/static/images/2012/03/BK206-N-Dolma-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK207-N-Marpha-trip.jpg",
		smallImage: "/static/images/2012/03/BK207-N-Marpha-trip-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK208-N-Sarangkot.jpg",
		smallImage: "/static/images/2012/03/BK208-N-Sarangkot-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK209-Turkish-woman.jpg",
		smallImage: "/static/images/2012/03/BK209-Turkish-woman-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK210-JamesFwrtl.jpg",
		smallImage: "/static/images/2012/03/BK210-JamesFwrtl-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK211-N-Jharkot.jpg",
		smallImage: "/static/images/2012/03/BK211-N-Jharkot-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK212-AndiJamie.jpg",
		smallImage: "/static/images/2012/03/BK212-AndiJamie-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK213-N-Nit.jpg",
		smallImage: "/static/images/2012/03/BK213-N-Nit-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK214-N-Kinga-archery.jpg",
		smallImage: "/static/images/2012/03/BK214-N-Kinga-archery-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK215-N-LapkaS.jpg",
		smallImage: "/static/images/2012/03/BK215-N-LapkaS-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK216-N-ABCtrek.jpg",
		smallImage: "/static/images/2012/03/BK216-N-ABCtrek-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK217-Muktinath-trip.jpg",
		smallImage: "/static/images/2012/03/BK217-Muktinath-trip-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK218-N-Nawang3.jpg",
		smallImage: "/static/images/2012/03/BK218-N-Nawang3-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK219-N-Pedro.jpg",
		smallImage: "/static/images/2012/03/BK219-N-Pedro-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK220-Sonam.jpg",
		smallImage: "/static/images/2012/03/BK220-Sonam-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK221-N-Kinga2.jpg",
		smallImage: "/static/images/2012/03/BK221-N-Kinga2-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK222-N-Tsering.jpg",
		smallImage: "/static/images/2012/03/BK222-N-Tsering-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK223-N-Jharkot-monastery.jpg",
		smallImage: "/static/images/2012/03/BK223-N-Jharkot-monastery-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK224-N-Muktinath-trip.jpg",
		smallImage: "/static/images/2012/03/BK224-N-Muktinath-trip-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK225-Jamie3y.jpg",
		smallImage: "/static/images/2012/03/BK225-Jamie3y-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK226-Pete.jpg",
		smallImage: "/static/images/2012/03/BK226-Pete-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK227-N-SonamKarma.jpg",
		smallImage: "/static/images/2012/03/BK227-N-SonamKarma-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK228-N-Pema.jpg",
		smallImage: "/static/images/2012/03/BK228-N-Pema-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK229-N-BegnasTal.jpg",
		smallImage: "/static/images/2012/03/BK229-N-BegnasTal-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK230-N-Lapka2.jpg",
		smallImage: "/static/images/2012/03/BK230-N-Lapka2-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK231-Rocky.jpg",
		smallImage: "/static/images/2012/03/BK231-Rocky-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK232-N-Jharkot-monastery.jpg",
		smallImage: "/static/images/2012/03/BK232-N-Jharkot-monastery-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK233-Dampus2.jpg",
		smallImage: "/static/images/2012/03/BK233-Dampus2-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK234-N-DolmaLapka.jpg",
		smallImage: "/static/images/2012/03/BK234-N-DolmaLapka-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/03/BK235-Mounty.jpg",
		smallImage: "/static/images/2012/03/BK235-Mounty-125x125.jpg",
	},
];

export default () => {
	return (
		<Page subPage>
			<h2 className="entry-title">portrait</h2>

			<Gallery images={images} />
		</Page>
	);
};
