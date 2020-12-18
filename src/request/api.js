import { get, post } from './http'
// 首页
export const apiIndex = p => get('/parameter/query', p);
export const apiLogin = p =>post('index/api/insertUser',p)