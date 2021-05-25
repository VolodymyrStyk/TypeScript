import {User} from "./demo2/User";
import {Wife} from "./demo2/Wife";

function foo(user: User) {
    user.name.toUpperCase();
    user.greeting();
    console.log(user.wife);
    user.wife.action();
}


foo(new User('kokos', 23, ['asd', 'qwe'], new Wife('koks', 2)));

let wife = new Wife('oksana', 33);
let user = new User('andrii', 33, ['qwe', 'asd'], wife);

foo(user);

interface IUser {
    name: string,
    age: number
}

let petro: IUser = {
    name: 'petro',
    age: 33
}