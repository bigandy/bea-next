import Link from "next/link";
import { useRouter } from "next/router";

import ActiveLink from "components/ActiveLink";

const Header = () => {
	const router = useRouter();

	const aboutPage = router.pathname === "/about-me";
	const subPage = router.pathname.split("/").length > 2;

	return (
		<header id="branding" role="banner">
			<hgroup>
				<h1 id="site-title">
					<span>
						<Link href="/">
							<a href="/" title="beatrix kovacs" rel="home">
								beatrix kovacs
							</a>
						</Link>
					</span>
				</h1>
			</hgroup>
			<Link href="/">
				<a href="/">
					{!subPage && (
						<div
							id="slides"
							className="clearfix responsiveSlides responsiveSlides1"
						>
							{aboutPage ? (
								<img
									width="1000"
									height="288"
									src="/static/images/2012/03/bea4.jpg"
									className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
									alt=""
									srcSet="/static/images/2012/03/bea4.jpg 1000w, /static/images/2012/03/bea4-300x86.jpg 300w, /static/images/2012/03/bea4-768x221.jpg 768w, /static/images/2012/03/bea4-500x144.jpg 500w"
									sizes="(max-width: 1000px) 100vw, 1000px"
								></img>
							) : (
								<img
									src="/static/images/2012/03/Phgr-11.jpg"
									alt=""
									width="1000"
									height="288"
									id="responsiveSlides1_s0"
									className=""
								/>
							)}

							{/* <img
              src="/static/images/2012/03/Phgr-bw11.jpg"
              alt=""
              width="1000"
              height="288"
              id="responsiveSlides1_s1"
              className="responsiveSlides1_on"
            />
            <img
              src="/static/images/2012/03/Phgr-bw21.jpg"
              alt=""
              width="1000"
              height="288"
              id="responsiveSlides1_s2"
              className=""
            />
            <img
              src="/static/images/2012/03/Phgr-bw31.jpg"
              alt=""
              width="1000"
              height="288"
              id="responsiveSlides1_s3"
            />
            <img
              src="/static/images/2012/02/Phgr-32.jpg"
              alt=""
              width="1000"
              height="288"
              id="responsiveSlides1_s4"
            /> */}
						</div>
					)}
				</a>
			</Link>
			<nav id="access" role="navigation">
				<div className="menu-nav-menu-container">
					<ul id="menu-nav-menu" className="menu">
						<li>
							<ActiveLink href="/">home</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/photography">photography</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/pottery">pottery</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/exhibition">exhibition</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/architecture">architecture</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/craft">craft</ActiveLink>
						</li>
					</ul>
				</div>{" "}
				<div className="menu-rhs-menu-container">
					<ul id="menu-rhs-menu" className="menu">
						<li>
							<ActiveLink href="/about-me">about</ActiveLink>
						</li>
						<li>
							<ActiveLink href="/contact-me">contact</ActiveLink>
						</li>
					</ul>
				</div>{" "}
			</nav>
		</header>
	);
};

export default Header;
