import { Routes, useLocation, Route } from "react-router-dom";
import { routes } from "./RouterConfig";

export const AppRouter = () =>{
    const Location = useLocation();

    return (
        <Routes location={Location} key={Location.pathname}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    )

}
