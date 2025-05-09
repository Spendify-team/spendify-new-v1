import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./utils/routes";

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
