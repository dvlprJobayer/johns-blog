import { getPostData } from "../../../lib/posts-util";

export default async function Head({ params }) {
  const post = await getPostData(params.slug);

  return (
    <>
      <title>{post.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={post.excerpt} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
