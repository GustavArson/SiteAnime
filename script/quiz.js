const questionRep = [
    { id: 1, question: "Qu'est que le JavaScript ?", reponse: "Un langage de programmation", rep1: "Un langage de programmation", rep2: "Un mammifère", rep3: "Une clé de 13", rep4: "Une application" },
    { id: 2, question: "Comment créer un tableau ?", reponse: "Avec des crochets []", rep1: "Avec de la peinture", rep2: "Avec des parenthèse ()", rep3: "Avec des crochets []", rep4: "Avec des accolades {}" },
    { id: 3, question: "Comment crée une section avec 2 article avec 3 div a l'intèrieur et 18paragraphes dans chaque div ?", reponse: "section&gt;article*2&gt;div*3&gt;p*18", rep1: "section > article*2 > div*3 > p*18", rep2: "section&gt;article*2&gt;div*3&gt;p*18", rep3: "section / article*2 / div*3 / p*18", rep4: "section|article*2|div*3|p*18" },
    { id: 4, question: "Avec quel langage de programmation est-il possible de faire un site web dynamique ?", reponse: "PHP", rep1: "HTML", rep2: "CSS", rep3: "PHP", rep4: "wordpad" },
    { id: 5, question: "Quelle est la première balise à toujours mettre dans une page web ?", reponse: "&lt;!DOCTYPE&gt;", rep1: "&lt;html&gt;", rep2: "&lt;!DOCTYPE&gt;", rep3: "&lt;meta&gt;", rep4: "&lt;script&gt;" },
    { id: 6, question: "Ou va la balise &lt;script&gt; dans une page html ?", reponse: "après le &lt;body&gt;", rep1: "après le &lt;body&gt;", rep2: "dans le &lt;head&gt;", rep3: "dans le &lt;main&gt;", rep4: "dans le &lt;footer&gt;" },
    { id: 7, question: "Que fait document.write ?", reponse: "il écrit son contenu sur la page", rep1: "il écrit son contenu dans les logs", rep2: "il écrit son contenu dans le html", rep3: "document.write n'existe pas", rep4: "il écrit son contenu sur la page" },
    { id: 8, question: "Quelle est la différence entre une variable de type let et const ?", reponse: "const doit forcément avoir au moins une propriété", rep1: "const doit forcément avoir au moins une propriété", rep2: "const n'existe pas", rep3: "let doit forcément avoir une propriété de type boolean", rep4: "aucune différence" },
    { id: 9, question: "Combien y'a t'il d'exercices dans Squid Game ?", reponse: "7", rep1: "0", rep2: "2 147 483 647", rep3: "7", rep4: "7 922 939 325" },
    { id: 10, question: "Est-ce-que Taïwan existe ?", reponse: "non", rep1: "oui", rep2: "non", rep3: "peut-ëtre", rep4: "La réponse D" },
]


let win = 0
let loose = 0

console.log(questionRep.length)

let finGame = false
let check = false
let checkRep = false
let rep = ""


var i = 0

// Fonction sleep

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// Ont définie la question et les réponse associé dans le code html

function question(i) {
    document.getElementById('question').innerHTML = questionRep[i].question
    document.getElementById('rep1').innerHTML = questionRep[i].rep1
    document.getElementById('rep2').innerHTML = questionRep[i].rep2
    document.getElementById('rep3').innerHTML = questionRep[i].rep3
    document.getElementById('rep4').innerHTML = questionRep[i].rep4
}

// Boutons de réponse onClick
let rep1 = document.getElementById('rep1');
rep1.onclick = function() {
    rep = document.getElementById('rep1').innerHTML;
    console.log(rep)
    checkRep = true
    console.log(`Check Rep = ${checkRep}`)
}

let rep2 = document.getElementById('rep2');
rep2.onclick = function() {
    rep = document.getElementById('rep2').innerHTML;
    console.log(rep)
    checkRep = true
    console.log(`Check Rep = ${checkRep}`)
}

let rep3 = document.getElementById('rep3');
rep3.onclick = function() {
    rep = document.getElementById('rep3').innerHTML;
    console.log(rep)
    checkRep = true
    console.log(`Check Rep = ${checkRep}`)
}

let rep4 = document.getElementById('rep4');
rep4.onclick = function() {
    rep = document.getElementById('rep4').innerHTML;
    console.log(rep)
    checkRep = true
    console.log(`Check Rep = ${checkRep}`)
}

// Module de vérification si la réponse donner est bien la bonne

function moduleRep(i) {
    while (checkRep === true) {
        if (rep === questionRep[i].reponse) {
            win++
            console.log(`Nombre de win ${win}`)
            checkRep = false
        } else {
            loose++
            console.log(`Nombre de loose ${loose}`)
            checkRep = false
        }
    }
}

// GAME LOGIC 

let QR = document.getElementById('QR');
let start = document.getElementById('start');
start.onclick = async function() {
    check = true
    start.style["display"] = "none"
    QR.style["display"] = "block"

    var game = 0;

    while (check === true) {

        if (win + loose < questionRep.length) {
            question(game)
            while (checkRep === false) {
                await sleep(100);
                console.log("sleep")
            }
            moduleRep(game)
            game++
        } else if (win + loose === questionRep.length) {
            check = false
            alert(`Le quizz est fini ton score est de ${win}/${questionRep.length} réponse juste`)
        }

    }

}