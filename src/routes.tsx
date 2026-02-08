import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import { Venues } from "./components/Venues";
import { More } from "./components/More";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {path: "", element: <Home />},
      { path: "games", element: <Games /> },
      { path: "trainers", element: <div>Trainers Page</div> },
      { path: "venues", element: <Venues /> },
    ],
  },
  {
    path: "/more",
    element: <More />,
  }
]);

export default router;
