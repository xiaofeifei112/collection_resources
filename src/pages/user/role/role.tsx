import React from 'react'
import {useSelector} from 'umi'
import styles from "./role.module.scss"
import EquipmentBar from "@/components/ToggleBar/Equipment"


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
            <div className={styles.plaid}>
                <span>主手</span>
            </div>
            <div className={styles.plaid}>
                <span>鞋子</span>
            </div>
            <div className={styles.plaid}>
                <span>副手</span>
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
// 用户属性
const UserProperties = () => {
    return <div className={`${styles.userProps}`}>
        <div className={styles.cart_head}>
            <span>属性</span>
        </div>
        <div className={styles.cart_info}>
            <div className={styles.props}>
                <span>生命值</span>
                <span>5000</span>
            </div>
            <div className={styles.props}>
                <span>法力值</span>
                <span>5000</span>
            </div>
            <div className={styles.props}>
                <span>攻击</span>
                <span>5000</span>
            </div>
            <div className={styles.props}>
                <span>防御</span>
                <span>5000</span>
            </div>
            <div className={styles.props}>
                <span>闪避</span>
                <span>5000</span>
            </div>
        </div>
    </div>
}
// 用户生活装备
const LifePreparation = () => {
    return <div className={`${styles.boxCart}  ${styles.lifePrep}`}>
        <div className={styles.cart_head}>
            <span>生活装备</span>
        </div>
        <div className={styles.cart_body}>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>头盔</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>头盔</span>
            </div>
            <div className={styles.plaid}>
                <span>耳饰</span>
            </div>
            <div className={styles.plaid}>
                <span>头盔</span>
            </div>
        </div>
    </div>
}
// 副将
const DeputyGeneral = () => {
    return <div className={`${styles.boxCart} ${styles.deputy}`}>
        <div className={styles.cart_head}>
            <span>副将</span>
        </div>
        <div className={styles.cart_body}>
            <div className={styles.plaid}>
                <span>无</span>
            </div>
            <div className={styles.plaid}>
                <span>无</span>
            </div>
            <div className={styles.plaid}>
                <span>无</span>
            </div>
            <div className={styles.plaid}>
                <span>无</span>
            </div>
            <div className={styles.plaid}>
                <span>无</span>
            </div>
            <div className={styles.plaid}>
                <span>无</span>
            </div>
        </div>
    </div>
}

const RolePage = (props: any) => {

    const {user} = useSelector((state: any) => state.role)
    return <div className={styles.box}>
        <div className={styles.property}>
            <Equipment/>
            <UserProperties/>
            <LifePreparation/>
            <DeputyGeneral/>
        </div>
        <div className={styles.backpack}>
            <EquipmentBar/>
        </div>
    </div>
}

export default RolePage;
