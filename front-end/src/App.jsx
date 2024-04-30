import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { register } from "swiper/element/bundle";
register();
import Nav from "./Components/Nav/nav";
import Footer from "./Components/Footer/footer";
import Home from "./Pages/Home/home";
import { useEffect, useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setScrollToTopVisible(true);
      } else {
        setScrollToTopVisible(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="w-2/3 mx-auto">
        <Nav></Nav>
        <div className="min-h-[85vh]">
          <RouterProvider router={router} />
        </div>
        <Footer></Footer>
      </div>

      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className={
          scrollToTopVisible
            ? "btn rounded-r-none p-3 fixed right-0 bottom-10"
            : "hidden"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default App;
