// router.js
import { createBrowserRouter } from "react-router-dom";
import Layout from "./app/containers/layouts/Layout";
import HomePage from "./app/pages/HomePage";
import AlertsPage from "./app/pages/alerts/AlertsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "alerts", element: <AlertsPage /> },
    ],
  },
]);

export default router;
