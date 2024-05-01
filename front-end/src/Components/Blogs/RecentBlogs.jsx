import { useEffect, useState } from "react";
import useGlobalState from "../../Hooks/useGlobalState";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const formatDate = (datetime) => {
  const date = new Date(datetime);
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};

const RecentBlogs = () => {
  const { APIHost, blogs, blogsLoading } = useGlobalState();

  const [filteredBlogs, setFilteredBlogs] = useState([]);
  useEffect(() => {
    if (blogs.length < 6) {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.slice(0, 7));
    }
  }, [blogs]);

  return (
    <div>
      <div className="border-b">
        <h1 className="text-3xl font-bold">Recent blogs</h1>
        <span className="w-[4.2rem] h-1 bg-lime-500 block mt-2"></span>
      </div>
      <div className="mt-5">
        {blogsLoading ? (
          <Loader />
        ) : (
          <>
            {filteredBlogs?.map((blog) => (
              <div
                key={blog?.id}
                className="grid grid-cols-4 gap-3 items-center border-b pb-3 mb-3"
              >
                <div>
                  <div className="aspect-square rounded overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={
                        blog?.image
                          ? blog.image
                          : APIHost + "/media/blogs/default.jpg"
                      }
                      alt="Blog Img"
                    />
                  </div>
                </div>
                <div className="col-span-3">
                  <Link
                    to={`/blog/details/${blog?.id}`}
                    className="text-lg font-semibold block truncate hover:text-lime-500 duration-300"
                  >
                    {blog?.title}
                  </Link>
                  <p className="font-medium text-gray-500">
                    {formatDate(blog?.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default RecentBlogs;
