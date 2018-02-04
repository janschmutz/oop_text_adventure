/**
 * Created by janschmutz on 03.02.18.
 */
var Character = require('./character');

module.exports = class Player extends Character{
    constructor(name, verteidigung, angriff) {
        super(name, verteidigung, angriff, 'Player')
    }
    speak() {
        console.log(this);
    }
    checkGold(gold) {
        return this._gold + gold >= 0;
    }
    set gold(gold){
        this._gold = this._gold + gold;
    }
    ruestung(armor) {
        var myArmor;
        if(armor == 'a' || armor == 'A') {
            if (this.checkGold(-300) == false) return false;
            myArmor = 'Mittlerer Panzer';
            this.gold = -300;
            this._verteidigung = this._verteidigung + 3;
            console.log('-300 Gold | +3 Verteidigung');
        } else if (armor == 'b' || armor == 'B') {
            if (this.checkGold(-400) == false) return false;
            myArmor = 'Goldener Torso';
            this.gold = -400;
            this._verteidigung = this._verteidigung + 4;
            console.log('-400 Gold | +4 Verteidigung');
        } else if (armor == 'c' || armor == 'C') {
            if (this.checkGold(-500) == false) return false;
            myArmor = 'Drachenrüstung'
            this.gold = -500;
            this._verteidigung = this._verteidigung + 5;
            console.log('-500 Gold | +5 Verteidigung');
        } else if (weapon == 'd' || weapon == 'D') {
            console.log('Du hast dich entschieden nichts zu kaufen')
        } else {
            console.log('Diese schwierigen Tastenkombinationen haben dich wohl überfordert, du kaufst nichts. \n');
        }
        this._ruestung = myArmor;
    }
    waffe(weapon) {
        var myWeapon;
        if(weapon == 'a' || weapon == 'A') {
            if (this.checkGold(-300) == false) return false;
            myWeapon = 'Mittlerer Panzer';
            this.gold = -300;
            this._angriff = this._angriff + 3;
            console.log('-300 Gold | +3 Angriff');
        } else if (weapon == 'b' || weapon == 'B') {
            if (this.checkGold(-400) == false) return false;
            myWeapon = 'Goldener Torso';
            this.gold = -400;
            this._angriff = this._angriff + 4;
            console.log('-400 Gold | +4 Angriff');
        } else if (weapon == 'c' || weapon == 'C') {
            if (this.checkGold(-500) == false) return false;
            myWeapon = 'Drachenrüstung'
            this.gold = -500;
            this._angriff = this._angriff + 5;
            console.log('-500 Gold | +5 Angriff');
        } else if (weapon == 'd' || weapon == 'D') {
            console.log('Du hast dich entschieden nichts zu kaufen')
        } else {
            console.log('Diese schwierigen Tastenkombinationen haben dich wohl überfordert, du kaufst nichts. \n');
        }
        this._waffe = myWeapon;
    }
}