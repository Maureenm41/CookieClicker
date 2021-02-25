const ship = document.getElementById("starship");
const pop = document.getElementById("pop");
const popS = document.getElementById("popS");
const builds = document.querySelectorAll(".button1");
const textBu = document.querySelectorAll(".text1");
const upgrades = document.querySelectorAll(".button2");
const textUp = document.querySelectorAll(".text2");
const bonus = document.getElementById("bonus");
const bonusMove = document.getElementById("bonusMove");
const burger = document.querySelector("header").querySelector("span");
const menuBuilds = document.querySelector(".menuBuilds");
const planetsImg = document.querySelector(".planets").querySelectorAll("img");
const audioClick = new Audio('./assets/clic.wav');
const audioship = new Audio('./assets/ship.wav');

let click = 1;

let price = [10,1000,10000,100000,1000000,10000000]; // price of planets
let priceUp = [price[0]*10,price[1]*10,price[2]*10,price[3]*10,price[4]*10,price[5]*10,1000,150]; // price of planets and ship upgrades
let planets = [1,10,100,1000,10000,100000]; // gains of pop by planet
let cas = [0,0,0,0,0,0,1,1]; // total personal gains
let auto = 0; // value of auto click
let popA = 0;

burger.addEventListener("click", () => {
    if(menuBuilds.style.display   == "block"){
        menuBuilds.style.display = "none";
    }else{
        menuBuilds.style.display = "block";
    }
})

function numCheck(first){
    if(first > 999999999999){
        first /= 1000000000000;
        if(first - Math.floor(first) == 0){
            return Math.floor(first) +"T";
        }
        return first.toFixed(2) + "T"
    } else if(first > 999999999){
        first /= 1000000000;
        if(first - Math.floor(first) == 0){
            return Math.floor(first) +"B";
        }
        return first.toFixed(2) + "B"
    } else if(first > 999999){
        first /= 1000000;
        if(first - Math.floor(first) == 0){
            return Math.floor(first) +"M";
        }
        return first.toFixed(2) + "M"
    } else if(first > 999){
        first /= 1000;
        if(first - Math.floor(first) == 0){
            return Math.floor(first) +"K";
        }
        return first.toFixed(2) + "K"
    } else {
        return Math.floor(first);
    }
}
// builds buttons
function check(planet){
    switch (planet){
        case "Earth":
            if(popA >= price[0]){
                cas[0]++;
                pop.innerHTML = numCheck(popA - price[0]);
                popA -= price[0]
                price[0] = price[0] *1.5;
                textBu[0].innerHTML = numCheck(price[0]);
                planetsImg[5].style.display = "block";
            }
            break;
        case "Moon":
            if(popA >= price[1]){
                cas[1]++;
                pop.innerHTML = numCheck(popA - price[1]);
                popA -= price[1];
                price[1] = price[1] *1.5;
                textBu[1].innerHTML = numCheck(price[1]);
                planetsImg[4].style.display = "block";
            }
            break;
        case "Mars":
            if(popA >= price[2]){
                cas[2]++;
                pop.innerHTML = numCheck(popA - price[2]);
                popA -= price[2];
                price[2] = price[2] *1.5;
                textBu[2].innerHTML = numCheck(price[2]);
                planetsImg[3].style.display = "block";
            }
            break;
        case "Saturn":
            if(popA >= price[3]){
                cas[3]++;
                pop.innerHTML = numCheck(popA - price[3]);
                popA -= price[3];
                price[3] = price[3] *1.5;
                textBu[3].innerHTML = numCheck(price[3]);
                planetsImg[2].style.display = "block";
            }
            break;
        case "Jupiter":
            if(popA >= price[4]){
                cas[4]++;
                pop.innerHTML = numCheck(popA - price[4]);
                popA -= price[4];
                price[4] = price[4] *1.5;
                textBu[4].innerHTML = numCheck(price[4]);
                planetsImg[1].style.display = "block";
            }
            break;
        case "Sun":
            if(popA >= price[5]){
                cas[5]++;
                pop.innerHTML = numCheck(popA - price[5]);
                popA -= price[5];
                price[5] = price[5] *1.5;
                textBu[5].innerHTML = numCheck(price[5]);
                planetsImg[0].style.display = "block";
            }
            break;
    }
}

// builds buttons
builds.forEach(build => {
    build.addEventListener("click", ()=> {
        check(build.innerHTML);
    })
})
// upgrades buttons
function upCheck(planet){
    switch (planet){
        case "Up Earth":
            if(popA >= priceUp[0] && cas[0] != 0){
                planets[0] = planets[0]*1.2;
                pop.innerHTML = numCheck(popA - priceUp[0]);
                popA -= priceUp[0];
                priceUp[0] = priceUp[0] *2;
                textUp[0].innerHTML = numCheck(priceUp[0]);
            }
            break;
        case "Up Moon":
            if(popA >= priceUp[1] && cas[1] != 0){
                planets[1] = planets[1]*1.3;
                pop.innerHTML = numCheck(popA - priceUp[1]);
                popA -= priceUp[1];
                priceUp[1] = priceUp[1] *2;
                textUp[1].innerHTML = numCheck(priceUp[1]);
            }
            break;
        case "Up Mars":
            if(popA >= priceUp[2] && cas[2] != 0){
                planets[2] = planets[2]*1.4;
                pop.innerHTML = numCheck(popA - priceUp[2]);
                popA -= priceUp[2];
                priceUp[2] = priceUp[2] *2;
                textUp[2].innerHTML = numCheck(priceUp[2]);
            }
            break;
        case "Up Saturn":
            if(popA >= priceUp[3] && cas[3] != 0){
                planets[3] = planets[3]*1.5;
                pop.innerHTML = numCheck(popA - priceUp[3]);
                popA -= priceUp[3];
                priceUp[3] = priceUp[3] *2;
                textUp[3].innerHTML = numCheck(priceUp[3]);
            }
            break;
        case "Up Jupiter":
            if(popA >= priceUp[4]  && cas[4] != 0){
                planets[4] = planets[4]*1.6;
                pop.innerHTML = numCheck(popA - priceUp[4])
                popA -= priceUp[4];
                priceUp[4] = priceUp[4] *2;
                textUp[4].innerHTML = numCheck(priceUp[4]);
            }
            break;
        case "Up Sun":
            if(popA >= priceUp[5]  && cas[5] != 0){
                planets[5] = planets[5]*1.7;
                pop.innerHTML = numCheck(popA - priceUp[5])
                popA -= priceUp[5];
                priceUp[5] = priceUp[5] *2;
                textUp[5].innerHTML = numCheck(priceUp[5]);
            }
            break;
        case "Up Starship":
            if(popA >= priceUp[6]){
                click = click * 2;
                pop.innerHTML = numCheck(popA - priceUp[6])
                popA -= priceUp[6];
                priceUp[6] = priceUp[6] *2;
                textUp[6].innerHTML = numCheck(priceUp[6]);
            }
            break;
        case "+ click Auto":
            if(popA >= priceUp[7]){
                auto = auto + 1;
                pop.innerHTML = numCheck(popA - priceUp[7])
                popA -= priceUp[7];
                priceUp[7] = priceUp[7] *1.5;
                textUp[7].innerHTML = numCheck(priceUp[7]);
            }
            break;
    }
}

// upgrades buttons
upgrades.forEach(upgrade => {
    upgrade.addEventListener("click", ()=> {
        upCheck(upgrade.innerHTML);
    })
})

// click add pop
ship.addEventListener("click", ()=>{
    pop.innerHTML= numCheck(popA + click);
    popA += click;
    audioClick.play();
});
let bo = true;

bonusMove.addEventListener("click",()=>{
    if(bo == true){
        bo = false;
        click = click*3;
        decompte();
        setInterval(function(){click = click/3},30000);
        console.log(click)
    }
})

let time = 30;


function decompte(){
    bonus.innerHTML = time+" S";
    time--;
    console.log(time)
    if(time>=0){
        setTimeout(function(){
            decompte();
        },1000);
    }else{
        bo = true;
        time = 30;
    }
}

function calPeoSec(){
    let total = 0;
    for (let index = 0; index < planets.length; index++) {
        total+= planets[index] * cas[index];
    }
    return total;
}

setInterval( function(){
    pop.innerHTML= numCheck(popA + (calPeoSec()/10));
    pop.innerHTML= numCheck(popA + (auto*click)/10);
    popS.innerHTML = numCheck((calPeoSec()) +(auto*click)) +"/s";
    popA += (calPeoSec()/10);
    console.log(auto)
    if(auto != 0){
        popA += (auto*click)/10;
    }
},100);


setInterval(()=>{
    for(let index = 0; index < price.length; index++) {
        if(price[index]<=popA){
            builds[index].disabled = false;
            builds[index].style.opacity = "1";
        } else {
            builds[index].disabled = true;
            builds[index].style.opacity = "0.5";
        }
    }
    for (let index = 0; index < priceUp.length; index++) {
        if(priceUp[index]<=popA && cas[index] != 0){
            upgrades[index].disabled = false;
            upgrades[index].style.opacity = "1";
        } else {
            upgrades[index].disabled = true;
            upgrades[index].style.opacity = "0.5";
        }
}},1);

setInterval(()=>{
    if(Math.floor(Math.random()*10)%3 == 0){
        audioship.play();
        bonusMove.animate([
            {transform: `translate(-5vw,${Math.floor(Math.random()*50)-50}vh)`},
            {transform: `translate(75vw,${Math.floor(Math.random()*50)-50}vh)`},
            {transform: `translate(25vw,${Math.floor(Math.random()*50)-50}vh) scaleX(-1)`},
            {transform: `translate(102vw,${Math.floor(Math.random()*20)-30}vh) scaleX(1)`}
        ],{
            duration:5000
        });

    }
},150000)
