// 安全模式：判断this是否指向当前函数，从而避免忘记添加new关键字时，添加全局变量的问题。
let Book = function(title, author) {
    // 判断是否调用方式是否缺少new关键字
    // new调用时，this指向新创建的对象，其prototype
    if(this instanceof Book) {
        return Book(title, author)
    }
    return new Book(title, author)
}

Book = (title, author) => {
    console.log(this instanceof Book)
    // if(this instanceof Book) {
    //     return Book(title, author)
    // }
    // return new Book(title, author)
}