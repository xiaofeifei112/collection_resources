import {defineConfig} from "umi";

export default defineConfig({
    routes: [
        {path: "/login", component: "@/pages/login/login"},
        {
            path: "/", component: "@/components/layout", routes: [
                {path: "/role", component: "@/pages/role/role"},
            ]
        }
    ],

    npmClient: "yarn",
    dva: {},
    plugins: ["@umijs/plugins/dist/dva"],
});
