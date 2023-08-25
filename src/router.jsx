import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AlertsPage from "./pages/alerts/AlertsPage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'application-ui/alert-components', element: <AlertsPage/>}
        ]
    },
]);

export default router;