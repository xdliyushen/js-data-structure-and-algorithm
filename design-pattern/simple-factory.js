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
    let o = new Object;
    o.name = name;
    o.author = author;
    o.getName = () => {
        console.log(this.name);
    }
    return o;
}