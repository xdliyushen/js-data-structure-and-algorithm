// 简单工厂模式：有两种实现方法。最终结果是一样的，传入不同参数，返回不同的对象
// 第一种：传入不同参数，返回已写好的类的新实例
var Book = function(type) {
    switch(type) {
        case 'science fiction': return new ScienceFiction();
        case 'romantic fiction': return new RomanticFiction();
    }
}

// 第二种：传入不同参数，返回在基础上增强的对象
var Book = function(name, author) {
    let o = new Object();
    o.name = name;
    o.author = author;

    o.getName = function() {
        // 若采用这种写法，则不能用箭头函数，否则其this会绑定在该函数中而不是创建的实例中，this.name为undefined。
        console.log(this.name);
    }

    o.getName2 = () => {
        // 若采用这种写法，则可使用箭头函数。
        console.log(name)
    }
    return o;
}