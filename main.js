document.querySelector("#bass").addEventListener("click", bass);
document.querySelector("#floorTom").addEventListener("click", floorTom);
document.querySelector("#highTom").addEventListener("click", highTom);
document.querySelector("#lowTom").addEventListener("click", lowTom);
document.querySelector("#snareDrum").addEventListener("click", snareDrum);
// document.querySelector("#hiHat").addEventListener("click", hiHat);
document.querySelector(".showShortcuts").addEventListener("click", show);
document.querySelector(".hideShortcuts").addEventListener("click", hide);

document.querySelector(".left").addEventListener("click", leftDisk);
document.querySelector(".right").addEventListener("click", rightDisk);
document.querySelector(".hihat").addEventListener("click", hiHat);

document.body.addEventListener("keydown", (e) =>{

    switch(e.key){
        case "a":
            hiHat();
            break;
        case "s":
            snareDrum();
            break;
        case "d":
            leftDisk();
            break;
        case "f":
            bass();
            break;
        case "g":
            lowTom();
            break;
        case "h":
            highTom();
            break;
        case "j":
            rightDisk();
            break;
        case "k":
            floorTom();
            break;
            

    }
}
)


const paddle = document.querySelector(".paddle");
const button = document.querySelector(".button");


function bass(){
    paddle.classList.add("paddleHover");
    button.classList.add("buttonHover");
    const audio = new Audio("sounds/boom.wav");
    audio.play();

    setTimeout(()=>{
        paddle.classList.remove("paddleHover");
        button.classList.remove("buttonHover");
    },150);
}

function leftDisk(){
    document.querySelector(".left").classList.add("leftHover");
    document.querySelector(".stick2").classList.add("stick2Left");
    const audio = new Audio("sounds/crash-cymbal.mp3")
    audio.play();

    setTimeout(()=>{
        document.querySelector(".left").classList.remove("leftHover");
        document.querySelector(".stick2").classList.remove("stick2Left");
    }, 300);
}

function rightDisk(){
    document.querySelector(".right").classList.add("rightHover");
    document.querySelector(".stick1").classList.add("stick1Right");
    const audio = new Audio("sounds/ride-cymbal.mp3")
    audio.play();

    setTimeout(()=>{
        document.querySelector(".right").classList.remove("rightHover");
        document.querySelector(".stick1").classList.remove("stick1Right");
    }, 300);
}

function floorTom(){
    document.querySelector(".stick1").classList.add("stick1FloorTom");
    const audio = new Audio("sounds/floorTom.mp3");
    audio.play();

    setTimeout(()=>{
        document.querySelector(".stick1").classList.remove("stick1FloorTom");
    }, 300)
}

function highTom(){
    const audio = new Audio("sounds/high-tom.mp3");
    audio.play();
    document.querySelector(".stick1").classList.add("stick1HighTom");

    setTimeout(()=>{
        document.querySelector(".stick1").classList.remove("stick1HighTom");
    },300)
}

function lowTom(){
    const audio = new Audio("sounds/low-tom.mp3");
    audio.play();

    document.querySelector(".stick2").classList.add("stick2LowTom");

    setTimeout(()=>{
        document.querySelector(".stick2").classList.remove("stick2LowTom");
    },300)
}

function snareDrum(){
    const audio = new Audio("sounds/snare-drum.mp3");
    audio.play();

    document.querySelector(".stick2").classList.add("stick2Snare");

    setTimeout(()=>{
        document.querySelector(".stick2").classList.remove("stick2Snare");
    },300)
}


function hiHat(){
    document.querySelector(".hihat").classList.add("hihatHover")
    document.querySelector(".stick2").classList.add("stick2HiHat");
    const audio = new Audio("sounds/hi-hat.mp3");
    audio.play();

    setTimeout(()=>{
        document.querySelector(".hihat").classList.remove("hihatHover");
        document.querySelector(".stick2").classList.remove("stick2HiHat");
    }, 300);
}

function show(){
    document.querySelector(".a").style.display = "none";
    document.querySelector(".s").style.display = "none";
    document.querySelector(".d").style.display = "none";
    document.querySelector(".f").style.display = "none";
    document.querySelector(".g").style.display = "none";
    document.querySelector(".h").style.display = "none";
    document.querySelector(".j").style.display = "none";
    document.querySelector(".k").style.display = "none";   
}

function hide(){
    document.querySelector(".a").style.display = "revert";
    document.querySelector(".s").style.display = "revert";
    document.querySelector(".d").style.display = "revert";
    document.querySelector(".f").style.display = "revert";
    document.querySelector(".g").style.display = "revert";
    document.querySelector(".h").style.display = "revert";
    document.querySelector(".j").style.display = "revert";
    document.querySelector(".k").style.display = "revert"; 
}