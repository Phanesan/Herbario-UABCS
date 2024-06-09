import Home from "../Screens/Home";
import SearchPage from "../Screens/SearchPage";
import UserPage from "../Screens/UserPage";
import LoginPage from "../Screens/LoginPage";
import RegisterPage from "../Screens/RegisterPage";
import PlantView from "../Screens/PlantView";

export const routes = [
    {path: '/', element: <Home/>},
    {path:'/SearchPage', element: <SearchPage/>},
    {path:'/UserPage', element: <UserPage/>},
    {path:'/LoginPage', element: <LoginPage/>},
    {path:'/RegisterPage', element: <RegisterPage/>},
    {path:'/PlantView', element: <PlantView/>},
]

