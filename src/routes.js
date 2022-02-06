import App1 from "./J/App";
import App2 from "./K/App";
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
        path: "/K",
        redirect: true,
        layout: "/reactNewbie",
        component: App2,
    },
]

export default routes;
