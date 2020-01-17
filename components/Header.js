import Link from "next/link";

export default () => {
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
          <div
            id="slides"
            className="clearfix responsiveSlides responsiveSlides1"
          >
            <img
              src="/static/images/2012/03/Phgr-11.jpg"
              alt=""
              width="1000"
              height="288"
              id="responsiveSlides1_s0"
              className=""
            />
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
        </a>
      </Link>
      <nav id="access" role="navigation">
        <div className="menu-nav-menu-container">
          <ul id="menu-nav-menu" className="menu">
            <li>
              <Link href="/">
                <a href="/">home</a>
              </Link>
            </li>
            <li>
              <Link href="/photography">
                <a href="/photography">photography</a>
              </Link>
            </li>
            <li>
              <Link href="/pottery">
                <a href="/pottery">pottery</a>
              </Link>
            </li>
            <li>
              <Link href="/exhibition">
                <a href="/exhibition">exhibition</a>
              </Link>
            </li>
            <li>
              <Link href="/architecture">
                <a href="/architecture">architecture</a>
              </Link>
            </li>
            <li>
              <Link href="/craft">
                <a href="/craft">craft</a>
              </Link>
            </li>
          </ul>
        </div>{" "}
        <div className="menu-rhs-menu-container">
          <ul id="menu-rhs-menu" className="menu">
            <li>
              <Link href="/about-me">
                <a href="/about-me">about</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-me">
                <a href="/contact-me">contact</a>
              </Link>
            </li>
          </ul>
        </div>{" "}
      </nav>
    </header>
  );
};
