//Generate 
/*
var gotIt = document.getElementById('gotIt')

gotIt.addEventListener('click', switchScreen())

function switchScreen(){
    var main = document.getElementById('mainMenu')
    var all = document.getElementById('all')
    main.style.opacity = 0;
    all.style.opacity = 1;
}*/

var picked = '';
    
pick()

function pick(){
    num = Math.floor(Math.random() * 3 + 1)
    console.log(num)

    if(num == 1)
    {
        picked = 'rock';
    }
    else if(num == 2)
    {
        picked = 'paper';
    }
    else if(num == 3)
    {
        picked ='scissors';
    }
    console.log(picked)
}


var r = document.getElementById('rock')
var p = document.getElementById('paper')
var s = document.getElementById('scissors')
var yourScore = document.getElementById('you')
var compScore = document.getElementById('comp')
var a = 0
var b = 0

r.addEventListener('click' ,() => choose('rock'))
p.addEventListener('click' ,() => choose('paper'))
s.addEventListener('click' ,() => choose('scissors'))

function YourS(value){
    a += value
    yourScore.textContent = a
    
    if (a == 3){
        yourScore.textContent = ''
        compScore.textContent = ''
        window.alert('YOU WON')
        feedback.textContent = ''
        a = 0
        b = 0
    }
}

function CompS(any){
    b += any
    compScore.textContent = b
    
    if (b == 3){
        yourScore.textContent = ''
        compScore.textContent = ''
        window.alert('YOU LOST')
        feedback.textContent = ''
        a = 0
        b = 0
    }

}


function choose(option){
    var feedback = document.getElementById('feedback')

    console.log(option);
    console.log(picked)

    if(option == 'rock')
    {
        

        if(picked == 'rock')
        {
            feedback.textContent = 'tie'
        }
        else if(picked == 'paper')
        {
            feedback.textContent= 'loser'
            CompS(+1)
        }
        else if(picked== 'scissors')
        {
            feedback.textContent = 'winner'
            YourS(+1)
        }

        ReGen()
    }

    else if(option == 'paper')
    {
        if(picked == 'paper')
        {
            feedback.textContent = 'tie'
        }
        else if(picked == 'scissors')
        {
            feedback.textContent= 'loser'
            CompS(+1)
        }
        else if(picked == 'rock')
        {
            feedback.textContent = 'winner'
            YourS(+1)
        }

        ReGen()
    }

    else if(option == 'scissors')
    {
        if(picked == 'scissors')
        {
            feedback.textContent = 'tie'
        }
        else if(picked == 'rock')
        {
            feedback.textContent = 'loser'
            CompS(+1)
        }
        else if(picked == 'paper')
        {
            feedback.textContent = 'winner'
            YourS(+1)
        }

        ReGen()
    }
}


function ReGen(){
    pick()
}