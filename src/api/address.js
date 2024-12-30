import request from "@/utils/request.js";

export const getAddress = () => {
  return request('/address/list')
}