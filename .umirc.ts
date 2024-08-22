import {defineConfig} from "umi";

export default defineConfig({
    routes: [
        {path: "/login", component: "@/pages/login/login"},
        {
            path: "/", component: "@/components/layout", routes: [
                // 角色
                {path: "/role", component: "@/pages/user/role/role"},
                // 仓库
                {path: "/warehouse",component: "@/pages/user/warehouse/warehouse"},
                // 资源 - 探索
                {path: "/explore", component: "@/pages/skill/explore/explore"},
            ]
        }
    ],
    codeSplitting: {
        jsStrategy: 'granularChunks',
    },
    npmClient: "yarn",
    dva: {},
    plugins: ["@umijs/plugins/dist/dva"],
});
