// 抽象类：定义某类应有的方法，但不去具体实现。若其子类/构造函数中没有重写该方法，则会抛出一个错误。
let Car = function () {};
Car.prototype = {
    getPrice: () => {throw new Error('抽象方法不能调用！')},
}

// 抽象工厂模式：抽象工厂实际上是一个实现子类继承父类的方法，根据传入的参数不同，使子类继承不同的父类
function Book(subType, superType) {
    if(Book[superType]) {
        // 采用寄生组合式继承
        
    } else {
        throw new Error('未创建该抽象类！')
    }
}