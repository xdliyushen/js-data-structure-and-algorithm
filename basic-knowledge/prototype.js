// 注意：沿原型链查找属性和方法时，是沿着对象的 __proto__ 属性查找的，而不是沿着 prototype 属性查找的。

// 类式继承：声明两个类，将一个类的实例赋给另一个类的原型。
// 缺点：（1）所有的子类实例都会共享一个原型对象，对其进行的修改会影响所有子类实例。
//      （2）在实例化父类时无法传入参数。
let SuperType = function() {};
let SubType = function() {};
SubType.prototype = new SuperType();

// 构造函数继承：在子类构造函数内部调用父类构造函数，并通过更改this的指向传入参数。
// 缺点：（1）
let SuperType = function() {};
let SubType = function() {
    SuperType.bind(this)(/* 在此处传入参数 */);
}

// // 组合继承：类式继承 + 构造函数继承
// let SuperType = function() {};
// SuperType.prototype.

// 原型式继承：本质上还是类式继承，只不过换了一种实现方式。ES5的Object.create()实现了这种继承方法。
// 寄生式继承：对原型式继承的二次封装。
// 寄生组合式继承：既然要继承父类原型的方法和属性，那么就只需要父类的原型即可。

let a = new SubType();
let b = new SubType();