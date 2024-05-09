import { toast } from "sonner";
import useGlobalState from "../../Hooks/useGlobalState";
import { useNavigate } from "react-router-dom";

const handleSubmit = (e, user, APIHost, navigate, refresh) => {
  e.preventDefault();

  const title = e.target.elements["title"].value;
  const body = e.target.elements["body"].value;
  const image = e.target.elements["image"].files[0];

  const formData = new FormData();
  formData.append("user", user);
  formData.append("title", title);
  formData.append("body", body);
  if (image) {
    formData.append("image", image);
  }

  const promise = () => {
    return fetch(`${APIHost}/blogs/all/`, {
      method: "POST",
      body: formData,
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
    loading: "Creating a new blog. Please wait.",
    success: "Blog created successfully",
    error: (error) => {
      return error;
    },
  });

  navigate("/blog", { replace: true });
};

const NewBlog = () => {
  const { user, APIHost, refresh } = useGlobalState();
  const navigate = useNavigate();

  return (
    <div className="mt-10 w-2/3 mx-auto">
      <h1 className="text-4xl font-semibold text-center">Write a New Blog</h1>
      <span className="w-20 h-1 bg-lime-500 block mt-1 mx-auto"></span>

      <form
        onSubmit={(e) => {
          handleSubmit(e, user, APIHost, navigate, refresh);
        }}
        encType="multipart/form-data"
      >
        <input
          id="title"
          type="text"
          placeholder="Title"
          className="input input-bordered w-full mt-10"
          required
        />
        <textarea
          id="body"
          className="textarea textarea-bordered w-full mt-5"
          placeholder="Write blog here"
          rows={5}
          required
        ></textarea>
        <input
          id="image"
          type="file"
          accept="image/*"
          className="file-input file-input-bordered w-full mt-5"
        />
        <div className="mt-5 flex justify-end">
          <input type="submit" value="Post" className="btn uppercase" />
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
