function ageInDays(){
    var audio =new Audio("sound.wav");
    audio.play();
    var birthYear =prompt('What year were you born in?');
    var ageInDayss= (2020-birthYear)*365;
    var h1 =document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ageInDayss+ ' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    document.getElementById('flex-box-result').appendChild(tenor.gif);

    


}

function reset(){
    document.getElementById('ageInDays').remove();
}
var choc=document.getElementById('lemon');
choc.addEventListener("click",reset);

function generateCat(){
    var image = document.createElement('img');
    image.setAttribute("id","cat");
    var div= document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small" 
    div.appendChild(image);
}

function removeCat(){
    var dim=document.getElementById("flex-cat-gen")
    var child=document.getElementById("cat");
    dim.removeChild(child);
}

function RpsGame(yourChoice){
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
    botChoice=numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice,botChoice);
    message=finalMessage(results);
    rpsFrontEnd(yourChoice.id,botChoice,message);

};
function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return['rock','paper','scissors'][number];
}
function decideWinner(yourChoice, computerChoice) {

    if(yourChoice=='rock' && computerChoice=='scissors'){yourScore=1,computerScore=0}
     else if(yourChoice=='rock' && computerChoice=='rock'){yourScore=0.5,computerScore=0.5}
    else if(yourChoice=='rock' && computerChoice=='paper'){yourScore=0,computerScore=1}
    else if(yourChoice=='paper' && computerChoice=='rock'){yourScore=1,computerScore=0}
    else if(yourChoice=='paper' && computerChoice=='paper'){yourScore=0.5,computerScore=0.5}
    else if(yourChoice=='paper' && computerChoice=='scissors'){yourScore=0,computerScore=1}
    else if(yourChoice=='scissors' && computerChoice=='paper'){yourScore=1,computerScore=0}
    else if(yourChoice=='scissors' && computerChoice=='scissors'){yourScore=0.5,computerScore=0.5}
    else {yourScore=0,computerScore=1};


    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]) {
    if (yourScore===0){
        return {'message':'You lost','color':'red'};
    }   else if (yourScore === 0.5){
        return {'message':'You tied','color':'yellow'};
    }   else {
        return {'message':'You won','color':'green'};
    }
}


function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imageDatabase ={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

//removes all images after click
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();
//create divs for game over
var humanDiv=document.createElement('div');
var botDiv=document.createElement('div');
var messageDiv=document.createElement('div');


humanDiv.innerHTML="<img src='" + imageDatabase[humanImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,58,233,1);'>"
messageDiv.innerHTML="<h1 style= 'color:"+ finalMessage['color']+"; font-size: 60px; padding: 30px; '>" + finalMessage['message']+"</h1>"
botDiv.innerHTML="<img src='" + imageDatabase[botImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,58,233,1);'>"

document.getElementById('flex-box-rps-div').appendChild(humanDiv);
document.getElementById('flex-box-rps-div').appendChild(messageDiv);
document.getElementById('flex-box-rps-div').appendChild(botDiv);


//change the color of all buttons
var all_buttons =document.getElementByTagName('button')
console.log(all_buttons);

let copyAllButtons= [];
for (let i=0;i< all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i]);
}

function buttonColorChange(buttonThingy){
    if (buttonThingy.value=="red"){
        buttonRed();}
        else if (buttonThingy.value=="green"){
        buttonRed();}               
        else if (buttonThingy.value=="rest"){
        buttonRed();}
        else if(buttonThingy.value=="random")
        randomColor();
                            }
}

function buttonRed(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i]).classList[i];
        all_buttons[i].classList.add["danger"];
    }
}
function buttonGreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i]).classList[i];
        all_buttons[i].classList.add["btn-success"];
    }
}
function buttonColorReset(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i]).classList[i];
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function randomColors(){
    var choices=['btn-primary','btn-danger','btn-success','btn-warning']

    for (let i=0; i<all_buttons.length;i++){
        let randomNumber =Math.floor(Math.random()=4);
        all_buttons[i].classList.remove(all_buttons[i].classList[i]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}


































