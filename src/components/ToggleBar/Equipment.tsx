import React, {FC} from 'react'
import {Button} from "antd"
import styles from "./styles.module.scss"

// 装备列表
const EquipmentBar: FC<{}> = () => {
    return <div className={styles.box}>
        <div className={styles.cart_head}>
            背包
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
            当前装备
        </div>
        <div className={styles.currentEq}>
            <div className={styles.plaid}>
                <span>武器</span>
            </div>
            <div className={styles.btn}>
                <Button>卸下</Button>
                <Button type="primary" >装备</Button>
            </div>
        </div>
    </div>
}

export default EquipmentBar;
