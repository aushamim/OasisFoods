/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useGlobalState from "../../Hooks/useGlobalState";
import { Link } from "react-router-dom";

const formatDate = (datetime) => {
  const date = new Date(datetime);
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};

const Blog = ({ id }) => {
  const { APIHost } = useGlobalState();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch(`${APIHost}/blogs/details/?id=${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data[0]));
  }, [id, APIHost]);

  console.log(blog);

  return (
    <div
      className="relative h-[450px] bg-no-repeat bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: `url(${
          blog?.image
            ? APIHost + blog.image
            : APIHost + "/media/blogs/default.jpg"
        })`,
      }}
    >
      <div className="bg-white absolute left-5 right-5 bottom-7 p-5 rounded-lg">
        <div className="flex items-center gap-5">
          <p className="flex items-center gap-2 text-gray-500 font-semibold text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 stroke-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            <span>{formatDate(blog?.timestamp)}</span>
          </p>
          <p className="flex items-center gap-2 text-gray-500 font-semibold text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 stroke-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <span>{blog?.likes?.length}</span>
          </p>
          <p className="flex items-center gap-2 text-gray-500 font-semibold text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 stroke-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
            <span>{blog?.comments?.length}</span>
          </p>
        </div>
        <div className="mt-3">
          <Link
            to={`/blog/details/${blog?.id}`}
            className="text-2xl font-semibold block truncate hover:text-orange-500 duration-300"
          >
            {blog?.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
