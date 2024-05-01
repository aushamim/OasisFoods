/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useGlobalState from "../../Hooks/useGlobalState";

const formatDate = (datetime) => {
  const date = new Date(datetime);
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};

const shortenString = (str) => {
  return str.slice(0, 330).split(" ").slice(0, -1).join(" ") + " ...";
};

const BlogExpanded = ({ blog }) => {
  const { APIHost } = useGlobalState();

  return (
    <div className="mb-16">
      <div className="h-80 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={blog?.image ? blog.image : APIHost + "/media/blogs/default.jpg"}
          alt={blog?.title}
        />
      </div>
      <div className="p-2 mb-3">
        <p className="text-sm text-gray-400">
          {formatDate(blog?.timestamp)} | {blog?.likes?.length} Likes |{" "}
          {blog?.comments?.length} Comments
        </p>
        <p className="mt-3 text-justify">{shortenString(blog?.body)}</p>

        <div className="flex justify-end">
          <Link
            to={`/blog/details/${blog?.id}`}
            className="font-semibold uppercase hover:text-lime-500 duration-300"
          >
            .. Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogExpanded;