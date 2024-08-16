import React from 'react'
import {useSelector} from 'umi'
import styles from "./role.module.scss"



// 用户装备
const Equipment = () => {

    return <div className={`${styles.boxCart} ${styles.equipment}`}>
        <div className={styles.cart_head}>
            <span>装备</span>
        </div>
        <div className={styles.cart_body}>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>头盔</span>
            </div>
            <div className={styles.plaid}>
                <span>项链</span>
            </div>
            <div className={styles.plaid}>
                <span>护肩</span>
            </div>
            <div className={styles.plaid}>
                <span>胸甲</span>
            </div>
            <div className={styles.plaid}>
                <span>手套</span>
            </div>
            <div className={styles.plaid}>
                <span>主手</span>
            </div>
            <div className={styles.plaid}>
                <span>鞋子</span>
            </div>
            <div className={styles.plaid}>
                <span>副手</span>
            </div>
        </div>

    </div>
}

const RolePage = (props: any) => {

    const {user} = useSelector((state: any) => state.role)
    console.log(user)
    return <div className={styles.box}>
        <Equipment/>
    </div>
}

export default RolePage;
