/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useGlobalState from "../../Hooks/useGlobalState";
import { toast } from "sonner";
import BlogComment from "./BlogComment";

const handleLike = () => {
  toast.info("Coming Soon");
};

const BlogDetails = ({ id }) => {
  const { APIHost } = useGlobalState();
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`${APIHost}/blogs/details/?id=${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data[0]));
  }, [id, APIHost]);

  useEffect(() => {
    fetch(`${APIHost}/blogs/comments/?blog_id=${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id, APIHost]);

  return (
    <div>
      <div>
        <h1 className="text-3xl font-semibold">{blog?.title}</h1>
      </div>
      <div className="h-[30rem] rounded-lg overflow-hidden mt-5">
        <img
          className="w-full h-full object-cover"
          src={
            blog?.image
              ? APIHost + blog?.image
              : APIHost + "/media/blogs/default.jpg"
          }
          alt={blog?.title}
        />
      </div>
      <div className="my-5">
        <p className="text-justify whitespace-pre-wrap">{blog?.body}</p>
      </div>
      <div className="mt-10 mb-5 pb-5 border-b flex justify-end">
        <div className="tooltip tooltip-error" data-tip="Likes">
          <button className="bg-rose-200 px-4 py-2 rounded-full text-red-600 font-semibold mr-1">
            {blog?.likes?.length}
          </button>
        </div>
        <button
          onClick={() => {
            handleLike();
          }}
          className="flex items-center gap-3 bg-rose-200 px-4 py-2 rounded-full text-red-600 font-semibold uppercase"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          Like
        </button>
      </div>

      <div>
        <h1 className="text-2xl font-medium text-gray-500">
          {blog?.comments?.length} Comments
        </h1>
        {comments?.map((comment) => (
          <BlogComment key={comment.id} comment={comment}></BlogComment>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
