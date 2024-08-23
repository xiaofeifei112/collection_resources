// 森林
const forest = [
    {name: '荒原', img: '', requirements: [],}
]

// 当前用户的状态
export enum CurrentStatusEnum {
    // 资源地图
    explore = "explore",
    // 森林
    forest = "forest"
}

// 输入数据类型
export interface Input_State_Type {
    // 类型
    type: ResourceEnum;
    // 最小值
    min_num: number;
    // 最大值 -1 无要求
    max_num: number;
}

// 输出数据类型
export interface Output_State_Type {
    // 类型
    type: ResourceEnum;
    // 基数
    num: number;
    // 时间维度
    probability: number
}

// 资源地图
export interface Resource_Map {
    // 地图名称
    name: string;
    // 地图图片
    img: string;
    // 地图要求
    requirements: Input_State_Type[];
    // 地图资源产出
    outputs: Output_State_Type[];
    // 时间周期 ms
    time: number;
}

export enum ResourceEnum {
    // 等级
    lv = "lv",

    // 资源
    wood = "wood", // 木头
    stone = "stone" // 石头
}

// 地图
class Resources {
    // 森林
    forest: Resource_Map[] = [
        {
            name: "贫瘠小林", img: "/assets/img.png",
            requirements: [{type: ResourceEnum.lv, min_num: 0, max_num: -1}],
            outputs: [
                {type: ResourceEnum.wood, num: 1, probability: 100},
                {type: ResourceEnum.stone, num: 1, probability: 100}
            ],
            time: 10000
        }
    ];

    constructor() {
    }
}


export const resources = new Resources();

// 定时器队列

class TimerQueue {
    timer: boolean = false;
    list: { name: string, time: number, func: () => Promise<any> }[] = [];

    constructor() {

    }

    // 定时器
    start() {
        if (this.timer) return;
        setTimeout(async () => {
            this.timer = true;
            const list = this.list.map(item => (new Promise(resolve => {
                if (Date.now() >= item.time) {
                    item.func().then(resolve)
                }
            })));
            await Promise.all(list).then(Promise.resolve).catch(Promise.resolve);
            this.timer = false;
            this.start()
        }, 1000)
    }

    // 删除
    del(name: string) {

    }
}

export const timerQueue = new TimerQueue();
