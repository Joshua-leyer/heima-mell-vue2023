const INFO_KEY = `hm_shopping_user_info`;

export const getInfo = () => {
  const defalutInfo = {token: '', userId: ''}
  const result = localStorage.getItem(INFO_KEY, )

  return  result ? JSON.parse(result) : defalutInfo
}

export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}