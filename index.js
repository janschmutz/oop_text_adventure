/**
 * Created by janschmutz on 03.02.18.
 */

console.log('Willkommen im Text Adventure! Bitte erstelle nun zunächst deinen Chrakter\n');


var prompt = require('prompt-sync')();
var Player = require('./classes/player');
var Dragon = require('./classes/dragon');

var name = prompt('Wie heist du Jüngling?: ');

var myPlayer = new Player(name, 1, 1);
console.log('Willkommen '+myPlayer._name+'! Dein Sold ist soeben eingetroffen!   +500 Gold');
myPlayer.gold = 500
console.log(myPlayer);

console.log("Du kommst an einer gefährlich aussehenden Truhe vorbei.\n" +
            "Was willst du als nächstes tun?\n"+
            "A  -  Du öffnest die Truhe\n"+
            "B  -  Du kümmerst dich nicht um die Truhe und läufst weiter\n"
);

var truhe = prompt('Drücke A um die Truhe zu öffnen oder B um weiterzugehen: ');



if (truhe == "a" || truhe == "A") {
    myPlayer.gold = 300;
    console.log("Glückwunsch!, du hast 300 Goldmünzen gefunden   +300 Gold\n")
    console.log(myPlayer);
} else if (truhe == "b" || truhe == "B") {
    console.log("Du bist vorsichtig und gehst lieber weiter. Ob du diese Entscheidung später nicht bereust?\n");
    console.log(myPlayer);
} else {
    console.log("A oder B zu tippen ist schon eine Schwierige Quest. Du bist so verwirrt du stolperst einfach an der Truhe vorbei\n");
    console.log(myPlayer);
}

console.log("Du begegnest einem schäbig aussehendem Händler, der am Ende der Straße seine Waren anbietet\n" +
    "Händler: Haltet ein Reisender, hier ist kein durchkommen, hinter mir lauert ein gefährlicher Drache der die Bewohner der Stadt in Angst und Schrecken versetzt\n" +
    "Du: Fürchtet euch nicht, ich werde euch helfen dieses gefährlich Biest zur Strecke zu bringen!\n" +
    "Händler: Ich danke euch, doch ich fürchte ohne Ausrüstung werdet ihr dem mörderischem Atem des Drachen nichts entgegenzusetzen haben. Ich kann euch allerdings einen Panzer und ein Schwert verkaufen. Hier, dies ist eine Auswahl meiner Panzer:\n" +
    "A  -  Mittlerer Panzer - 300 Gold - +3 Rüstung\n" +
    "B  -  Goldener Torso   - 400 Gold - +4 Rüstung\n" +
    "C  -  Drachenrüstung   - 500 Gold - +5 Rüstung\n" +
    "D  -  Nichts\n"
)
var panzer = prompt('Wähle A, B oder C aber behalte deinen Goldvorat im Auge: ');

var test = myPlayer.ruestung(panzer);

console.log(myPlayer);
weapon();
function weapon() {
    console.log("Händler: Gute Wahl! und hier nun eine Auswahl meiner feinsten Waffen\n" +
        "A  -  Rostige Axt  - 300 Gold - +3 Angriff\n" +
        "B  -  Langschwert  - 400 Gold - +4 Angriff\n" +
        "C  -  Diamantlanze - 500 Gold - +5 Angriff\n" +
        "D  -  Nichts\n"
    );
    var waffe = prompt('Wähle A, B oder C aber behalte deinen Goldvorat im Auge: ');
    var nope = myPlayer.waffe(waffe);
    if (nope == false) {
        console.log('Du hast nicht genug Geld. Wähle etwas billigeres oder nichts');
        weapon();
    }
}

console.log('Gut vorbereited trittst du nun dem mächtigen Drachen entgegen');

var dragonFoe = new Dragon('Artonix der Mächtige', 3, 3);
dragonFoe.speak();


console.log('\n To be continued ....');


