import { SpendifyAnalytics, HomePage, OlaAi, SpendifyApp } from "../pages";
import Privacy from "../pages/privacy/index.jsx";
import Terms from "../pages/terms/index.jsx";

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/ola-ai", element: <OlaAi /> },
  { path: "/policies/privacy", element: <Privacy /> },
  { path: "/policies/terms", element: <Terms /> },
  { path: "/spendify-app", element: <SpendifyApp /> },
  { path: "/spendify-analytics", element: <SpendifyAnalytics /> },
];
