import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/shared/layouts/Layout";
import HomePage from "./pages/HomePage";
import AlertsPage from "./pages/alerts/AlertsPage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'components/alerts', element: <AlertsPage/>}
        ]
    },
]);

export default router;