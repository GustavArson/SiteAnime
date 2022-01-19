const question = [
    { id: 0, question: "Question 1", reponseExact: "1", reponse1: "TOTO", reponse2: "Michou", reponse3: "Fortnite", fait: false },
    { id: 1, question: "Question 2", reponseExact: "2", reponse1: "reponse 1", reponse2: "reponse 2", reponse3: "reponse 3", fait: false },
    { id: 2, question: "Question 3", reponseExact: "3", reponse1: "reponse 1", reponse2: "reponse 2", reponse3: "reponse 3", fait: false },
]
let rep = ""

let win = 0
let loose = 0

console.log(win)
console.log(loose)
console.log(question.length)
document.getElementById("result").innerHTML = ` `
document.getElementById("win").innerHTML = ` `
document.getElementById("loose").innerHTML = ` `

let finGame = false
let check = false
let error = false

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let startBTN = document.getElementById("startBTN");
startBTN.onclick = function() {
    alert(`Les règles sont simples : Vous avez ${question.length} questions qui vont vous être posées. Si vous répondez juste, vous gagnez un point, sinon vous ne gagnez pas de point. Le but est d'avoir au minimum ${parseInt((question.length + 1)/2)} points. Si vous avez la moyenne, vous débloquez le badge du meilleur weebo de la planète. Si vous n'avez pas la moyenne vous êtes tous simplement "une merde" 
Appuyez sur OK pour continuer`)
    check = true
    console.log(`check = ${check}`)
    start()
}




function start() {




    while (finGame === false && error === false && check === true) {

        //MODULE DE QUESTION
        let numQuestion = getRandomInt(question.length)
        console.log(`Question numéro ${numQuestion + 1}`)

        let questionBTN = document.getElementById("questionHTML").innerHTML = `${question[numQuestion].question}`;
        console.log(`question : ${questionBTN}`)

        let repBTN1 = document.getElementById("rep1").innerHTML = `${question[numQuestion].reponse1}`;
        console.log(`réponse : ${repBTN1}`)

        let repBTN2 = document.getElementById("rep2").innerHTML = `${question[numQuestion].reponse2}`;
        console.log(`réponse : ${repBTN2}`)

        let repBTN3 = document.getElementById("rep3").innerHTML = `${question[numQuestion].reponse3}`;
        console.log(`réponse : ${repBTN3}`)

        let repJoueur;


        // repBTN1.onclick = function() {
        //     repJoueur = question[numQuestion].reponse1
        // }
        // repBTN2.onclick = function() {
        //     repJoueur = question[numQuestion].reponse2
        // }
        // repBTN3.onclick = function() {
        //     repJoueur = question[numQuestion].reponse3
        // }

        console.log(`Le joueur à répondu : ${repJoueur}`)

        if ((error === false) && (numQuestion <= question.length) && (question[numQuestion].fait === false)) {

            console.log(`Question numéro ${numQuestion}`)
                // alert(`Question : ${question[numQuestion].question}`)
            question[numQuestion].fait = true
            console.log(`esque la question numero ${numQuestion} est faite ? ${question[numQuestion].fait}`)

            finGame = true
            console.log(`Fin game ? ${finGame}`)

            // if (question[numQueston].reponseExact == ) {

            // }


        } else {
            console.log(`Numéro : ${numQuestion} n'est pas valable`)
            error = true
        }



        // MODULE DE VERIF REPONSE


        // MODULE D'AJOUT DE POINT



    }
}