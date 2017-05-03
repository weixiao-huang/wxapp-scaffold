export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => (
  n.toString()[1] ? n.toString() : '0' + n.toString()
)

/**
 * @param {Function} func 接口
 * @param {Object} options 接口参数
 * @returns {Promise} Promise对象
*/
export const promiseHandle = (func, options) => {
  options = options || {}
  return new Promise((resolve, reject) => {
    if (typeof func !== 'function') reject(new Error('func is not a function'))
    options.success = resolve
    options.fail = reject
    func(options)
  })
}
