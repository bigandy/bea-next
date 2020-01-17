import Link from "next/link";

import Page from "../../components/Page";

export default () => {
  return (
    <Page>
      <header>
        <h2 className="entry-title">architecture</h2>
      </header>

      <section>
        <p>&nbsp;</p>
        <p>
          <a
            href="/static/images/2017/12/BK_CV_2017_s.pdf"
            target="_blank"
          >
            curriculum vitae
          </a>
        </p>
      </section>
      <section className="clearfix landing-page-posts">
        <article>
          <Link href="architecture/hampshire-county-council">
            <a href="architecture/hampshire-county-council" rel="bookmark">
              <img
                width="125"
                height="125"
                src="/static/images/2016/02/HCC-feature-125x125.jpg"
                className="attachment-125x125 size-125x125 wp-post-image"
                alt=""
              />
            </a>
          </Link>
          <h2>
            <Link href="architecture/hampshire-county-council">
              <a
                href="architecture/hampshire-county-council"
                title="Hampshire County Council"
                rel="bookmark"
              >
                Hampshire County Council
              </a>
            </Link>
          </h2>
        </article>

        <article>
          <Link href="architecture/nepalese-school-design">
            <a href="architecture/nepalese-school-design" rel="bookmark">
              <img
                width="125"
                height="125"
                src="/static/images/2016/02/201-SMS-1-125x125.jpg"
                className="attachment-125x125 size-125x125 wp-post-image"
                alt=""
              />
            </a>
          </Link>
          <h2>
            <Link href="architecture/nepalese-school-design">
              <a
                href="architecture/nepalese-school-design"
                title="Nepalese School design"
                rel="bookmark"
              >
                Nepalese School design
              </a>
            </Link>
          </h2>
        </article>

        <article>
          <Link href="architecture/design-engine-architects">
            <a href="architecture/design-engine-architects" rel="bookmark">
              <img
                width="125"
                height="125"
                src="/static/images/2016/02/DE_Performing-Arts-Pav_1-125x125.jpg"
                className="attachment-125x125 size-125x125 wp-post-image"
                alt=""
              />
            </a>
          </Link>
          <h2>
            <Link href="architecture/design-engine-architects">
              <a
                href="architecture/design-engine-architects"
                title="Design Engine Architects"
                rel="bookmark"
              >
                Design Engine Architects
              </a>
            </Link>
          </h2>
        </article>
      </section>
    </Page>
  );
};
