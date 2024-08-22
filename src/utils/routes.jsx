import {
  SpendifyAnalytics,
  HomePage,
  OlaAi,
  SpendifyApp,
  SpendifyTracker,
  SpendifyNews,
  SpendifyInsights,
  Spendify101,
  Analysis,
  Blog
} from "../pages";
import { BlogDetail } from "../pages/blog/BlogDetail.jsx";
import FaqPage from "../pages/faq/index.jsx";
import Privacy from "../pages/privacy/index.jsx";
import Terms from "../pages/terms/index.jsx";

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/ola-ai", element: <OlaAi /> },
  { path: "/policies/privacy", element: <Privacy /> },
  { path: "/policies/terms", element: <Terms /> },
  { path: "/spendify-app", element: <SpendifyApp /> },
  { path: "/spendify-analytics", element: <SpendifyAnalytics /> },
  { path: "/spendify-tracker", element: <SpendifyTracker /> },
  { path: "/spendify-news", element: <SpendifyNews /> },
  { path: "/spendify-insights", element: <SpendifyInsights /> },
  { path: "/spendify-101", element: <Spendify101 /> },
  { path: "/analysis", element: <Analysis /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:id", element: <BlogDetail /> },
  { path: "/faq", element: <FaqPage /> },
];
