import { useRouter } from "next/router";

function ActiveLink({ children, href }) {
	const router = useRouter();

	const style = {
		fontWeight: router.pathname.split("/")[1] === href.split("/")[1] && "bold",
	};

	const handleClick = (e) => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<a href={href} onClick={handleClick} style={style}>
			{children}
		</a>
	);
}

export default ActiveLink;
