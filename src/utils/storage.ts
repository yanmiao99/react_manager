/*
 *  storage 二次封装
 *  功能 :
 *   1. 命名空间实现 , 防止不同项目数据混淆
 *   2. 存储类型支持 object
 *   3. 支持删除单项
 * */

const namespace = 'react_manager'

export default {
  set(key: string, value: any) {
    const storage = this.getStorage()
    storage[key] = value
    window.localStorage.setItem(namespace, JSON.stringify(storage))
  },

  get(key: string) {
    return this.getStorage()[key]
  },

  remove(key: string) {
    const storage = this.getStorage()
    delete storage[key]
    window.localStorage.setItem(namespace, JSON.stringify(storage))
  },

  clear() {
    window.localStorage.clear()
  },

  getStorage() {
    return JSON.parse(window.localStorage.getItem(namespace) || '{}')
  }
}
