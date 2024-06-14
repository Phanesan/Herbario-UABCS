import Home from "../Screens/Home";
import SearchPage from "../Screens/SearchPage";
import UserPage from "../Screens/UserPage";
import LoginPage from "../Screens/LoginPage";
import RegisterPage from "../Screens/RegisterPage";
import PlantView from "../Screens/PlantView";
import RegisterPlant from "../Screens/RegisterPlant";
import RegisterObservation from "../Screens/RegisterObservation";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/SearchPage", element: <SearchPage /> },
  { path: "/UserPage", element: <UserPage /> },
  { path: "/LoginPage", element: <LoginPage /> },
  { path: "/RegisterPage", element: <RegisterPage /> },
  { path: "/PlantView/:nombre_cientifico", element: <PlantView /> },
  { path: "/RegisterPlant", element: <RegisterPlant /> },
  { path: "/RegisterObservation", element: <RegisterObservation /> },
];
