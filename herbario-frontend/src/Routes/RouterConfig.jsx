import Home from "../Screens/Home";
import SearchPage from "../Screens/SearchPage";
import UserPage from "../Screens/UserPage";
import LoginPage from "../Screens/LoginPage";
import RegisterPage from "../Screens/RegisterPage";
import PlantView from "../Screens/PlantView";
import RegisterPlant from "../Screens/RegisterPlant";

export const routes = [
    {path: '/Home', element: <Home/>},
    {path:'/SearchPage', element: <SearchPage/>},
    {path:'/UserPage', element: <UserPage/>},
    {path:'/LoginPage', element: <LoginPage/>},
    {path:'/RegisterPage', element: <RegisterPage/>},
    {path:'/PlantView', element: <PlantView/>},
    {path:'/RegisterPlant', element: <RegisterPlant/>},
]

