import { get, post } from './http'
// 首页
// export const apiIndex = p => get('api/index', p);
export const apiLogin = p =>post('index/api/insertUser',p)