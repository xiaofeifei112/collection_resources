import React, {useEffect} from 'react'
import {Tabs, TabsProps} from 'antd'
import {useSelector, useDispatch, useStore} from 'umi'
import styles from './explore.module.scss'
import ResourcesBar from "@/components/ToggleBar/ResourcesBar"
import img from "@/assets/img.png"


const TabItems: TabsProps["items"] = [
    {key: "1", label: "迷雾森林"},
    {key: "2", label: "幻海沼泽"},
]

const LoggingPage = () => {

    const state = useSelector((state: any) => state);
    const dispatch = useDispatch()
    const store = useStore()

    useEffect(() => {
        // dispatch({type: 'role/start'})
    }, []);

    return <div className={styles.box}>
        <div className={styles.property}>
            <div className={styles.header}>
                <Tabs type="card" items={TabItems}/>
            </div>
            <div className={styles.body}>
                <div className={styles.plaid}>
                    <div className={styles.plaid_card}>
                        <img src={img} alt=""/>
                        <span className={styles.title}>迷雾沼泽</span>
                    </div>
                </div>
                <div className={styles.plaid}>
                    <div className={styles.plaid_card}></div>
                </div>
                <div className={styles.plaid}>
                    <div className={styles.plaid_card}></div>
                </div>
                <div className={styles.plaid}>
                    <div className={styles.plaid_card}></div>
                </div>
                <div className={styles.plaid}>
                    <div className={styles.plaid_card}></div>
                </div>
                <div className={styles.plaid}>
                    <div className={styles.plaid_card}></div>
                </div>
            </div>
        </div>
        <div className={styles.backpack}>
            <ResourcesBar title={'迷雾森林'}/>
        </div>
    </div>
}

export default LoggingPage;
