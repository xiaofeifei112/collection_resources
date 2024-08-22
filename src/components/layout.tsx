import React from 'react';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Menu} from 'antd';
import {Outlet, useNavigate} from 'umi';
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
        key: 'user', label: '角色',
        children: [
            {key: '/role', label: '属性'},
            {key: '/warehouse', label: '仓库'}
        ]
    },
    {
        key: 'skill', label: '资源',
        children: [
            {label: '探索', key: '/explore'},
            {label: '挖矿', key: 'Mining'},
            {label: '狩猎', key: 'Hunting'},
            {label: '药剂', key: 'Potion'},
            {label: '烹饪', key: 'Cooking'},
            {label: '锻造', key: 'Forging'},
        ]
    },
    {
        key: 'combat', label: '战斗',
        children: [
            {label: '历练', key: 'experience'},
            {label: '秘境', key: 'secretRealm'},
            {label: '大陆', key: 'continent'},
            {label: '小世界', key: 'world'},
            {label: '界域', key: 'boundary'},
        ]
    },
    {
        key: 'shop', label: "商城"
    }
]

const App: React.FC = () => {
    const navigation = useNavigate();

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
            <Layout style={{overflow: 'auto'}}>
                <Sider width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                        items={menus}
                        onClick={({key}) => {
                            navigation(key)
                        }}
                    />
                </Sider>
                <Layout>
                    <Content
                        style={{
                            padding: "12 0",
                            margin: 0,
                            minHeight: 280
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
