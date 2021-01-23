const assert = require('assert').strict;

function toHoursMinutesSeconds(value) {
    let hours = Math.floor(value / 3600)
    let minutes = Math.floor((value - (hours * 3600)) / 60)
    let seconds = value - (hours * 3600) - minutes * 60

    return `${hours}:${minutes}:${seconds}`
}

try {
    assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
    assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:2:0")
    assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:2:5")
} catch (error) {
    console.error(error)
}