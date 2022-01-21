const question = [
    { id: 1, question: "Question 1", reponse: "1" },
    { id: 2, question: "Question 2", reponse: "2" },
    { id: 3, question: "Question 3", reponse: "3" },
    { id: 4, question: "Question 4", reponse: "4" },
    { id: 5, question: "Question 5", reponse: "5" },
    { id: 6, question: "Question 6", reponse: "6" },
    { id: 7, question: "Question 7", reponse: "7" },
    { id: 8, question: "Question 8", reponse: "8" },
    { id: 9, question: "Question 9", reponse: "9" },
    { id: 10, question: "Question 10", reponse: "10" },
]

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

let button = document.querySelector('button');
button.onclick = function() {
    alert(`Les règles sont simples : Vous avez ${question.length} questions qui vont vous être posées. Si vous répondez juste, vous gagnez un point, sinon vous ne gagnez pas de point. Le but est d'avoir au minimum ${parseInt((question.length + 1)/2)} points. Si vous avez la moyenne, vous débloquez le badge du meilleur weebo de la planète. Si vous n'avez pas la moyenne vous êtes tous simplement "une merde" 
Appuyez sur OK pour continuer`)
    check = true
    console.log(check)

    while (finGame === false && check === true) {
        for (let i = 0; i < question.length; i++) {
            console.log(i)
            const prompt = window.prompt(`Question ${question[i].id}: ${question[i].question}`)
            if (i < question.length - 1) {
                if (prompt == question[i].reponse) {
                    win++
                    alert("Réponse juste bravo !")
                } else {
                    loose++
                    alert("Réponse fausse, vous n'etes pas un vrai kawaii weebo")
                }
            } else {
                if (prompt == question[i].reponse) {
                    win++
                    alert("Réponse juste bravo !")
                    finGame = true
                    console.log("Fin du jeu")
                } else {
                    loose++
                    alert("Réponse fausse, vous n'etes pas un vrai kawaii weebo")
                    finGame = true
                    console.log("Fin du jeu")
                }
            }
        }
        console.log(`Votre nombre de win : ${win}`)
        console.log(`Votre nombre de loose : ${loose}`)

    }

    if (win >= loose) {
        document.getElementById("result").innerHTML = `Vous êtes un gros weebo`
        document.getElementById("win").innerHTML = `Votre résultat : ${win} win`
        document.getElementById("loose").innerHTML = ` et ${loose} loose`
    } else {
        document.getElementById("result").innerHTML = `Vous êtes une merde`
        document.getElementById("win").innerHTML = `Votre résultat : ${win} win`
        document.getElementById("loose").innerHTML = ` et ${loose} loose`
    }

};