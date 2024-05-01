import { Link } from "react-router-dom";
import { toast } from "sonner";
import useGlobalState from "../../Hooks/useGlobalState";

const handleSubmit = (e, APIHost) => {
  e.preventDefault();
  const username = e.target.elements["username"].value;
  const password = e.target.elements["password"].value;

  const promise = () => {
    return fetch(`${APIHost}/user/login/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        } else if (data.username) {
          throw new Error(data.username);
        } else {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user_id", data.user_id);

          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  toast.promise(promise, {
    loading: "Logging in. Please wait.",
    success: "Logged in successfully",
    error: (error) => {
      return error;
    },
  });
};

const Login = () => {
  const { APIHost } = useGlobalState();
  return (
    <div className="mt-16">
      <h1 className="text-5xl font-bold text-center">Login</h1>
      <span className="w-20 h-1 bg-orange-300 block mx-auto mt-2"></span>

      <form
        className="mt-16 w-1/2 mx-auto"
        onSubmit={(e) => {
          handleSubmit(e, APIHost);
        }}
      >
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            id="username"
            type="text"
            className="grow"
            placeholder="Username"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            id="password"
            type="password"
            className="grow"
            placeholder="Password"
          />
        </label>

        <div className="mt-5 flex justify-end items-center">
          <p>
            Don&apos;t have an account?{" "}
            <Link
              className="text-orange-700 hover:text-orange-500 duration-300 font-medium"
              to="/register"
            >
              Register here.
            </Link>
          </p>
          <input
            className="btn btn-sm ml-5 uppercase font-semibold"
            type="submit"
            value="Login"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
