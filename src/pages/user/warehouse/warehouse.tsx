import React from 'react'
import styles from './warehouse.module.scss'
import {Tabs, TabsProps} from "antd";
import EquipmentBar from "@/components/ToggleBar/Equipment";


const TabItems: TabsProps["items"] = [
    {key: "1", label: "道具"},
    {key: "2", label: "装备"},
]

const WarehousePage = () => {

    return <div className={styles.box}>
        <div className={styles.property}>
            <div className={styles.header}>
                <Tabs type="card" items={TabItems}/>
            </div>
            <div className={styles.body}>
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
                <div className={styles.plaid}>
                    <div className={styles.plaid_card}></div>
                </div>
            </div>
        </div>
        <div className={styles.backpack}>
            <EquipmentBar/>
        </div>
    </div>
}

export default WarehousePage;
