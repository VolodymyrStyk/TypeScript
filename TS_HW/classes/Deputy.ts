export class Deputy {
    name: string;
    age: number;
    gender: string = 'input male or female'; //'Male' || 'Female'
    onestyLevel: number; // 0-100
    minSum: number;
    isTakeMoney: boolean;

    constructor(name, age, gender, onestyLevel, minSum) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.onestyLevel = onestyLevel;
        (onestyLevel < 50) ? this.isTakeMoney = true : this.isTakeMoney = false;
        this.minSum = minSum;
    }

    takeMoney(sum): string {
        let deputyAction: string = 'Deputy is onesty';
        if (this.isTakeMoney) {
            if (this.minSum > sum) {
                deputyAction = 'fail! Deputy didn"t take money';
            }
            if (sum > this.minSum && sum < this.minSum * 1.1) {
                deputyAction = 'thinking! Deputy didn"t take money it is not enough!';
            }
            if (sum > this.minSum * 1.1) {
                deputyAction = 'Deputy took your money!'
            }
        }
        return deputyAction;
    }
}