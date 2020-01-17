import Link from "next/link";

import Page from "../../components/Page";

export default () => {
  return (
    <Page>
      <header>
        <h2 className="entry-title">pottery</h2>
      </header>

      <section className="clearfix landing-page-posts">
			<article>

				<a href="pottery/sculptures/" rel="bookmark">

				<img width="125" height="125" src="http://www.beatrixkovacs.co.uk/content/uploads/2012/03/sculpt1-125x125.jpg"

				className="attachment-125x125 size-125x125 wp-post-image" alt=""
				/>
				</a>
				<h2><a href="pottery/sculptures/" title="sculptures" rel="bookmark">sculptures</a></h2>
			</article>

			<article>
				<a href="pottery/vases-glazed/" rel="bookmark">
				<img width="125" height="125" src="http://www.beatrixkovacs.co.uk/content/uploads/2012/03/glazd1-125x125.jpg" className="attachment-125x125 size-125x125 wp-post-image" alt="" />
				</a>
				<h2><a href="pottery/vases-glazed/" title="vases glazed" rel="bookmark">vases glazed</a></h2>
			</article>

			<article>
				<a href="pottery/vases-unglazed-bw/" rel="bookmark"> <img width="125" height="125" src="http://www.beatrixkovacs.co.uk/content/uploads/2012/03/ungl-v1-125x125.jpg" className="attachment-125x125 size-125x125 wp-post-image" alt="" /></a>
			<h2><a href="pottery/vases-unglazed-bw/" title="vases unglazed b&amp;w" rel="bookmark">vases unglazed b&amp;w</a></h2>
			</article>
		</section>
    </Page>
  );
};
