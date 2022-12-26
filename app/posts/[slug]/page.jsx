import PostContent from "../../../components/posts/post-detail/post-content";
import { getPostData } from "../../../lib/posts-util";

const PostDetailPage = async ({ params }) => {
  const post = await getPostData(params.slug);

  return <PostContent post={post} />;
};

export default PostDetailPage;
