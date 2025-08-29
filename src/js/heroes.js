export class Character {
    constructor(name, type, attack, defence) {
        const heroes = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
        ]

        if ( name && 2 <= name.length <= 10 ) { this.name = name } 
        else 
        { throw new Error('Name must have lenght from 2 to 10 symbols') };
        if ( heroes.includes(type) ) { this.type = type } 
        else 
        { throw new Error("Don't right type of person") };

        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }

levelUp() {
        if ( this.health >= 0 ) {
            this.level++;
            this.attack = this.attack + this.attack * 0.2;
            this.defence = this.defence + this.defence * 0.2;
            this.health = 100;
        } else { throw new Error("person dont live") }

    }

damage(points) {
        if ( this.health >= 0 ) {
            this.health -= points * ( 1 - this.defence / 100 );
        } else { throw new Error('person cant have damages his dead' ) }

    }

}

export class Bowman extends Character{
    constructor(name) {
        super(name, 'Bowman', 25, 25);
    }
}

export class Swordsman extends Character{
    constructor(name) {
        super(name, 'Swordsman', 40, 10);
    }
}

export class Magician extends Character{
    constructor(name) {
        super(name, 'Magician', 10, 40);
    }
}


export class Undead extends Character{
    constructor(name) {
        super(name, 'Undead', 25, 25);
    }
}

export class Zombie extends Character{
    constructor(name) {
        super(name, 'Zombie', 40, 10);
    }
}

export class Daemon extends Character{
    constructor(name) {
        super(name, 'Daemon', 10, 40);
    }
}
