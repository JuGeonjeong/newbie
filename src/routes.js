import App1 from "./J/App";
import App3 from "./U/App";

let routes = [
    {
        path: "/ju",
        redirect: true,
        layout: "/reactNewbie",
        component: App1,
    },
    {
        path: "/u",
        redirect: true,
        layout: "/reactNewbie",
        component: App2,
    },
    {
        path: "/Kim",
        redirect: true,
        layout: "/reactNewbie",
        component: App3,
    },
]