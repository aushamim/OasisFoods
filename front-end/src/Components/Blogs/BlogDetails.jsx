/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useGlobalState from "../../Hooks/useGlobalState";
import { toast } from "sonner";
import BlogComment from "./BlogComment";
import { Link } from "react-router-dom";

const handleLike = () => {
  toast.info("Coming Soon");
};

const handleSubmit = (e, user, blog, APIHost, refresh) => {
  e.preventDefault();
  const comment = e.target.elements["comment"].value;
  e.target.elements["comment"].value = "";

  const data = {
    blog: blog,
    user: parseInt(user),
    body: comment,
  };

  const promise = () => {
    return fetch(`${APIHost}/blogs/create-comment/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
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
    loading: "Commenting. Please wait.",
    success: "Commented successfully",
    error: (error) => {
      return error;
    },
  });
};

const BlogDetails = ({ id }) => {
  const { APIHost, user, refreshTrigger, refresh } = useGlobalState();
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`${APIHost}/blogs/details/?id=${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data[0]));
  }, [id, APIHost, refreshTrigger]);

  useEffect(() => {
    fetch(`${APIHost}/blogs/comments/?blog_id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });
        setComments(data);
      });
  }, [id, APIHost, refreshTrigger]);

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
        {user ? (
          <form
            onSubmit={(e) => {
              handleSubmit(e, user, blog?.id, APIHost, refresh);
            }}
          >
            <textarea
              id="comment"
              className="textarea textarea-bordered w-full"
              rows={3}
              placeholder="Write a comment"
            ></textarea>
            <div className="flex justify-end mt-2">
              <input
                type="submit"
                value="comment"
                className="uppercase btn btn-sm"
              />
            </div>
          </form>
        ) : (
          <h3 className="text-2xl font-medium text-center">
            Please{" "}
            <Link
              className="text-lime-500 hover:text-lime-600 duration-300"
              to="/login"
            >
              login
            </Link>{" "}
            to comment.
          </h3>
        )}
        <h1 className="text-2xl font-medium text-gray-500 mt-10">
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
