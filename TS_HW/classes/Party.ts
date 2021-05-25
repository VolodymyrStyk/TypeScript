import {Deputy} from "./Deputy";

export class Party {
    name: string;
    mainMember: Deputy;
    partyMembers: Array<Deputy>;

    constructor(name, mainMember, partyMembers) {
        this.name = name;
        this.mainMember = mainMember;
        this.partyMembers = partyMembers;
    }

    addNewDeputy(deputy: Deputy): void {
        this.partyMembers.push(deputy);
    }

    delDeputy(deputy: Deputy): Array<Deputy> {
        return this.partyMembers = this.partyMembers.filter(value => value !== deputy);
    }

    showAllDeputies(): Array<Deputy> {
        return this.partyMembers;
    }

    showAllWhoTakeMoney(): Array<Deputy> | Deputy {
        return this.partyMembers.filter(value => value.isTakeMoney === true);
    }

    showMoneyTakerSuperstar(): Deputy {
        let deputy = this.partyMembers.filter(value => value.isTakeMoney === true).sort((a, b) => {
            return b.minSum - a.minSum;
        })
        return deputy[0]
    }
}