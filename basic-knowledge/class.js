// 类语法：类语法是ES6的一个语法糖，其所有功能都可以用ES5实现，以下两种写法完全一样。
// ES5语法
var Book = function(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype = {
    getTitle: function() {
        console.log(this.title);
    }
}

// ES6语法
// 采用这种语法创建类时，不需要安全模式。因为其会在调用时自动检测是否缺少new关键字，若是，则抛出一个错误。
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getTitle() {
        console.log(this.title);
    }
}