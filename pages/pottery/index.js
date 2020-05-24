import Link from "next/link";

import Page from "../../components/Page";

export default () => {
	const title = "pottery";
	return (
		<Page title={title}>
			<h2 className="entry-title">{title}</h2>

			<section className="clearfix landing-page-posts">
				<article>
					<Link href="pottery/sculptures">
						<a href="pottery/sculptures" rel="bookmark">
							<img
								width="125"
								height="125"
								src="/static/images/2012/03/sculpt1-125x125.jpg"
								className="attachment-125x125 size-125x125 wp-post-image"
								alt=""
							/>
						</a>
					</Link>
					<h2>
						<Link href="pottery/sculptures">
							<a href="pottery/sculptures" title="sculptures" rel="bookmark">
								sculptures
							</a>
						</Link>
					</h2>
				</article>

				<article>
					<Link href="pottery/vases-glazed">
						<a href="pottery/vases-glazed" rel="bookmark">
							<img
								width="125"
								height="125"
								src="/static/images/2012/03/glazd1-125x125.jpg"
								className="attachment-125x125 size-125x125 wp-post-image"
								alt=""
							/>
						</a>
					</Link>
					<h2>
						<Link href="pottery/vases-glazed">
							<a
								href="pottery/vases-glazed"
								title="vases glazed"
								rel="bookmark"
							>
								vases glazed
							</a>
						</Link>
					</h2>
				</article>

				<article>
					<Link href="pottery/vases-unglazed-bw">
						<a href="pottery/vases-unglazed-bw" rel="bookmark">
							{" "}
							<img
								width="125"
								height="125"
								src="/static/images/2012/03/ungl-v1-125x125.jpg"
								className="attachment-125x125 size-125x125 wp-post-image"
								alt=""
							/>
						</a>
					</Link>
					<h2>
						<Link href="pottery/vases-unglazed-bw">
							<a
								href="pottery/vases-unglazed-bw"
								title="vases unglazed b&amp;w"
								rel="bookmark"
							>
								vases unglazed b&amp;w
							</a>
						</Link>
					</h2>
				</article>
			</section>
		</Page>
	);
};
