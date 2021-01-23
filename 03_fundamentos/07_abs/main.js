const assert = require('assert').strict;

function abs(value) {
    if (value < 0) {
        return value * -1;
    } else {
        return value;
    }
}

try {
    assert.strictEqual(abs(4), 4)
    assert.strictEqual(abs(-4), 4)
    assert.strictEqual(abs(0), 0)
} catch (error) {
    console.error(error)
}