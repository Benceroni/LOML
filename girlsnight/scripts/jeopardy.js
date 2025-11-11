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
                question : "What is Bailey’s favorite book/series?",
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

boardHeader = document.querySelector("#boardTitles")
gameBoard = document.querySelector("#board")

questions.forEach(i => {
    boardHeader.innerHTML += buildTopicBlock(i.topic);
});

function renderAllBlocks(){
    gameBoard.innerHTML = ''
    questions.forEach(questionCluster => {
        var builtBlock = `<div>`
        questionCluster.questions.forEach(element => {
            // builtBlock += `<p>${element.points}</p>`
            if (element.show == true){
                builtBlock += buildBlock(element.points,element.question,questions.indexOf(questionCluster),questionCluster.questions.indexOf(element));
            }
            else{
                builtBlock += buildEmptyBlock();
            }
            // console.log(buildBlock(element.points,element.question))
        });
        builtBlock += "</div>"
        gameBoard.innerHTML += builtBlock
        builtBlock=""
    });
    // console.table(questions);
}

renderAllBlocks();

function buildBlock(points,question,indexZero,indexOne){
    return `<button type="button" class="block" onclick="showQuestion('${question}','${points}','${indexZero}','${indexOne}')">${points}</button>`
}

function buildEmptyBlock(){
    return `<div class="emptyBlock"></div>`
}

function buildTopicBlock(topicName){
    return `<h3 class="topicHeading">${topicName}</h3>`
}

function showQuestion(_question,points,index0,index1){
    
    questions[index0].questions[index1]["show"] = false;
    console.log(questions[index0].questions[index1]["show"])
    renderAllBlocks();
}



function resetBoard(){
    document.querySelector("main").innerHTML =`<div id="boardTitles"></div><div id="board"></div>`
}