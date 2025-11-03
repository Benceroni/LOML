questions = [
    {
        topic: "Guess Who",
        questions : [
            {
                question: "Who made the firstmove on their first kiss? Josiah or Bailey",
                answer: "Bailey",
                points: 100,
                show: true,
                double: false
            },
            {
                question : "Who said I love you first?",
                answer : "Josiah",
                points : 200,
                show: true,
                double: true
            },
            {
                question : "Who made the first move? Josiah or Bailey?",
                answer : "Josiah",
                points : 300,
                show: true,
                double: false
            },
            {
                question : "Who’s favorite date is:<br>Valentine’s Mexican date<br>the first time they cooked together",
                answer : "Valentines Mexican- Josiah<br>First time cooking together- Bailey",
                points : 400,
                show: true,
                double: false
            },
            {
                question : "Who said it best, Josiah or Bailey?",
                answer : "Bailey",
                points : 500,
                show: true,
                double: true
            }
            ]
    },
    {
        topic: "The Couple",
        questions : [
            {
                question: "how old was bailey when?",
                answer: "12",
                points: 300,
                show: true,
                double: false
            },
            {
                question : "how much did bailey",
                answer : "144",
                points : 200,
                show: true,
                double: false
            }
            ]
    }

]

boardHeader = document.querySelector("#boardTitles")
gameBoard = document.querySelector("#board")

questions.forEach(i => {
    boardHeader.innerHTML += buildTopicBlock(i.topic);
});

function renderAllBlocks(){
    questions.forEach(topic => {
        
        topic.questions.forEach(element => {
            gameBoard.innerHTML += `<p>${element.points}</p>`
        });
    });
}

renderAllBlocks();

function buildBlock(points){
    return `<button type="button" class="block" onclick="showQuestion(${question},)">${points}</button>`
}

function buildEmptyBlock(){
    return `<div class="emptyBlock"></div>`
}

function buildTopicBlock(topicName){
    return `<h3 class="topicHeading">${topicName}</h3>`
}

function showQuestion(question,points){


}

function resetBoard(){
    document.querySelector("main").innerHTML =`<div id="boardTitles"></div><div id="board"></div>`
}