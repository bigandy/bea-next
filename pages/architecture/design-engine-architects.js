import Page from "components/Page";
import Gallery from "components/Gallery";

const images = [
	{
		bigImage: "/static/images/2016/02/000-UoW_drawings.jpg",
		smallImage: "/static/images/2016/02/000-UoW_drawings-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/001-UoW.jpg",
		smallImage: "/static/images/2016/02/001-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/03/002-UoW-2.jpg",
		smallImage: "/static/images/2016/03/002-UoW-2-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/003-UoW.jpg",
		smallImage: "/static/images/2016/02/003-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/004-UoW.jpg",
		smallImage: "/static/images/2016/02/004-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/005-UoW.jpg",
		smallImage: "/static/images/2016/02/005-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/006-UoW.jpg",
		smallImage: "/static/images/2016/02/006-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/007-UoW.jpg",
		smallImage: "/static/images/2016/02/007-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/008-UoW.jpg",
		smallImage: "/static/images/2016/02/008-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/009-UoW.jpg",
		smallImage: "/static/images/2016/02/009-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/010-UoW.jpg",
		smallImage: "/static/images/2016/02/010-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/011-UoW.jpg",
		smallImage: "/static/images/2016/02/011-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/012-UoW.jpg",
		smallImage: "/static/images/2016/02/012-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/013-UoW.jpg",
		smallImage: "/static/images/2016/02/013-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/014-UoW.jpg",
		smallImage: "/static/images/2016/02/014-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/015-UoW.jpg",
		smallImage: "/static/images/2016/02/015-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/016-UoW.jpg",
		smallImage: "/static/images/2016/02/016-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/017-UoW.jpg",
		smallImage: "/static/images/2016/02/017-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/018-UoW.jpg",
		smallImage: "/static/images/2016/02/018-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/019-UoW.jpg",
		smallImage: "/static/images/2016/02/019-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/020-UoW.jpg",
		smallImage: "/static/images/2016/02/020-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/021-UoW.jpg",
		smallImage: "/static/images/2016/02/021-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/022-UoW.jpg",
		smallImage: "/static/images/2016/02/022-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/023-UoW.jpg",
		smallImage: "/static/images/2016/02/023-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/024-UoW.jpg",
		smallImage: "/static/images/2016/02/024-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/025-UoW.jpg",
		smallImage: "/static/images/2016/02/025-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/026-UoW.jpg",
		smallImage: "/static/images/2016/02/026-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/027-UoW.jpg",
		smallImage: "/static/images/2016/02/027-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/028-UoW.jpg",
		smallImage: "/static/images/2016/02/028-UoW-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/029-OBU_drawings.jpg",
		smallImage: "/static/images/2016/02/029-OBU_drawings-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/031-OBU.jpg",
		smallImage: "/static/images/2016/02/031-OBU-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/032-OBU.jpg",
		smallImage: "/static/images/2016/02/032-OBU-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/033-OBU.jpg",
		smallImage: "/static/images/2016/02/033-OBU-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/034-OBU.jpg",
		smallImage: "/static/images/2016/02/034-OBU-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/035-OBU.jpg",
		smallImage: "/static/images/2016/02/035-OBU-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/036-OBU-sketchup.jpg",
		smallImage: "/static/images/2016/02/036-OBU-sketchup-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/037-OBU.jpg",
		smallImage: "/static/images/2016/02/037-OBU-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/038-DEoffice.jpg",
		smallImage: "/static/images/2016/02/038-DEoffice-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/039-DEoffice.jpg",
		smallImage: "/static/images/2016/02/039-DEoffice-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/040-DEoffice.jpg",
		smallImage: "/static/images/2016/02/040-DEoffice-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/041-DEoffice.jpg",
		smallImage: "/static/images/2016/02/041-DEoffice-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/042-DEoffice.jpg",
		smallImage: "/static/images/2016/02/042-DEoffice-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/043-DEoffice.jpg",
		smallImage: "/static/images/2016/02/043-DEoffice-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/044-DEoffice.jpg",
		smallImage: "/static/images/2016/02/044-DEoffice-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/045-DEoffice.jpg",
		smallImage: "/static/images/2016/02/045-DEoffice-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/046-DEoffice.jpg",
		smallImage: "/static/images/2016/02/046-DEoffice-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/047-DEoffice.jpg",
		smallImage: "/static/images/2016/02/047-DEoffice-125x125.jpg",
	},
	{
		bigImage: "/static/images/2016/02/048-DEoffice.jpg",
		smallImage: "/static/images/2016/02/048-DEoffice-125x125.jpg",
	},
];

export default () => {
	const title = "design engine architects";
	return (
		<Page title={title}>
			<h2 className="entry-title">{title}</h2>

			<Gallery images={images} />
		</Page>
	);
};
