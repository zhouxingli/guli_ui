//1 创建js方法
const sum = function(a,b){
    return parseInt(a) + parseInt(b)
}
const subtract = function(a,b){
    return parseInt(a) - parseInt(b)
}
const test=function(a){
    return parseInt(a)*0.92;
}

//2 设置哪些方法可以被其他js调用
module.exports = {
    sum,
    subtract,
    test
}