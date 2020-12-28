import { get, post } from './http'
// 用户

// 微信授权
export const apiLogin = p =>post( '/index/shop/login',p)

// 员工注册
export const apiInsertUser = p =>post('/index/shop/insertUser',p)

// 部门列表
export const apiGetGroup = p =>post('/index/shop/getGroup',p)

// 商品列表
export const apiGetGoods = p =>post('/index/shop/getGoods',p)

// 添加购物车
export const apiGoodsAdd = p =>post('/index/shop/goodsAdd',p)

// 我的购物车
export const apiMyCart = p =>post('/index/shop/myCart',p)

// 删除购物车商品
export const apiGoodsDel = p =>post('/index/shop/goodsDel',p)

// 购买商品
export const apiInsertOrder = p =>post('/index/shop/insertOrder',p)

// 个人中心
export const apiMy = p =>post('/index/shop/My',p)

// 我的订单
export const apimyOrder = p =>post('/index/shop/myOrder',p)

// 积分排行榜
export const apiRanking = p =>post('/index/shop/ranking',p)

// 获取核销码
export const apiGoodsCode = p =>post('/index/shop/goodsCode',p)

// 核销码状态
export const apiGoodsStatus = p =>post('/index/shop/goodsStatus',p)

// 管理核销码
export const apiGoodsEdit = p =>post('/index/shop/goodsEdit',p)

// 积分分析
export const apiSource = p =>post('/index/shop/source',p)


