// UNIQUEMENT CHANGER LES PARAMETRES DE LA CONST QUESTION MERCI :
// id : ajouter +1 a chaque fois que vous voulez rajouter une question
// question : la question
// reponseExact : la réponse que doit donner le joueur pour gagner
// reponse1, 2, 3 : les propositions de reponse pour la question (il ne peut y en avoir que 3)
// fait : Juste pour savoir si la question a deja etait demander ou non (NE PAS TOUCHER)

const question = [
    { id: 0, question: "Question 1", reponseExact: "TOTO", reponse1: "TOTO", reponse2: "Michou", reponse3: "Fortnite", fait: false },
    { id: 1, question: "Question 2", reponseExact: "Hello", reponse1: "Salut", reponse2: "Hello", reponse3: "Bonjour", fait: false },
    { id: 2, question: "Question 3", reponseExact: "J'adore les grosses saucisses", reponse1: "j'aime les nouilles", reponse2: "Je hais les tomates", reponse3: "J'adore les grosses saucisses", fait: false },
]
let rep = ""

let win = 0
let loose = 0

console.log(`Défault win : ${win}`)
console.log(`Défault loose : ${loose}`)
console.log(`Il y a ${question.length} question sur le jeu`)
document.getElementById("result").innerHTML = ` `
document.getElementById("win").innerHTML = ` `
document.getElementById("loose").innerHTML = ` `

// finGame : si finGame = true la partie s'arrete 
let finGame = false

// check : check si le bouton "démarrer le test" à était appuyer si oui le jeu commence
let check = false

// error : si il y a une erreur le jeu s'arrete (normalement il ne doit jamais etre sur true)
let error = false

// Fonction pour faire un random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Fonction pour démarré le programme
let startBTN = document.getElementById("startBTN");
startBTN.onclick = function() {
    alert(`Les règles sont simples : Vous avez ${question.length} questions qui vont vous être posées. Si vous répondez juste, vous gagnez un point, sinon vous ne gagnez pas de point. Le but est d'avoir au minimum ${parseInt((question.length + 1)/2)} points. Si vous avez la moyenne, vous débloquez le badge du meilleur weebo de la planète. Si vous n'avez pas la moyenne vous êtes tous simplement "une merde" 
Appuyez sur OK pour continuer`)
    check = true
    console.log(`check = ${check}`)
    start()
}



// début du code du quizz
function start() {

    while (finGame === false && error === false && check === true) {

        //MODULE DE QUESTION

        // choisis une question entre 1 et le nombre max de question
        let numQuestion = getRandomInt(question.length)
        console.log(`Question numéro ${numQuestion + 1}`)

        // affiche le contenu de (question, reponse 1, 2, 3) sur la page
        let questionBTN = document.getElementById("questionHTML").innerHTML = `${question[numQuestion].question}`;
        console.log(`question : ${questionBTN}`)

        let repBTN1 = document.getElementById("rep1").innerHTML = `${question[numQuestion].reponse1}`;
        console.log(`réponse : ${repBTN1}`)

        let repBTN2 = document.getElementById("rep2").innerHTML = `${question[numQuestion].reponse2}`;
        console.log(`réponse : ${repBTN2}`)

        let repBTN3 = document.getElementById("rep3").innerHTML = `${question[numQuestion].reponse3}`;
        console.log(`réponse : ${repBTN3}`)

        // récupère la reponse choisie par le joueur
        let repJoueur = " "
        let repJoueurCheck = false

        while (repJoueurCheck === false) {

            if (document.getElementById("rep1").onclick) {
                repJoueur = question[numQuestion].reponse1
                repJoueurCheck = true
            } else if (document.getElementById("rep2").onclick) {
                repJoueur = question[numQuestion].reponse2
                repJoueurCheck = true
            } else if (document.getElementById("rep3").onclick) {
                repJoueur = question[numQuestion].reponse3
                repJoueurCheck = true
            } else {
                console.log(`Salut salut`)
            }

            console.log(`LOOP ????????`)
        }

        console.log(`Le joueur à répondu : ${repJoueur}`)

        finGame = true





        // MODULE DE VERIF REPONSE


        // MODULE D'AJOUT DE POINT



    }
}