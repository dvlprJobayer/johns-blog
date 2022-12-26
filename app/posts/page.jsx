import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = async () => {
  const allPosts = await getAllPosts();

  return <AllPosts posts={allPosts} />;
};

export default AllPostsPage;
