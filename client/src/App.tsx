import { ThemeProvider } from "@/components/theme-provider"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RootLayout from "./root";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
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
