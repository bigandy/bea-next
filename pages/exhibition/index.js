import Link from "next/link";

import Page from "../../components/Page";

export default () => {
  return (
    <Page>
      <header>
        <h2 className="entry-title">exhibition</h2>
      </header>

      <section className="clearfix landing-page-posts">
        <article>
          <Link href="exhibition/fabric-of-life-2013">
            <a href="exhibition/fabric-of-life-2013" rel="bookmark">
              <img
                width="125"
                height="125"
                src="/static/images/2015/10/fabric-of-life-125x125.jpg"
                className="attachment-125x125 size-125x125 wp-post-image"
                alt=""
              />
            </a>
          </Link>
          <h2>
            <Link href="exhibition/fabric-of-life-2013">
              <a
                href="exhibition/fabric-of-life-2013"
                title="Fabric of Life 2013"
                rel="bookmark"
              >
                Fabric of Life 2013
              </a>
            </Link>
          </h2>
        </article>

        <article>
          <Link href="exhibition/yard-and-meter-2013">
            <a href="exhibition/yard-and-meter-2013" rel="bookmark">
              <img
                width="125"
                height="125"
                src="/static/images/2015/10/Yard-and-Meter-10days-2013-125x125.jpg"
                className="attachment-125x125 size-125x125 wp-post-image"
                alt=""
              />
            </a>
          </Link>
          <h2>
            <Link href="exhibition/yard-and-meter-2013">
              <a
                href="exhibition/yard-and-meter-2013"
                title="Yard and Metre 2013"
                rel="bookmark"
              >
                Yard and Metre 2013
              </a>
            </Link>
          </h2>
        </article>

        <article>
          <Link href="exhibition/exhibition-post">
            <a href="exhibition/exhibition-post" rel="bookmark">
              <img
                width="125"
                height="125"
                src="/static/images/2012/02/exhib_flyer-125x125.jpg"
                className="attachment-125x125 size-125x125 wp-post-image"
                alt=""
              />
            </a>
          </Link>
          <h2>
            <Link href="exhibition/exhibition-post">
              <a
                href="exhibition/exhibition-post"
                title="The Laundry 2010"
                rel="bookmark"
              >
                The Laundry 2010
              </a>
            </Link>
          </h2>
        </article>
      </section>
    </Page>
  );
};
