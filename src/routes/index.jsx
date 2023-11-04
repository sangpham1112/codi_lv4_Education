import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import { Suspense } from "react";
import Loading from "../components/Loading";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const CategoriesByEducation = lazy(() =>
  import("../pages/CategoriesByEducation")
);
const CoursesByCategory = lazy(() => import("../pages/CoursesByCategory"));
const ShowCourse = lazy(() => import("../pages/CoursesByCategory/ShowCourse"));
const Teachers = lazy(() => import("../pages/Teachers"));
const ShowTeacher = lazy(() => import("../pages/Teachers/ShowTeacher"));
const Login = lazy(() => import("../pages/Login"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/loai-dao-tao/:id",
        element: <CategoriesByEducation />,
      },
      {
        path: "/loai-khoa-hoc/:id",
        element: <CoursesByCategory />,
      },
      {
        path: "/khoa-hoc/:id",
        element: <ShowCourse />,
      },
      {
        path: "/giang-vien",
        element: <Teachers />,
      },
      {
        path: "/giang-vien/:id",
        element: <ShowTeacher />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
]);
