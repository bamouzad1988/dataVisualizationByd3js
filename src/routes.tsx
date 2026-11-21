import { createBrowserRouter } from "react-router";
import Layout from "./layout";
import { Bar } from "./pages/bar";
import { NotFound } from "./pages/not-found";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <p>hpme page...</p> },
            { path: "/bar", element: <Bar /> },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);