import Link from "next/link";

import Page from "../../components/Page";

export default () => {
	const title = "craft";
	return (
		<Page title={title}>
			<h2 className="entry-title">{title}</h2>

			<section className="clearfix landing-page-posts">
				<article>
					<Link href="craft/macrame">
						<a href="craft/macrame" rel="bookmark">
							<img
								width="125"
								height="125"
								src="/static/images/2016/02/BK-337-Macrame-1-125x125.jpg"
								className="attachment-125x125 size-125x125 wp-post-image"
								alt=""
							/>
						</a>
					</Link>
					<h2>
						<Link href="craft/macrame">
							<a href="craft/macrame" title="macrame" rel="bookmark">
								macrame
							</a>
						</Link>
					</h2>{" "}
				</article>

				<article>
					<Link href="craft/dress-making">
						<a href="craft/dress-making" rel="bookmark">
							{" "}
							<img
								width="125"
								height="125"
								src="/static/images/2015/09/BK-209-greyorangedress-d1-125x125.jpg"
								className="attachment-125x125 size-125x125 wp-post-image"
								alt=""
							/>
						</a>
					</Link>
					<h2>
						<Link href="craft/dress-making">
							<a href="craft/dress-making" title="dress making" rel="bookmark">
								dress making
							</a>
						</Link>
					</h2>{" "}
				</article>

				<article>
					<Link href="craft/linocut">
						<a href="craft/linocut" rel="bookmark">
							{" "}
							<img
								width="125"
								height="125"
								src="/static/images/2015/09/BK-101-linocutbee1-125x125.jpg"
								className="attachment-125x125 size-125x125 wp-post-image"
								alt=""
							/>
						</a>
					</Link>
					<h2>
						<Link href="craft/linocut">
							<a href="craft/linocut" title="linocut" rel="bookmark">
								linocut
							</a>
						</Link>
					</h2>{" "}
				</article>
			</section>
		</Page>
	);
};
