export default class Character {
    constructor(name, type) {
        function error(a) {throw new Error(a)}
        
        name.length < 2 || name.length > 10 ?  error('Неверная длина имени') : this.name = name;

        const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
        !types.includes(type) ? error('Неверный тип персонажа') : this.type = type;

        this.health = 100;
        this.level = 1;
    }
}