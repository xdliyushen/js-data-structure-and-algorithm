// 注意：沿原型链查找属性和方法时，是沿着对象的 __proto__ 属性查找的，而不是沿着 prototype 属性查找的。

// 类式继承：声明两个类，将一个类的实例赋给另一个类的原型。
// 缺点：（1）所有的子类实例都会共享一个原型对象，对其进行的修改会影响所有子类实例。
//      （2）在实例化父类时无法传入参数。
var SuperType = function() {};
var SubType = function() {};
SubType.prototype = new SuperType();

// 构造函数继承：在子类构造函数内部调用父类构造函数，并通过更改this的指向传入参数。
// 缺点：（1）子类实例并不会继承父类 prototype 中的属性和方法。因此也无法通过 instanceof 判断子类实例和父类的关系。
//      （2）所有子类实例都有包含一份父类实例，并不共享。
var SuperType = function() {};
var SubType = function() {
    SuperType.bind(this)(/* 在此处传入参数 */);
}

// 组合继承：类式继承 + 构造函数继承
// 缺点：第一次调用子类构造函数后，子类 prototype 指向父类实例。之后每次调用都会再次创建一次父类实例。
var SuperType = function() {};
SuperType.prototype.newMethod = function () {};

var SubType = function() {
    SuperType.bind(this)(/* 在此处传入参数 */);
}
SubType.prototype = new SuperType();

// 原型式继承：本质上还是类式继承，只不过换了一种实现方式。ES5的Object.create()实现了这种继承方法。
// 缺点：本质上还是类式继承，因此缺点和类式继承一样。
var createSubInstance = function(SuperInstance) {
    let SubType = function() {}
    SubType.prototype = SuperInstance;
    return new SubType();
}

// 寄生式继承：对原型式继承的二次封装，对父类实例进行增强后返回，作为子类实例。
// 缺点：和构造函数继承类似，无法实现函数复用。
var createSubInstance = function(SuperInstance) {
    let SubInstance = Object.create(SuperInstance);
    SubInstance.newMethod = function() {};
    return SubInstance;
}

// 寄生组合式继承：既然要继承父类原型的方法和属性，那么就只需要父类的原型即可。
var SuperType = function() {};
var SubType = function() {
    SuperType.bind(this)(/* 在此处传入参数 */)
};
// 继承父类原型
SubType.prototype = Object.create(SuperType.prototype);
// 修正父类原型构造函数指针的指向
SubType.prototype.constroctor = SubType

// extends 关键字：ES6的class继承某个类时采用的是寄生组合式继承。