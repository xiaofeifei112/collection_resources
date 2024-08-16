import React from 'react';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Menu} from 'antd';
import {Outlet} from 'umi';
import styles from './styles.module.scss';


const {Header, Content, Sider} = Layout;

// const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
//     key,
//     label: `nav ${key}`,
// }));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);
// 菜单
const menus: MenuProps['items'] = [
    {
        key: 'user', label: '角色'
    },
    {
        key: 'skill', label: '生活技能',
        children: [
            {label: '木材', key: 'Logging'},
            {label: '挖矿', key: 'Mining'},
            {label: '狩猎', key: 'Hunting'},
            {label: '药剂', key: 'Potion'},
            {label: '烹饪', key: 'Cooking'},
            {label: '锻造', key: 'Forging'},
        ]
    },
    {
        key: 'combat', label: '战斗',
        children: []
    },
    {
        key: 'shop', label: "购物"
    }
]

const App: React.FC = () => {

    return (
        <Layout className={styles.layout}>
            <Header style={{display: 'flex', alignItems: 'center'}}>
                <div className="demo-logo"/>
                {/*<Menu*/}
                {/*    theme="dark"*/}
                {/*    mode="horizontal"*/}
                {/*    defaultSelectedKeys={['2']}*/}
                {/*    items={items1}*/}
                {/*    style={{ flex: 1, minWidth: 0 }}*/}
                {/*/>*/}
            </Header>
            <Layout>
                <Sider width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                        items={menus}
                    />
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Content
                        style={{
                            padding: "12 0",
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {<Outlet/>}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default App;
