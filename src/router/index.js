import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/user/HomePage.vue";
import DetailPage from "../pages/user/DetailPage.vue";
import ReadPage from "../pages/user/ReadPage.vue";

const routes = [
    {
        name: "Home",
        path: "/",
        component: HomePage,
    },
    {
        name: "Detail",
        path: "/detail",
        component: DetailPage,
    },
    {
        name: "Read",
        path: "/read",
        component: ReadPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;