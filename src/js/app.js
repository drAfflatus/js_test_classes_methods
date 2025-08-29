//import { Character } from './heroes';
import { Bowman } from './heroes';
import { Swordsman } from './heroes';
import { Magician } from './heroes';
import { Undead } from './heroes';
import { Zombie } from './heroes';

console.log(new Bowman('BBBB'));
console.log(new Swordsman('SSSS'));
console.log(new Magician('MMMM'));
console.log(new Undead('UUUU'));
console.log(new Zombie('ZZZZ'));
// console.log(new Daemon('DDDD'));

const person = new Zombie('ZZZZ');

person.damage(130);
console.log(person);
person.levelUp();
console.log(person);
