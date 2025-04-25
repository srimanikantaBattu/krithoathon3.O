import { ThemeProvider } from "@/components/theme-provider"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RootLayout from "./root";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import LocationTracker from "./pages/LocationTrack";
import AgentAcceptedRequests from "./pages/Agent/Accepted";
import SourcingAgentsPage from "./pages/Agent/SourcingAgent";
import AgentProfile from "./pages/Agent/ProfilePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>
    },{
      path:"/landing-page",
      element:<LandingPage></LandingPage>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/location-track",
      element:<LocationTracker/>
    },
    {
      path:"/accepted-requests",
      element:<AgentAcceptedRequests/>
    },
    {
      path:"/agents",
      element:<SourcingAgentsPage/>
    },
    {
      path:"/agent/:id",
      element:<AgentProfile/>
    }
  ])
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </ThemeProvider>
  )
}

export default App
