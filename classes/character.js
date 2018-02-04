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
    speak() {
        console.log(this);
    }
}