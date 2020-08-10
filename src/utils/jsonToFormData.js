/**
 * 在使用formData方式请求时，不用更改请求头的请求类型，通过此方法将json转换成formData
 * @param {Object} obj 传入的json
 * @author songjianet
 * @return {FormData} fd 返回转换后的formData
 * */
export function obj2FormData(obj) {
  const fd = new FormData()

  for (const k in obj) {
    // if (obj.hasOwnProperty(k)) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) {
      const v = obj[k]

      if (Array.isArray(v)) {
        for (let i = 0, length = v.length; i < length; i++) {
          fd.append(k + '[]', v[i])
        }
      } else {
        fd.append(k, v)
      }
    }
  }

  return fd
}
