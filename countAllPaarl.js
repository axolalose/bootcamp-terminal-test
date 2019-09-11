module.exports = function countAllPaarl(reg) {
    var regNum = reg.split(',');
    var count = 0
    for (var i = 0; i < regNum.length; i++) {
        var num = regNum[i].trim()
        if (num.startsWith('CJ')) {
            count++
        }
    }
    return count;
}