import Page from "components/Page";
import Gallery from "components/Gallery";

const images = [
	{
		bigImage: "/static/images/2012/02/BK-301-Cornwall-fishermanhut.jpg",
		smallImage:
			"/static/images/2012/02/BK-301-Cornwall-fishermanhut-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-302-N-Lupra.jpg",
		smallImage: "/static/images/2012/02/BK-302-N-Lupra-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-303-Granada.jpg",
		smallImage: "/static/images/2012/02/BK-303-Granada-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-304-beagarden-2.jpg",
		smallImage: "/static/images/2012/02/BK-304-beagarden-2-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-305-Romemarket.jpg",
		smallImage: "/static/images/2012/02/BK-305-Romemarket-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-306-beagarden-4.jpg",
		smallImage: "/static/images/2012/02/BK-306-beagarden-4-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-307-Rome.jpg",
		smallImage: "/static/images/2012/02/BK-307-Rome-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-308-Corsica-2.jpg",
		smallImage: "/static/images/2012/02/BK-308-Corsica-2-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-309-Corsica.jpg",
		smallImage: "/static/images/2012/02/BK-309-Corsica-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-310-N-Pokhara.jpg",
		smallImage: "/static/images/2012/02/BK-310-N-Pokhara-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-311-Portugal-Villa-Cha.jpg",
		smallImage: "/static/images/2012/02/BK-311-Portugal-Villa-Cha-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-312-Budapest.jpg",
		smallImage: "/static/images/2012/02/BK-312-Budapest-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-313-N-Jharkot-wall.jpg",
		smallImage: "/static/images/2012/02/BK-313-N-Jharkot-wall-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-314-Piza-steps.jpg",
		smallImage: "/static/images/2012/02/BK-314-Piza-steps-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-315-Pantheon.jpg",
		smallImage: "/static/images/2012/02/BK-315-Pantheon-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-316-Granada-3.jpg",
		smallImage: "/static/images/2012/02/BK-316-Granada-3-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-317-nepal-wooden-stair.jpg",
		smallImage: "/static/images/2012/02/BK-317-nepal-wooden-stair-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-318-winchester-2.jpg",
		smallImage: "/static/images/2012/02/BK-318-winchester-2-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-319-Siza-connection2.jpg",
		smallImage: "/static/images/2012/02/BK-319-Siza-connection2-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-320-Turkey-roof.jpg",
		smallImage: "/static/images/2012/02/BK-320-Turkey-roof-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-321-Turkey-3.jpg",
		smallImage: "/static/images/2012/02/BK-321-Turkey-3-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-322-dorset-3.jpg",
		smallImage: "/static/images/2012/02/BK-322-dorset-3-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-323-Turkey5.jpg",
		smallImage: "/static/images/2012/02/BK-323-Turkey5-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-324-Nepal-ABCtrek.jpg",
		smallImage: "/static/images/2012/02/BK-324-Nepal-ABCtrek-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-325-Dorset.jpg",
		smallImage: "/static/images/2012/02/BK-325-Dorset-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-326-Turkey7.jpg",
		smallImage: "/static/images/2012/02/BK-326-Turkey7-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-327-Siza-connection.jpg",
		smallImage: "/static/images/2012/02/BK-327-Siza-connection-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-328-Turkey-4.jpg",
		smallImage: "/static/images/2012/02/BK-328-Turkey-4-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-329-nepal-rice-field.jpg",
		smallImage: "/static/images/2012/02/BK-329-nepal-rice-field-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-330-road-to-Rome.jpg",
		smallImage: "/static/images/2012/02/BK-330-road-to-Rome-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-331-Granada-5.jpg",
		smallImage: "/static/images/2012/02/BK-331-Granada-5-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-332-N-Jharkot-2.jpg",
		smallImage: "/static/images/2012/02/BK-332-N-Jharkot-2-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-333-Seacomb.jpg",
		smallImage: "/static/images/2012/02/BK-333-Seacomb-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-334-Nepal-Jharkot.jpg",
		smallImage: "/static/images/2012/02/BK-334-Nepal-Jharkot-125x125.jpg",
	},
	{
		bigImage: "/static/images/2012/02/BK-335-Turkey-6.jpg",
		smallImage: "/static/images/2012/02/BK-335-Turkey-6-125x125.jpg",
	},
];

export default () => {
	return (
		<Page>
			<h2 className="entry-title">texture</h2>

			<Gallery images={images} />
		</Page>
	);
};
