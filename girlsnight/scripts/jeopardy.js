questions = [
    {
        topic: "Guess Who",
        questions : [
            {
                question: "Who made the first move on their first kiss? Josiah or Bailey",
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
                double: true,
                doubleQuestion:"How far into the relationship did he say it?"
            },
            {
                question : "Who made the first move? Josiah or Bailey?",
                answer : "Josiah",
                points : 300,
                show: true,
                double: false
            },
            {
                question : "Who’s favorite date is: Valentine’s Mexican date",
                answer : "Valentines Mexican- Josiah<br>First time cooking together- Bailey",
                points : 400,
                show: true,
                double: true,
                doubleQuestion: "What is Bailey`s favorite date?"
            },
            {
                question : "Who said it best- Josiah or Bailey?",
                answer : "Bailey",
                points : 500,
                show: true,
                double: true,
                doubleQuestion: "What is Josiah`s saying?"
            }
            ]
    },
    {
        topic: "The Couple",
        questions : [
            {
                question: "Where did Josiah and Bailey first meet? ",
                answer: "",
                points: 100,
                show: true,
                double: false
            },
            {
                question : "What was their very first date?",
                answer : "",
                points : 200,
                show: true,
                double: false
            },
            {
                question : "Where is the couple going on their honeymoon?",
                answer : "",
                points : 300,
                show: true,
                double: false
            },
            {
                question : "How long has the couple been together for?",
                answer : "",
                points : 400,
                show: true,
                double: false
            },
            {
                question : "How long was/has the couple been long-distance for?",
                answer : "",
                points : 500,
                show: true,
                double: false
            }
            ]
    },
    {
        topic: "The Bride",
        questions : [
            {
                question: "If Bailey could be any Disney Princess, which would it be?",
                answer: "",
                points: 100,
                show: true,
                double: false
            },
            {
                question : "What is Bailey’s middle name?",
                answer : "",
                points : 200,
                show: true,
                double: false
            },
            {
                question : "What was Bailey’s first impression of Josiah?",
                answer : "",
                points : 300,
                show: true,
                double: false
            },
            {
                question : "If Bailey got arrested, what would it be for?",
                answer : "",
                points : 400,
                show: true,
                double: false
            },
            {
                question : "What is Bailey's favorite book/series?",
                answer : "",
                points : 500,
                show: true,
                double: false
            }
            ]
    },
    {
        topic: "The Groom",
        questions : [
            {
                question: "How did he propose?",
                answer: "",
                points: 100,
                show: true,
                double: false
            },
            {
                question : "What is Josiah’s middle name?",
                answer : "",
                points : 200,
                show: true,
                double: false
            },
            {
                question : "What are Josiah’s allergies?",
                answer : "",
                points : 300,
                show: true,
                double: false
            },
            {
                question : "What did Josiah get his degree in at college?",
                answer : "",
                points : 400,
                show: true,
                double: false
            },
            {
                question : "What was Josiah’s first impression of Bailey?",
                answer : "",
                points : 500,
                show: true,
                double: false
            }
            ]
    },
    {
        topic: "Before Josiah",
        questions : [
            {
                question: "How many guys has Bailey dated?",
                answer: "",
                points: 100,
                show: true,
                double: false
            },
            {
                question : "How old was Bailey when she had her first kiss?",
                answer : "",
                points : 200,
                show: true,
                double: false
            },
            {
                question : "What did Bailey’s dream wedding look like as a kid/high school?",
                answer : "",
                points : 300,
                show: true,
                double: false
            },
            {
                question : "Who is Bailey’s celebrity crush/hall pass?",
                answer : "",
                points : 400,
                show: true,
                double: false
            },
            {
                question : "What has been Bailey’s biggest relationship regret prior to Josiah?",
                answer : "",
                points : 500,
                show: true,
                double: false
            }
            ]
    }

]

let boardHeader = null; 
let gameBoard = null;

resetBoard();

function renderAllBlocks(){

    
    questions.forEach(i => {
    boardHeader.innerHTML += buildTopicBlock(i.topic);
    });

    console.log("rendering all blocks")
    gameBoard.innerHTML = ''
    questions.forEach(questionCluster => {
        var builtBlock = `<div>`
        questionCluster.questions.forEach(element => {
            // console.table(element);

            if (element.show == true){
                // console.log(element.doubleQuestion)
                builtBlock += buildBlock(element.points,element.question,questions.indexOf(questionCluster),questionCluster.questions.indexOf(element),element.double,element.doubleQuestion);
            }
            else{
                builtBlock += buildEmptyBlock();
            }
        });
        builtBlock += "</div>"
        gameBoard.innerHTML += builtBlock

        builtBlock=""
    });

}

renderAllBlocks();

function buildBlock(points,question,indexZero,indexOne,dailyDouble,dailyDoubleQuestion){

    return `<button type="button" class="block" onclick="showQuestion('${question}','${points}','${indexZero}','${indexOne}','${dailyDouble}','${dailyDoubleQuestion}')">${points}</button>`

}

function buildEmptyBlock(){
    return `<div class="emptyBlock"></div>`
}

function buildTopicBlock(topicName){
    return `<h3 class="topicHeading">${topicName}</h3>`
}

function showQuestion(_question,points,index0,index1,dailyDouble,dailyDoubleQuestion){
    questions[index0].questions[index1]["show"] = false;
    // console.log(questions[index0].questions[index1]["show"])
    fullScreenQuestion(_question,points,dailyDouble,dailyDoubleQuestion);
    // renderAllBlocks();
}

function fullScreenQuestion(_question,_points,_dailyDouble,dailyDoubleQuestion){


    const questionCard      = document.createElement("section");

    const headingElement    = document.createElement("h3");
    const questionElement   = document.createElement("h2")
    const dailyDoubleButton = document.createElement("button");
    const returnButtonElement     = document.createElement("button"); 
    
    headingElement.textContent      = `${_points} points`;
    questionElement.textContent     = `${_question}`;
    dailyDoubleButton.textContent   = `reveal daily double`;
    returnButtonElement.textContent = `return to questions`;

    questionCard.setAttribute("id","fullScreenQuestion");

    returnButtonElement.setAttribute("type","button");
    returnButtonElement.addEventListener("click", () =>{resetBoard(); renderAllBlocks();});

    questionCard.appendChild(headingElement);
    questionCard.appendChild(questionElement);

    console.log("daily double in full screen question:" + _dailyDouble);
    if (_dailyDouble == "true"){

        console.log("daily double true")
        console.log(dailyDoubleQuestion);
        dailyDoubleButton.setAttribute("type","button");
        dailyDoubleButton.setAttribute("id","removeMe");
        dailyDoubleButton.addEventListener("click", ()=>{addDailyDouble(dailyDoubleQuestion,dailyDoubleButton)});
        questionCard.appendChild(dailyDoubleButton);

    }

        questionCard.appendChild(returnButtonElement);

    document.querySelector("main").innerHTML = '';
    document.querySelector("main").appendChild(questionCard);
}

function addDailyDouble(dailyDoubleQuestion){

    const doubleButton = document.querySelector("#removeMe");

    const removeNode = document.querySelector("#fullScreenQuestion").removeChild(doubleButton);

    console.log("removing event listener from "+  doubleButton);

    const doubleCard = document.createElement("section");
    const questionElement   = document.createElement("h2")
    
    questionElement.textContent = `${dailyDoubleQuestion}`;

    doubleCard.setAttribute("id","fullScreenQuestion");
    doubleCard.appendChild(questionElement);

    document.querySelector("Main").appendChild(doubleCard);

    // document.querySelector("main").innerHTML += `<section id="fullScreenQuestion"><h2>${dailyDoubleQuestion}</h2><button type = "button" onclick="resetBoard();renderAllBlocks();">Return to Questions</><section/>`
}


function resetBoard(){
    document.querySelector("main").innerHTML = `<div id="boardTitles"></div>
        <div id="board"></div>`
    boardHeader = document.querySelector("#boardTitles")
    gameBoard = document.querySelector("#board")
}