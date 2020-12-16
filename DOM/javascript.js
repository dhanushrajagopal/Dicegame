var randomNumber1;
randomNumber1=Math.floor(Math.random()*6)+1;
var randomImages="./images/dice"+randomNumber1+".png";
var image=document.querySelector(".img1");
image.setAttribute("src",randomImages);
var randomNumber2;
randomNumber2=Math.floor(Math.random()*6)+1;
var randomImages1="./images/dice"+randomNumber2+".png";
var image2=document.querySelector(".img2");
image2.setAttribute("src",randomImages1);
if(randomNumber1>randomNumber2){
    document.querySelector("h2").textContent="Player 1 Wins";
}
else if(randomNumber2==randomNumber1){
    document.querySelector("h2").textContent="Draw";
}
else{
    document.querySelector("h2").textContent="Player 2 Wins";
}

