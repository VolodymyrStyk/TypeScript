import {VerkhovnaRada} from "./classes/VerkhovnaRada";
import {Party} from "./classes/Party";
import {Deputy} from "./classes/Deputy";

// створюємо депутатів class Deputy маємо заповнити 5 полів для депутата.
// name - задаємо імя string
// age - задаємо вік number
// gender - задаємо стать string ('male','female')
// onestyLevel - задаємо на скільки чесний number (0-100);
// minSum - мінімальна сума хабаря.
// isTakeMoney - boolean чи може депутат брати хабар, формується автоматично в залежності від
// чесності депутата. Якщо чесність більше 50 він не може брати хабар
// takeMoney(sum) - метод дачі хабаря, де sum - сума яку ви пропонуєте депутату.
//
const ivan: Deputy = new Deputy('ivan', 33, 'male', 10, 100);
const petro: Deputy = new Deputy('petro', 23, 'male', 60, 1000);
const vasya: Deputy = new Deputy('vasya', 45, 'male', 33, 580);

const mykola: Deputy = new Deputy('mykola', 23, 'male', 12, 1100);
const viktor: Deputy = new Deputy('viktor', 45, 'male', 56, 500);
const olya: Deputy = new Deputy('olya', 25, 'female', 10, 1000);

const taras: Deputy = new Deputy('taras', 60, 'male', 60, 1000);
const igor: Deputy = new Deputy('igor', 55, 'male', 33, 50);
const vova: Deputy = new Deputy('vova', 27, 'male', 88, 1100);

const olena: Deputy = new Deputy('olena', 32, 'female', 3, 500);
const vika: Deputy = new Deputy('vika', 33, 'female', 1, 500);
const maria: Deputy = new Deputy('maria', 45, 'female', 2, 500);
//
// створюємо партії class Party маємо заповнти 3 поля для партії.
// name - задаємо імя партії string
// mainMember - тип Deputy задаємо відносно створених раніше депутатів;
// partyMembers - записуємо масив депутатів які будуть в даній партіїї Array<Deputy> -> [deputy1,...]
// addNewDeputy(Deputy) - метод який дозволяє додати нового депутата до створеної партії приймає аргумент типу Deputy
// delDeputy(Deputy) -  метод який дозволяє видалити конкретного депутата приймає аргумент типу Deputy
// showAllDeputies() - виводить масив обєктів всіх учасників партії
// showAllWhotakeMoney() - показує всіх хабарників партії
// showMoneyTakerSuperstar() - виводить головного хабарника партії.
//
const zeleno: Party = new Party('Zeleno', ivan, [ivan, petro, vasya]);
const molodo: Party = new Party('Molodo', mykola, [mykola, olya]);
molodo.addNewDeputy(viktor);
const pravda: Party = new Party('Pravda', vova, [taras, igor, vova]);
const kryvda: Party = new Party('Kryvda', maria, [olena, vika, maria]);
kryvda.showAllWhoTakeMoney();
//
// створюємо партії class VerkhovnaRada маємо задати 2 поля.
// radaParties - записуємо масив партій які будуть в даній Раді Array<Party> -> [party1,...]
// radaSpeaker - записуємо спікера тип Deputy.
// addNewParty(Party) - метод який дозволяє додати нову партії до Ради типу Party
// delParty(Party) - метод який дозволяє вдалит певну партію з Ради типу Party.
// showAllParties() - виводить масив обєктів всіх партій Ради.
// showSomeParty(Party) - дозволяє вивести конкретну партії з Ради
// showMoneyTakerSuperstarOfAll() - виводить головного хабарника Ради.
//
const verhovnaRadaI: VerkhovnaRada = new VerkhovnaRada([zeleno, pravda, kryvda], mykola);
verhovnaRadaI.addNewParty(molodo);
verhovnaRadaI.showMoneyTakerSuperstarOfAll();
console.log(verhovnaRadaI.showMoneyTakerSuperstarOfAll());