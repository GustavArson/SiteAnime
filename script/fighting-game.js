const face = document.querySelectorAll('.face')
const attaque = document.querySelectorAll('.attaque')
var numComments = face.length;
var Character = 10;
var Nana = { "pv": 400, "one": 250, "two": 400, "name": "Nana" };
var Goku = { "pv": 1000, "one": 50, "two": 250, "name": "Goku" };
var Boruto = { "pv": 700, "one": 100, "two": 250, "name": "Boruto" };
var Luffy = { "pv": 900, "one": 70, "two": 250, "name": "Luffy" };
var Ichigo = { "pv": 800, "one": 150, "two": 200, "name": "Ichigo" };
var Izuku = { "pv": 600, "one": 10, "two": 450, "name": "Izuku" };
var Naruto = { "pv": 1000, "one": 320, "two": 250, "name": "Naruto" };
var Tanjiro = { "pv": 500, "one": 120, "two": 280, "name": "Tanjiro" };
var Random;
var CharacterList = [Boruto, Goku, Luffy, Ichigo, Izuku, Naruto, Tanjiro, Nana, Random];
Random = CharacterList[Math.floor(Math.random() * 8)];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



async function Game(Liste, face, attaque) {
    var Character = 10
    var CPU = Liste[Math.floor(Math.random() * 7 + 1)]
    while (Character != 0 && Character != 1 && Character != 2 && Character != 3 && Character != 4 && Character != 5 && Character != 6 && Character != 7 && Character != 8 && Character != 9) {
        for (var i = 0; i < face.length; i++) {
            face[i].addEventListener('click', event => {
                Character = event.target.id - 1;
            }, false);
            await sleep(100);
        }
    }
    var x = 0
    x = Character
    if (x == 8)
        Character = CharacterList[Math.floor(Math.random() * 8)];
    else 
        Character = Liste[x]
    console.log(`${Character.name} VS ${CPU.name}`)

    if (x == 0 || x == 1 || x == 2 || x == 3 || x == 4 || x == 5 || x == 6 || x == 7 || x == 8 || x == 9) {
        var CharacterMax = Character.pv;
        var CPUMax = CPU.pv
        var y = 1;
        console.log(`Tour ${y}`);
        do {
            var Click_attack = 0;
            for (var i = 0; i < attaque.length; i++) {
                attaque[0].addEventListener('click', event => {
                    Click_attack = 1;
                }, false);
                attaque[1].addEventListener('click', event => {
                    Click_attack = 2;
                }, false);
            }
            await sleep(1000);
            if (Click_attack == 1) {
                CPU.pv = CPU.pv - Character.one;
                console.log(`PV CPU = ${CPU.pv}/${CPUMax}`);
                if (Math.floor(Math.random() * 1 + 1) == 0)
                    Character.pv = Character.pv - CPU.one
                else
                    Character.pv = Character.pv - CPU.two
                console.log(`PV joueur = ${Character.pv}/${CharacterMax}`)
                y = y + 1;
                if (Character.pv > 0 && CPU.pv > 0)
                    console.log(`Tour ${y}`);

            }
            if (Click_attack == 2) {
                CPU.pv = CPU.pv - Character.two;
                console.log(`PV CPU = ${CPU.pv}/${CPUMax}`)
                if (Math.floor(Math.random() * 1) == 0)
                    Character.pv = Character.pv - CPU.one
                else
                    Character.pv = Character.pv - CPU.two
                console.log(`PV joueur = ${Character.pv}/${CharacterMax}`)
                y = y + 1;
                if (Character.pv > 0 && CPU.pv > 0)
                    console.log(`Tour ${y}`);

            }
        }
        while (Character.pv > 0 && CPU.pv > 0)
        if (Character.pv <= 0 && CPU.pv > 0)
            console.log("Partie Terminée, tu as perdu !")
        if (CPU.pv <= 0 && Character.pv > 0)
            console.log("Partie Terminée, tu as gagné !")
        else
            console.log("Egalité !")
    }
}
Game(CharacterList, face, attaque)
