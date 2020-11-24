import { getCurrentInstance} from 'vue'
// 存数据
function setLocal (key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}
// 取数据
function getLocal (key) {
  return JSON.parse(window.localStorage.getItem(key))
}
// 删数据
function delLocal (key) {
  window.localStorage.removeItem(key)
}
// 全部清空
function clearLocal () {
  window.localStorage.clear()
}
    //  获取vue 实例
function getInstance (){
  const instance = getCurrentInstance().appContext.config.globalProperties
  return instance
}

export { setLocal, getLocal, delLocal, clearLocal , getInstance}