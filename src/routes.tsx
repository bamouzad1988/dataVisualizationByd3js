import { createBrowserRouter } from "react-router";
import Layout from "./layout";
import { Bar } from "./pages/bar";
import { Line } from "./pages/line";
import { NotFound } from "./pages/not-found";
import { SvgTest } from "./pages/svg-test";
import { TanstackTables } from "./pages/tables";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <p>home page...</p> },
      { path: "/bar", element: <Bar /> },
      { path: "/line", element: <Line /> },
      { path: "/tables", element: <TanstackTables /> },
      { path: "/svg-test", element: <SvgTest /> },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
