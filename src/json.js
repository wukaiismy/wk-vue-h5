const centerList = [
    '这是关于我们的文案',
    '这是免责声明的文案',
    '这是意见反馈',
];



const fundList = [{
        id: 1,
        title: '小白选基',
        content: "啥都不懂 戳这里逛逛"
    },

    {
        id: 2,
        title: '随心选基',
        content: "任意搭配 老司机入口"
    },
    {
        id: 3,
        title: '基金定投',
        content: "聚沙成塔 惊喜不断"
    },
    {
        id: 4,
        title: '一周新基',
        content: "选新基金 可以任性"
    },
    {
        id: 5,
        title: '行业ETF一点通',
        content: "一键挖掘低估行业 精确匹配EFT"
    },



]
/*
 *自选相关参数
 *
 */
const optionList = [{
        id: 1,
        title: '广发高端制造股票',
        number: '004997',
        jingzhi: "2.5666",
        time: '09-15',
        netWorth: '3%',
        dailyIncome: '3%',
        totalRevenue: "323%",
        companyName: "广发基金",
        fundManager: '吴彦祖',
        stars: 2,
        rate: 100,
        qq: "36/356"
    },
    {
        id: 2,
        title: '广发高端制造股票',
        number: '004997',
        time: '09-15',
        jingzhi: "2.5666",
        netWorth: '-1.6520%',
        dailyIncome: '2%',
        totalRevenue: "313%",
        companyName: "广发基金",
        fundManager: '吴彦祖',
        stars: 4,
        rate: 88,
        qq: "36/356"
    },
    {
        id: 3,
        title: '广发高端制造股票',
        number: '004997',
        time: '09-15',
        netWorth: '3.6%',
        jingzhi: "2.5666",
        dailyIncome: '22%',
        totalRevenue: "93%",
        companyName: "广发基金",
        fundManager: '吴彦祖',
        stars: 5,
        rate: 90,
        qq: "36/356"
    },
    {
        id: 4,
        title: '广发高端制造股票',
        number: '004997',
        time: '09-15',
        netWorth: '4.20%',
        jingzhi: "2.5666",
        dailyIncome: '73%',
        totalRevenue: "123%",
        companyName: "广发基金",
        fundManager: '吴彦祖',
        stars: 5,
        rate: 100,
        qq: "36/356"
    },
    {
        id: 5,
        title: '广发高端制造股票',
        number: '004997',
        time: '09-15',
        netWorth: '44%',
        dailyIncome: '23%',
        jingzhi: "2.5666",
        totalRevenue: "343%",
        companyName: "广发基金",
        fundManager: '吴彦祖',
        stars: 5,
        rate: 100,
        qq: "36/356"
    }, {
        id: 6,
        title: '广发高端制造股票',
        number: '004997',
        time: '09-15',
        netWorth: '11.2%',
        jingzhi: "2.5666",
        dailyIncome: '-33%',
        totalRevenue: "53%",
        companyName: "广发基金",
        fundManager: '吴彦祖',
        stars: 5,
        rate: 100,
        qq: "36/356"
    },
    {
        id: 7,
        title: '广发高端制造股票',
        number: '004997',
        time: '09-15',
        netWorth: '1.6520',
        jingzhi: "2.5666",
        dailyIncome: '3%',
        totalRevenue: "323%",
        companyName: "广发基金",
        fundManager: '吴彦祖',
        stars: 5,
        rate: 100,
        qq: "36/356"
    },
    {
        id: 8,
        title: '广发高端制造股票',
        number: '004997',
        time: '09-15',
        netWorth: '1.6520',
        dailyIncome: '3%',
        jingzhi: "2.5666",
        totalRevenue: "323%",
        companyName: "广发基金",
        fundManager: '吴彦祖',
        stars: 5,
        rate: 100,
        qq: "36/356"
    },
    {
        id: 9,
        title: '广发高端制造股票',
        number: '004997',
        time: '09-15',
        netWorth: '1.6520',
        jingzhi: "2.5666",
        dailyIncome: '3%',
        totalRevenue: "323%",
        companyName: "广发基金",
        fundManager: '吴彦祖',
        stars: 5,
        rate: 100,
        qq: "36/356"
    },
    {
        id: 10,
        title: '广发高端制造股票',
        number: '004997',
        time: '09-15',
        netWorth: '1.6520',
        jingzhi: "2.5666",
        dailyIncome: '3%',
        totalRevenue: "323%",
        companyName: "广发基金",
        fundManager: '吴彦祖',
        stars: 5,
        rate: 100,
        qq: "36/356"
    }
]
/**
 * 搜索
 */
const perSonList = [{
        id: 1,
        title: '王迪蒙',
        number: '4年经验 广发高端制造股票管理有限公司',
        allAcount: '342.2%',
        times: '2019-20-12'
    },

    {
        id: 2,
        title: '王迪蒙',
        number: '4年经验 广发高端制造股票管理有限公司',
        allAcount: '342.2%',
        times: '2019-20-12'
    },
    {
        id: 3,
        title: '王迪蒙',
        number: '4年经验 广发高端制造股票管理有限公司',
        allAcount: '342.2%',
        times: '2019-20-12'
    }, {
        id: 4,
        title: '张学友',
        number: '4年经验 广发高端制造股票管理有限公司',
        allAcount: '342.2%',
        times: '2019-20-12'
    },

]
/**
 * 个人履历
 */
const perSonInfo = `王迪梦女士:中国籍,经济学学士,持有中国证券投资基金业从业证书。曾任广发证券股份有限公司交易部交易员,广发基金管理有限公司筹建人员、投资管理部中央交易室主管、广发大盘成长混合型证券投资基金基金经理(自2007年6月13日至2010年12月30日)、广发稳健增长开放式证券投资基金基金经理(自2010年12月31日至2016年3月29日)、广发聚祥保本混合证券投资基金基金经理(自2012年10月23日至2014年3月20日)。现任广发大盘成长混合型证券投资基金基金经理(2016年2月23日-2020年2月10日)、广发消费品精选混合型证券投资基金基金经理(自2016年2月23日起任职)、广发聚丰混合型证券投资基金基金经理(自2018年2月2日-2020年5月13日)、广发龙头优选灵活配置混合型证券投资基金基金经理(自2018年8月8日至2020年2月10日)、广发行业领先混合型证券投资基金基金经理(自2018年10月17日至2020年2月10日)。`

/**
 * 定投-一周
 */
const flexList = [{
        id: 1,
        title: '华夏核心科技6个月定开混合A',
        num: '010106',
        tip: ['中高风险', '封闭期6个月'],
        rate: '1.20%',
        money: '100元',
        name: '张学友',
        time: '09-16 15:30'
    },

    {
        id: 2,
        title: '华夏核心科技6个月定开混合A',
        num: '010106',
        tip: ['中高风险', '封闭期6个月'],
        rate: '1.20%',
        money: '100元',
        name: '张学友',
        time: '09-16 15:30'
    },
    {
        id: 3,
        title: '华夏核心科技6个月定开混合A',
        num: '010106',
        tip: ['中高风险', '封闭期6个月'],
        rate: '1.20%',
        money: '100元',
        name: '张学友',
        time: '09-16 15:30'
    },
    {
        id: 4,
        title: '华夏核心科技6个月定开混合A',
        num: '010106',
        tip: ['中高风险', '封闭期6个月'],
        rate: '1.20%',
        money: '100元',
        name: '张学友',
        time: '09-16 15:30'
    },

]
/**
 * ETF
 */
const etfList = [
    [{
            id: 1,
            title: '航空装备',
        },
        {
            id: 2,
            title: '汽车整车',
        },
        {
            id: 3,
            title: '黄金',
        },
    ],

    [{
            id: 1,
            title: '房地产',

        },
        {
            id: 1,
            title: '房地产',

        }, {
            id: 1,
            title: '房地产',

        }, {
            id: 1,
            title: '房地产',

        },
    ],
    [{
        id: 1,
        title: '房地产',

    }, {
        id: 1,
        title: '房地产',

    }, {
        id: 1,
        title: '房地产',

    }, {
        id: 1,
        title: '房地产',

    }, ]

]
/**
 * ETF详情
 */
const etfDetail = {
    id: 1,
    type: '房地产行业指数',
    status: "1",
    rate: '50%',
    dataList: [{
            id: 1,
            name: '南方中证房地产ETF',
            number: '0101024',
            tip: ['中高风险'],
            jz: "10.245",
            money: '+50.5%'
        },
        {
            id: 2,
            name: '南方中证房地产ETF',
            number: '0101024',
            tip: ['中高风险', '封闭期6个月'],
            jz: "10.245",
            money: '-50.5%'
        }, {
            id: 3,
            name: '南方中证房地产ETF',
            number: '0101024',
            tip: ['中高风险', '封闭期6个月'],
            jz: "10.245",
            money: '+50.5%'
        }, {
            id: 4,
            name: '南方中证房地产ETF',
            number: '0101024',
            tip: ['中高风险', '封闭期6个月'],
            jz: "10.245",
            money: '-50.5%'
        }
    ],
}

/**
 * 关键词模拟
 */
const keyList = [
    '广发',
    '广发基金',
    '广发基金ETFA',
    'a11基金',
    '中国'
]
/*
 *现任
 *
 */
const nowList = [{
        id: 1,
        title: '广发高端制造股票',
        number: '004997',
        pp: '77.15%',
        qu: '27/532',
        years: "323%",
        qu1: "47/532",

    },
    {
        id: 2,
        title: '广发高端制造股票',
        number: '004997',
        pp: '77.15%',
        qu: '27/532',
        years: "323%",
        qu1: "47/532",
    },
]
/*
 *现任任期
 *
 */
const nowList1 = [{
        id: 1,
        title: '广发高端制造股票',
        number: '004997',
        pp: '77.15%',
        qu: '27/532',
        years: "323%",
        qu1: "47/532",
        time: "2020-05-10~至今（152天）"

    },
    {
        id: 2,
        title: '广发高端制造股票',
        number: '004997',
        pp: '77.15%',
        qu: '27/532',
        years: "323%",
        qu1: "47/532",
        time: "2020-05-10~至今（152天）"
    },
    {
        id: 3,
        title: '广发高端制造股票',
        number: '004997',
        pp: '77.15%',
        qu: '27/532',
        years: "323%",
        qu1: "47/532",
        time: "2020-05-10~至今（152天）"
    },
]

/**
 * 公司基本概况
 */
const companyMsg = {
    name: "华泰伯瑞盛世中国混合型证券投资基金",
    number: "FP460001",
    type: '混合型',
    evals: '高',
    times: '2005-04-27',
    guimo: '(截止2020年一季报)15.82亿元',
    guimo1: '(截止2020年一季报)25.32亿元',
    person1: '华泰伯瑞基金管理有限公司',
    person2: "中国银行股份有限公司",
    rate1: '1.5000%',
    rate2: '0.2500%',
    rate3: '1.5000%',
    tip: ['管理费是支付给基金管理人的管理报酬，其数额一般按照基金净资产值的一定比例，从基金资产中提取。',

        '基金托管费，是指基金托管人为保管和处置基金资产而向基金收取的费用。通常按照基金资产净值的一定比例提取。',

        '销售服务费是指基金管理人根据约定，从基金财产中计提的一定比例的费用，用于支付销售机构佣金、基金的营销费用以及基金份额持有人服务费等。'
    ]

}
/*
 *股票
 *
 */
const guList = [{
        id: 1,
        name: '绝味食品',
        number: '33.3%',
    },
    {
        id: 2,
        name: '华大基因',
        number: '13.3%',
    }, {
        id: 3,
        name: '蓝思科技',
        number: '53.3%',
    }, {
        id: 4,
        name: '绝味食品',
        number: '63.3%',
    }, {
        id: 5,
        name: '华大基因',
        number: '13.3%',
    },
]

export default {
    centerList,
    fundList,
    optionList,
    perSonList,
    perSonInfo,
    flexList,
    etfList,
    etfDetail,
    keyList,
    nowList,
    nowList1,
    companyMsg,
    guList
}