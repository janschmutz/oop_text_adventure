/**
 * Created by janschmutz on 04.02.18.
 */
module.exports = class Character {
    constructor(name, verteidigung, angriff, type) {
        this._type = type;
        this._name = name;
        this._gold = 0;
        this._verteidigung = verteidigung;
        this._ruestung = '';
        this._angriff = angriff;
        this._waffe ='';
        this._leben = 100;
    }
    attack() {
        if (this.random(1, 100) >= 70) {
            console.log('Critical Hit!');
            return this._angriff * 5 * 1.5;
        } else return this._angriff * 5;
    }
    defend(attackVal) {
        var defendVal = this._verteidigung * 5;
        if (attackVal > defendVal) {
            this._leben = this._leben - attackVal;
            console.log('Angriff erfolgreich! -' +attackVal);
        } else console.log('Angriff abgewehrt!');
    }
    random(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
}