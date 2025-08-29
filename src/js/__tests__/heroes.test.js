import { Character } from '../heroes'
import { Bowman } from '../heroes'
import { Swordsman } from '../heroes'
import { Magician } from '../heroes'
import { Daemon } from '../heroes'
import { Undead } from '../heroes'
import { Zombie } from '../heroes'

test('search errors', () => {
    expect(function() {
        new Zombie('')
    }).toThrow(new Error('Name must have lenght from 2 to 10 symbols'));

    expect(function() {
        new Character('homo', '')
    }).toThrow(new Error("Don't right type of person"));

});

test('test for objects', () => {

    expect(new Character('Monster', 'Daemon')).toEqual({
        name: 'Monster',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: undefined,
        defence: undefined
    });

    expect(new Bowman('BBBB')).toEqual({
        name: 'BBBB',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });

    expect(new Swordsman('SSSS')).toEqual({
        name: 'SSSS',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });

    expect(new Magician('MMMM')).toEqual({
        name: 'MMMM',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });

    expect(new Daemon('DDDD')).toEqual({
        name: 'DDDD',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });

    expect(new Undead('UUUU')).toEqual({
        name: 'UUUU',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });

    expect(new Zombie('ZZZZ')).toEqual({
        name: 'ZZZZ',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });

});



test('revision of health and level', () => {
    let pers = new Zombie('ZZZZ')
    pers.levelUp()
    expect(pers).toEqual({
        name: 'ZZZZ',
        type: 'Zombie',
        health: 100,
        level: 2,
        attack: 48,
        defence: 12
    });

    let pers1 = new Zombie('ZZZZ')
    pers1.damage(30);
    expect(pers1).toEqual({
        name: 'ZZZZ',
        type: 'Zombie',
        health: 73,
        level: 1,
        attack: 40,
        defence: 10
    });


    pers1.damage(200);
    expect(function() {
        pers1.levelUp();
    }).toThrow(new Error("person dont live"));

    expect(function() {
        pers1.damage(10);
    }).toThrow(new Error("person cant have damages his dead"));


    
})


