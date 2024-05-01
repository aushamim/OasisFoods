import BlogExpanded from "../../Components/Blogs/BlogExpanded";
import RecentBlogs from "../../Components/Blogs/RecentBlogs";
import Loader from "../../Components/Loader/Loader";
import useGlobalState from "../../Hooks/useGlobalState";

const BlogPage = () => {
  const { blogs, blogsLoading } = useGlobalState();

  return (
    <div className="mt-16 mb-28 grid grid-cols-4 gap-8">
      <div>
        <RecentBlogs></RecentBlogs>
      </div>
      <div className="col-span-3">
        {blogsLoading ? (
          <Loader />
        ) : (
          <>
            {blogs?.map((blog) => (
              <BlogExpanded key={blog.id} blog={blog}></BlogExpanded>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
