import Link from "next/link";

import Page from "../../components/Page";

export default () => {
  return (
    <Page>
      <header>
        <h2 className="entry-title">photography</h2>
      </header>

      <section className="clearfix landing-page-posts">
        <article>
          <Link href="photography/moments">
            <a href="/photography/moments/" rel="bookmark">
              <img
                src="http://www.beatrixkovacs.co.uk/content/uploads/2015/09/BK-429-Thorong-La1-125x125.jpg"
                className="attachment-125x125 size-125x125 wp-post-image"
                alt=""
                width="125"
                height="125"
              />
            </a>
          </Link>

          <h2>
            <Link href="photography/moments">
              <a href="photography/moments" title="moments" rel="bookmark">
                moments
              </a>
            </Link>
          </h2>
        </article>

        <article>
          <Link href="photography/portrait">
            <a href="photography/portrait/" rel="bookmark">
              <img
                src="http://www.beatrixkovacs.co.uk/content/uploads/2012/03/BK206-N-Dolma1-125x125.jpg"
                className="attachment-125x125 size-125x125 wp-post-image"
                alt=""
                width="125"
                height="125"
              />
            </a>
          </Link>
          <h2>
            <Link href="photography/portrait">
              <a
                href="http://www.beatrixkovacs.co.uk/photography/portrait/"
                title="portrait"
                rel="bookmark"
              >
                portrait
              </a>
            </Link>
          </h2>{" "}
        </article>

        <article>
          <Link href="photography/light">
            <a
              href="http://www.beatrixkovacs.co.uk/photography/light/"
              rel="bookmark"
            >
              {" "}
              <img
                src="http://www.beatrixkovacs.co.uk/content/uploads/2012/03/BK-P1050172-125x125.jpg"
                className="attachment-125x125 size-125x125 wp-post-image"
                alt=""
                width="125"
                height="125"
              />
            </a>
          </Link>
          <h2>
            <Link href="photography/light">
              <a
                href="http://www.beatrixkovacs.co.uk/photography/light/"
                title="light"
                rel="bookmark"
              >
                light
              </a>
            </Link>
          </h2>{" "}
        </article>

        <article>
          <Link href="photography/texture">
            <a
              href="http://www.beatrixkovacs.co.uk/photography/texture/"
              rel="bookmark"
            >
              {" "}
              <img
                src="http://www.beatrixkovacs.co.uk/content/uploads/2012/02/BK-302-N-Lupra1-125x125.jpg"
                className="attachment-125x125 size-125x125 wp-post-image"
                alt=""
                width="125"
                height="125"
              />
            </a>
          </Link>
          <h2>
            <Link href="photography/texture">
              <a
                href="http://www.beatrixkovacs.co.uk/photography/texture/"
                title="texture"
                rel="bookmark"
              >
                texture
              </a>
            </Link>
          </h2>{" "}
        </article>
      </section>
    </Page>
  );
};
