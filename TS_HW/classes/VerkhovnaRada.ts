import {Party} from "./Party";
import {Deputy} from "./Deputy";

export class VerkhovnaRada {
    radaParties: Array<Party>;
    radaSpeaker: Deputy;

    constructor(radaParties: Array<Party>, radaSpeaker: Deputy) {
        this.radaParties = radaParties;
        this.radaSpeaker = radaSpeaker;
    }

    addNewParty(party: Party): void {
        this.radaParties.push(party);
    }

    delParty(party: Party): Array<Party> {
        return this.radaParties = this.radaParties.filter(value => value !== party);
    }

    showAllParties(): Array<Party> {
        return this.radaParties;
    }

    showSomeParty(party: Party):Array<Party> {
        return this.radaParties.filter(value => value === party);
    }

    showMoneyTakerSuperstarOfAll(): Deputy {
        let arrMoneyTaker: Array<Deputy> | Deputy = [];
        for (const parties of this.radaParties) {
            arrMoneyTaker.push(parties.showMoneyTakerSuperstar());
        }
        arrMoneyTaker.sort((a, b) => {
            return b.minSum - a.minSum;
        });
        return arrMoneyTaker[0];
    }
}