import React from "react";
import { Link } from "gatsby";
import RssIcon from "../components/RssIcon";

const BlogIndexListing = ({ post }) => {
  const { title, date, updated } = post.frontmatter;
  const { slug } = post.fields
  return (<li>
    <Link to={slug}>{date}: {title}</Link>
    {(updated && updated.length > 0) ? <span className="blog-updated"> (Updated: {updated[0].date})</span> : null}
  </li>);
};

const BlogIndexContent = ({ posts }) => (
  <article className="blog-posts default-content">
    <h2>All Posts</h2> 
    <ul>
      {posts.map(({ post }) => <BlogIndexListing post={post} />)}
    </ul>
    <RssIcon link="/blog/rss.xml"/>
  </article>
);

export default BlogIndexContent;