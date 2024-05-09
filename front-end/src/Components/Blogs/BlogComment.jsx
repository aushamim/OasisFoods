import { toast } from "sonner";
import useGlobalState from "../../Hooks/useGlobalState";

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

const handleLike = (user, blog_id, comment_id, like, APIHost, refresh) => {
  const promise = () => {
    return fetch(
      `${APIHost}/blogs/comments/?blog_id=${blog_id}&comment_id=${comment_id}&user_id=${user}&like=${like.toLowerCase()}`,
      { method: "POST" }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        } else {
          refresh();
          return data;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  toast.promise(promise, {
    loading: "Working. Please wait.",
    success: `Comment ${like == "like" ? "Liked" : "Unliked"}`,
    error: (error) => {
      return error;
    },
  });
};

const BlogComment = ({ comment }) => {
  const { user, APIHost, refresh } = useGlobalState();
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
          <button
            className="ml-2 text-xs uppercase font-medium bg-red-200 py-0.5 px-2 rounded-full text-red-600"
            onClick={() => {
              if (
                comment?.likes?.find((blog_like_user) => blog_like_user == user)
              ) {
                handleLike(
                  user,
                  comment?.blog,
                  comment?.id,
                  "unlike",
                  APIHost,
                  refresh
                );
              } else {
                handleLike(
                  user,
                  comment?.blog,
                  comment?.id,
                  "like",
                  APIHost,
                  refresh
                );
              }
            }}
          >
            {comment?.likes?.find((blog_like_user) => blog_like_user == user)
              ? "Unlike"
              : "Like"}
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
