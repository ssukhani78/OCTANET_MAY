let gameseq = [];
let userseq = [];

let started = false;
let lvl = 0;

score_array=[];

let first_play = document.querySelector("Fst_play");
let second_play = document.querySelector("S_play");
let third_play = document.querySelector("Th_play");
let fourth_play = document.querySelector("F_play");
let fifth_play = document.querySelector("Fi_play");
// let matched=true;

let btns = ["first", "second", "third", "fourth"];


let score = document.querySelector(".dashboard");

document.addEventListener("keypress", (evnt) => {
    // console.dir(evnt.key);
    // console.log(evnt.key + " Key pressed");
    if (started == false) {
        printscore(lvl);

        lvl=0;
        gameseq=[];
        // score.innerText = "Level 1";
        started = true;
        console.log("Started");

        score.style.backgroundColor="green";
        score.style.color="white";


        levelup();
    }
});

function printscore(lvl){
    if(lvl>0){
        lvl--;
        if(lvl==0){
            return;
        }
        score_array.push(lvl);
        score_array = sortarray(score_array);
        
        // console.log(scorearray);

        let dataas = document.querySelectorAll("td");

        for(let i=0;i<5;i++){
            dataas[i].innerText=score_array[i];
        }
    }
}

function sortarray(arr){
    arr.sort((a,b)=>b-a);
    console.log("SORTED");
    // console.log(arr);

    arr = unique_ele(arr);
    console.log(arr);
    return arr;
}

function unique_ele(arr){
    let uniq_arr=[];
    uniq_arr = arr.filter((elem,idx)=>arr.indexOf(elem) === idx);
    console.log("unique array");
    // console.log(uniq_arr);
    return uniq_arr;
}

function levelup() {
    lvl++;
    userseq = [];
    score.innerText = `Level ${lvl}`;
    
    let random = Math.floor(Math.random() * 4);
    let btnnn = btns[random];

    let randombtn = document.querySelector(`.${btnnn}`);
    // console.log(randombtn);
    
    // console.dir(randombtn);
    
    gameseq.push(randombtn.id);

    console.log(gameseq);
    
    btnflash(randombtn);
}


function btnflash(btn) {
    // console.dir(btn);

    btn.classList.add("white");
    setTimeout(() => {
        btn.classList.remove("white");
        console.log("removed");
    }, 400)

}

let allbtns = document.querySelectorAll("button");

for (const btn of allbtns) {
    btn.addEventListener("click",pressbtn);
}

function pressbtn(arguments){
    // console.dir(arguments.target);
    if(started==false){
        btnflash(arguments.target)

        score.innerText="Please !! Press Any key to Start the game..!!";
        score.style.backgroundColor="orange";
        score.style.color="black";
        return;
    }

    btnflash(arguments.target)
    userseq.push(arguments.target.id);
    // console.log(userseq);

    let lstidx= userseq.length-1;

    matchseq(lstidx);

}


function matchseq(idx){

    if(userseq[idx]==gameseq[idx]){
        if(userseq.length == gameseq.length){
               setTimeout(levelup,1000);
        }
    }else{
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor="darkslategrey";
        }, 300)

        score.innerHTML = `You Lose !! <b>Your Score is ${lvl-1} .</b> <br> Press Any Key to restart the game.!`;
        score.style.backgroundColor="white";
        score.style.color="red";

        started=false;
    }
}

// Long code same logic can be written as matchseq();
// function matchclick() {
//     for (let i = 0; i < userseq.length; i++) {
//         if (userseq[i] != gameseq[i]) {
//             document.body.style.backgroundColor = "red";
//             setTimeout(() => {
//                 document.body.style.backgroundColor="darkslategrey";
//             }, 500)

//             score.innerText = `You Failed !! Your Score is ${lvl-1} . Press Any Key to restart the game.!`;
//             score.style.backgroundColor="white";
//             score.style.color="red";


//             started=false;
//             matched=false;
//             break;
//         }else{
//             matched=true;
//         }
//     }

//     if(matched==true){
//         setTimeout(levelup,1000)
//     }else{
        
//     }
// }