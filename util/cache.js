const redis  = require('./redis')

const get = function (key, callback) {
    redis.get(key, (err, data) => {
        if (err) {
            return callback(err)
        }
        if (!data) {
            return callback()
        }
        data = JSON.parse(data)

        callback(null, data)
    })
}

exports.get = get

// time 参数可选，秒为单位
const set = function (key, value, time, callback) {
    if (typeof time === 'function') {
        callback = time
        time = null
    }
    callback = callback || _.noop
    value = JSON.stringify(value)

    if (!time) {
        redis.set(key, value, callback)
    } else {
        redis.setex(key, time, value, callback)
    }
}

exports.set = set
