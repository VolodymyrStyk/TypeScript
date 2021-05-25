"use strict";
exports.__esModule = true;
var VerkhovnaRada_1 = require("./classes/VerkhovnaRada");
var Party_1 = require("./classes/Party");
var Deputy_1 = require("./classes/Deputy");
var GenderEnum_1 = require("./enums/GenderEnum");
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
var ivan = new Deputy_1.Deputy('ivan', 33, GenderEnum_1.Gender.MALE, 10, 100);
var petro = new Deputy_1.Deputy('petro', 23, GenderEnum_1.Gender.MALE, 60, 1000);
var vasya = new Deputy_1.Deputy('vasya', 45, GenderEnum_1.Gender.MALE, 33, 580);
var mykola = new Deputy_1.Deputy('mykola', 23, GenderEnum_1.Gender.MALE, 12, 1100);
var viktor = new Deputy_1.Deputy('viktor', 45, GenderEnum_1.Gender.MALE, 56, 500);
var olya = new Deputy_1.Deputy('olya', 25, GenderEnum_1.Gender.FEMALE, 10, 1000);
var taras = new Deputy_1.Deputy('taras', 60, GenderEnum_1.Gender.MALE, 60, 1000);
var igor = new Deputy_1.Deputy('igor', 55, GenderEnum_1.Gender.MALE, 33, 50);
var vova = new Deputy_1.Deputy('vova', 27, GenderEnum_1.Gender.MALE, 88, 1100);
var olena = new Deputy_1.Deputy('olena', 32, GenderEnum_1.Gender.FEMALE, 3, 500);
var vika = new Deputy_1.Deputy('vika', 33, GenderEnum_1.Gender.FEMALE, 1, 500);
var maria = new Deputy_1.Deputy('maria', 45, GenderEnum_1.Gender.FEMALE, 2, 500);
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
var zeleno = new Party_1.Party('Zeleno', ivan, [ivan, petro, vasya]);
var molodo = new Party_1.Party('Molodo', mykola, [mykola, olya]);
molodo.addNewDeputy(viktor);
var pravda = new Party_1.Party('Pravda', vova, [taras, igor, vova]);
var nepravda = new Party_1.Party('Nepravda', maria, [olena, vika, maria]);
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
var verhovnaRadaI = new VerkhovnaRada_1.VerkhovnaRada([zeleno, pravda, nepravda], mykola);
verhovnaRadaI.addNewParty(molodo);
verhovnaRadaI.showMoneyTakerSuperstarOfAll();
console.log(verhovnaRadaI.showMoneyTakerSuperstarOfAll());
console.log(mykola.takeMoney(1250));
console.log(molodo.showAllDeputies());
