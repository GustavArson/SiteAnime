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

let questionIndex = document.getElementById('question');
let rep1 = document.getElementById('rep1');
rep1.onclick = function() {
    console.log(rep1.innerHTML)
}
let rep2 = document.getElementById('rep2');
rep2.onclick = function() {
    console.log(rep2.innerHTML)
}
let rep3 = document.getElementById('rep3');
rep3.onclick = function() {
    console.log(rep3.innerHTML)
}
let rep4 = document.getElementById('rep4');
rep4.onclick = function() {
    console.log(rep4.innerHTML)
}

console.log(`question : ${questionIndex}`)
console.log(`reponse 1 : ${rep1}`)
console.log(`reponse 2 : ${rep2}`)
console.log(`reponse 3 : ${rep3}`)
console.log(`reponse 4 : ${rep4}`)



let win = 0
let loose = 0

console.log(win)
console.log(loose)
console.log(question.length)

let finGame = false
let check = false

let QR = document.getElementById('QR');
let start = document.getElementById('start');
start.onclick = function() {
    check = true
    start.style["display"] = "none"
    QR.style["display"] = "block"
        ////////////////////////////////
}