import {VerkhovnaRada} from "./classes/VerkhovnaRada";
import {Party} from "./classes/Party";
import {Deputy} from "./classes/Deputy";
import {Gender} from "./enums/GenderEnum";

// створюємо депутатів class Deputy маємо заповнити 5 полів для депутата.
// name - задаємо імя string
// age - задаємо вік number
// gender - задаємо стать Enum Gender: ('male','female')
// onestyLevel - задаємо на скільки чесний number (0-100);
// minSum - мінімальна сума хабаря.
// isTakeMoney - boolean чи може депутат брати хабар, формується автоматично в залежності від
// чесності депутата. Якщо чесність більше 50 він не може брати хабар
// takeMoney(sum) - метод дачі хабаря, де sum - сума яку ви пропонуєте депутату.
//
const ivan = new Deputy('ivan', 33, Gender.MALE, 10, 100);
const petro = new Deputy('petro', 23, Gender.MALE, 60, 1000);
const vasya = new Deputy('vasya', 45, Gender.MALE, 33, 580);

const mykola = new Deputy('mykola', 23, Gender.MALE, 12, 1100);
const viktor = new Deputy('viktor', 45, Gender.MALE, 56, 500);
const olya = new Deputy('olya', 25, Gender.FEMALE, 10, 1000);

const taras = new Deputy('taras', 60, Gender.MALE, 60, 1000);
const igor = new Deputy('igor', 55, Gender.MALE, 33, 50);
const vova = new Deputy('vova', 27, Gender.MALE, 88, 1100);

const olena = new Deputy('olena', 32, Gender.FEMALE, 3, 500);
const vika = new Deputy('vika', 33, Gender.FEMALE, 1, 500);
const maria = new Deputy('maria', 45, Gender.FEMALE, 2, 500);
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
const zeleno = new Party('Zeleno', ivan, [ivan, petro, vasya]);
const molodo = new Party('Molodo', mykola, [mykola, olya]);
molodo.addNewDeputy(viktor);
const pravda = new Party('Pravda', vova, [taras, igor, vova]);
const nepravda = new Party('Nepravda', maria, [olena, vika, maria]);
nepravda.showAllWhoTakeMoney();
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
const verhovnaRadaI = new VerkhovnaRada([zeleno, pravda, nepravda], mykola);
verhovnaRadaI.addNewParty(molodo);
verhovnaRadaI.showMoneyTakerSuperstarOfAll();
console.log(verhovnaRadaI.showMoneyTakerSuperstarOfAll());
