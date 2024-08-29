import React, {FC} from 'react'
import {Button} from "antd"
import styles from "./styles.module.scss"

// 资源采集
const ResourcesBar: FC<{title: string}> = ({title}) => {
    return <div className={styles.box}>
        <div className={styles.cart_head}>
            {title}
        </div>
        <div className={styles.propPanel}>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
        </div>
        <div className={styles.cart_head}>
            采集
        </div>
        <div className={styles.currentEq}>
            <div className={styles.btn}>
                <Button>停止</Button>
                <Button type="primary">开始</Button>
            </div>
            <div className={styles.loot_bar}>
                <div className={styles.loot_plaid}>
                    <span>武器</span>
                </div>
                <div className={styles.loot_plaid}>
                    <span>武器</span>
                </div>
                <div className={styles.loot_plaid}>
                    <span>武器</span>
                </div>
                <div className={styles.loot_plaid}>
                    <span>武器</span>
                </div>
                <div className={styles.loot_plaid}>
                    <span>武器</span>
                </div>
                <div className={styles.loot_plaid}>
                    <span>武器</span>
                </div>
                <div className={styles.loot_plaid}>
                    <span>武器</span>
                </div>
                <div className={styles.loot_plaid}>
                    <span>武器</span>
                </div>
            </div>


        </div>
    </div>
}

export default ResourcesBar;
