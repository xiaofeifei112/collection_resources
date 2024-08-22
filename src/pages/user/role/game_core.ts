import {CurrentStatusEnum, ResourceEnum, resources} from "@/constant/Resources";
import {message} from "antd"
import math from "mathjs"

type BackPack = { type: ResourceEnum, num: number, data: {}, id: number }

class Game_core {
    // 用户属性
    user = {};
    // 用户仓库
    userWarehouse: BackPack[] = [];
    // 用户等级
    userLifeLevel = {}
    // 用户状态
    userStates = {}
    // 系统配置
    config = {
        // 当前的位置
        current_status: CurrentStatusEnum.explore,
        current_status_id: CurrentStatusEnum.forest,
        // 最后一次时间点
        last_time: 1724320294691,
    }

    // 判断当前位置，执行不同任务
    positionJudgment() {
        // 资源地图
        if (this.config.current_status === CurrentStatusEnum.explore) {

        }
    }

    // 探索地图计算逻辑
    exploreComputing() {
        const time = Date.now() - this.config.last_time;
        // 判断最低时间
        if (time < math.chain(1000).multiply(10).done()) {
            message.error("历练时间小于10秒")
            return;
        }
        // GenerateProps()
        resources.forest[0].outputs.forEach(item => {
            // 资源填充
            this.addBackPack({
                type: item.type, num: GenerateProps(item.probability, math.chain(time).divide(1000).floor().done()), data: {}
            })
        })
    }
    // 背包资源填充
    addBackPack(back: BackPack){
        this.userWarehouse
    }
}


// 根据随机数生成道具数量，次数 概率，次数
const GenerateProps = (random: number, num: number) => {
    if (num < 1) return 0;
    const index = math.chain(random).multiply(num).divide(100).done()
    const co = math.chain(index).subtract(Math.trunc(index)).multiply(100).done()
    if (fullClose(0, 100) <= co) {
        return index + 1
    } else {
        return index
    }

}

function fullClose(n: number, m: number) {
    let result = Math.random() * (m - n + 1) + n - 1;
    while (result < n) {
        result = Math.random() * (m - n + 1) + n - 1;
    }
    return result;
}

