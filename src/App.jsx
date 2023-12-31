import Dashboard from "./Pages/Dashboard/Dashboard"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Transaction from "../src/Pages/Transaction/Transaction";
import Support from "./Pages/Support/Support";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Dashboard/>
  },
  {
    path:'/transaction',
    element:<Transaction/>
  },
  {
    path:'/support',
    element:<Support/>
  }
])

function App() {
  return (
    <> 
      <RouterProvider router={router}/>
    </>
  )
}

export default App
