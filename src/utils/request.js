/**
 * get/post封装
 */

import Conf from '@/config'

export function request(url, method, data = null, content_type = 'application/x-www-form-urlencoded') {
    console.debug('[Request]', method, url, data)
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.setRequestHeader('Content-type', content_type)
        if (Conf.CORS)
            xhr.withCredentials = true
        xhr.onload = function () {
            if (xhr.status === 200) {
                const res = JSON.parse(xhr.response)
                if (res.status !== 0)
                    reject(xhr.responseText)
                else
                    resolve(JSON.parse(xhr.response))
            } else
                reject(xhr.responseText)
        }
        xhr.onerror = xhr.onabort = function () {
            reject(xhr.responseText)
        }
        xhr.send(data)
    })
}

/**
 * POST请求
 * @param url 地址
 * @param data 数据
 */
export function post(url, data) {
    if (typeof data === 'object') {
        data = Object.keys(data).reduce((pre_val, cur_val) => {
            return cur_val + '=' + data[cur_val] + '&' + pre_val
        }, '_=1')
    }
    return request(url, 'POST', data)
}
