import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE, ALCOHOLIC_ROUTE, COCKTAILS_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Auth from "./pages/Auth";
import Alcoholic from "./pages/Alcoholic";
import Cocktails from "./pages/Cocktails";
import Main from "./pages/Main";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: ALCOHOLIC_ROUTE,
        Component: Alcoholic
    },
    {
        path: COCKTAILS_ROUTE,
        Component: Cocktails
    },
]
