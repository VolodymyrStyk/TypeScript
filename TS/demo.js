"use strict";
exports.__esModule = true;
var User_1 = require("./demo2/User");
var Wife_1 = require("./demo2/Wife");
function foo(user) {
    user.name.toUpperCase();
    user.greeting();
    console.log(user.wife);
    user.wife.action();
}
foo(new User_1.User('kokos', 23, ['asd', 'qwe'], new Wife_1.Wife('koks', 2)));
var wife = new Wife_1.Wife('oksana', 33);
var user = new User_1.User('andrii', 33, ['qwe', 'asd'], wife);
foo(user);
