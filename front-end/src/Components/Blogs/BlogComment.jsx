/* eslint-disable react/prop-types */
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

const BlogComment = ({ comment }) => {
  return (
    <div className="mt-10">
      <span className="w-80 h-0.5 bg-gray-200 block my-3"></span>
      <div className="">
        <div className="flex items-center">
          <p className="font-medium text-sm text-lime-600">
            {comment?.user ? (
              <>
                {comment?.user?.first_name} {comment?.user?.last_name}
              </>
            ) : (
              "[Deleted User]"
            )}{" "}
            | {comment?.likes?.length} Likes |
          </p>
          <button className="ml-2 text-xs uppercase font-medium bg-red-200 py-0.5 px-2 rounded-full text-red-600">
            Like
          </button>
        </div>
        <p className="text-sm mt-2">{comment?.body}</p>
      </div>

      <p className="text-xs text-end italic text-gray-400">
        {formatDate(comment?.timestamp)}
      </p>
      <span className="w-80 h-0.5 bg-gray-200 block mb-3 ml-auto"></span>
    </div>
  );
};

export default BlogComment;
