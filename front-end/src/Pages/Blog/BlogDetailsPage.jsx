import { useParams } from "react-router-dom";
import RecentBlogs from "../../Components/Blogs/RecentBlogs";
import { useEffect } from "react";
import BlogDetails from "../../Components/Blogs/BlogDetails";

const BlogDetailsPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="my-16 mb-28 grid grid-cols-4 gap-8">
      <div>
        <RecentBlogs></RecentBlogs>
      </div>
      <div className="col-span-3">
        <BlogDetails id={id}></BlogDetails>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
