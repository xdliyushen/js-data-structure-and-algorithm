// 工厂方法模式：和简单工厂模式类似，也是传入参数创建不同的对象。但简单工厂模式倾向于创建同种对象（更准确的描述是对基础对象进行增强），工厂方法模式倾向于创建不同类的对象。
// 这里采用了安全模式的实现。
function Factory(type, content) {
    // 正确调用时
    if(this instanceof Factory) {
        // this.__proto__ == Factory.prototype
        return new this[type](content);
    } else {
    // 错误调用时
        return new Factory(type, content);
    }
}

Factory.prototype = {
    // 这里也不能用箭头函数，因为最终new调用的是该函数，而箭头函数不能作为构造函数。
    php: function(content) {
        // come code
        console.log(content)
    },
    java: function(content) {
        // some code
    },
    // ...
}