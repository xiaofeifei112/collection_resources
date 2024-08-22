import {} from "umi"
import {CurrentStatusEnum} from "@/constant/Resources";

export interface IRole {

}

export default {
    namespace: "role",
    state: {
        // 用户属性
        user: {},
        // 用户仓库
        userWarehouse: {},
        // 用户等级
        userLifeLevel: {},
        // 用户状态
        userStates: {},
        // 系统配置
        config: {
            // 当前的位置
            current_status: CurrentStatusEnum.explore,
            current_status_id: CurrentStatusEnum.forest
        }
    },
    effects: {
        // *func({payload}, {call, put, select}) {
        //
        // }
    },
    reducers: {
        // 更新资源
        // 开启定时器
        start(state: { config: { timer: NodeJS.Timeout } }, {payload}: any) {

            return state
        },

    },
    subscriptions: {}
}
