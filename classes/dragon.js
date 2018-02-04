/**
 * Created by janschmutz on 04.02.18.
 */
var Character = require('./character');

module.exports = class Dragon extends Character{
    constructor(name, verteidigung, angriff) {
        super(name, verteidigung, angriff, 'Dragon');
    }
    speak() {
        console.log(this);
    }
}