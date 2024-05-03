import { useEffect, useState } from "react";
import useGlobalState from "../../Hooks/useGlobalState";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const formatDate = (datetime) => {
  const date = new Date(datetime);
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedDateTime = date.toLocaleDateString("en-US", options);
  return formattedDateTime;
};

const RecentBlogs = () => {
  const { APIHost, blogs, blogsLoading, user } = useGlobalState();

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
      {user ? (
        <div className="border-b pb-5 mb-5">
          <Link
            to="/blog/create"
            className="btn uppercase w-full bg-lime-400 bg-opacity-50 hover:bg-lime-400 hover:bg-opacity-75 duration-300 text-lime-800"
          >
            Create a new blog
          </Link>
        </div>
      ) : (
        ""
      )}
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
                  <p className="font-medium text-gray-500 text-sm">
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
