const INFO_KEY = `hm_shopping_user_info`;
const HISTORY_KEY = `hm_history_list`;

// 获取个人信息
export const getInfo = () => {
  const defalutInfo = {token: '', userId: ''}
  const result = localStorage.getItem(INFO_KEY, )

  return  result ? JSON.parse(result) : defalutInfo
}
// 设置
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}
// 移除
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

export const getHistoryList = () => {
  const result = localStorage.getItem(HISTORY_KEY);
  return result ? JSON.parse(result) : []
}

export const setHistory = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
export const clearHistory = () => {
  localStorage.removeItem(HISTORY_KEY)
}

