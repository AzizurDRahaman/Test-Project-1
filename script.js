document.querySelector(".next-button").onclick = function () {
    location.href = "./congrats.html";
};

document.querySelector(".rules-button").onclick = function () {
    document.querySelector(".rules").classList.toggle("disp");
}

document.querySelector(".close-button").onclick = function () {
    document.querySelector(".rules").classList.toggle("disp");
}

document.querySelector(".replay").onclick = function () {
    document.querySelector("#game-buttons").classList.toggle("disp");
    document.querySelector("#winner").classList.toggle("disp");
    document.querySelector(".next-button").classList.add("disp");
    let player_class = document.querySelector(".player").classList;
    let computer_class = document.querySelector(".computer").classList;
    player_class.remove("rock", "paper", "scissors");
    player_class.remove("pulse");
    computer_class.remove("rock", "paper", "scissors");
    computer_class.remove("pulse");
}

localStorage.player = localStorage.player || 0;
localStorage.computer = localStorage.computer || 0;
document.getElementById("player-score").textContent = localStorage.player;
document.getElementById("computer-score").textContent = localStorage.computer;



let game_btn = document.querySelectorAll(".game-btn");
const options = ["rock", "paper", "scissors"];

let win=null;

game_btn.forEach(function (btn) {
    btn.onclick = function () {
        
        
        document.querySelector("#game-buttons").classList.toggle("disp");
        document.querySelector("#winner").classList.toggle("disp");


        let random = Math.floor(Math.random() * 3);
        let computer_option = options[random];
        let player_option = btn.classList[0];
        let player_button = document.querySelector(".player");
        let computer_button = document.querySelector(".computer");


        player_button.innerHTML = `<img src="assets/images/${player_option}.png" />`;
        computer_button.innerHTML = `<img src="assets/images/${computer_option}.png" />`;


        player_button.classList.add(player_option)
        computer_button.classList.add(computer_option)


        if(player_option === computer_option){
            win = null;
        }
        else if((player_option === "rock" && computer_option === "scissors") || (player_option === "paper" && computer_option === "rock") || (player_option === "scissors" && computer_option === "paper")){
            document.querySelector(".player").classList.add("pulse");
            document.querySelector(".computer").classList.remove("pulse");
            win = true;
            document.querySelector(".next-button").classList.remove("disp");


            localStorage.player = localStorage.player ? parseInt(localStorage.player) + 1 : 0;
            document.getElementById("player-score").textContent = localStorage.player;
        }
        else{
            document.querySelector(".computer").classList.add("pulse");
            document.querySelector(".player").classList.remove("pulse");
            win = false;

            localStorage.computer = localStorage.computer ? parseInt(localStorage.computer) + 1 : 0;
            document.getElementById("computer-score").textContent = localStorage.computer;
        }
        if(win === null){
            document.querySelector(".win").textContent= "TIED";
        }
        else{
            document.querySelector(".win").textContent= win ? "WIN" : "LOST";
        }
    }
})