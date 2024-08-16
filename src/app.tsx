import React from "react";
import {ConfigProvider} from 'antd'
import locale from 'antd/es/locale/zh_CN'


// 权限处理
export function render(oldRender: () => void) {
    oldRender();
}

const ThemeProvider = (props: any) => {
    return <ConfigProvider
        locale={locale}
        theme={{
            "token": {
                "colorPrimary": "#162d4b",
                "colorInfo": "#162d4b",
                "colorSuccess": "#1677ff"
            },
            "components": {
                "Button": {
                    "primaryShadow": "0 2px 0 rgba(5, 145, 255, 0.1)",
                    // "autoInsertSpace":false
                }
            }
        }}>
        {props.children}
    </ConfigProvider>
}

export function rootContainer(container: any, args: any) {
    return React.createElement(ThemeProvider, args, container);
}
