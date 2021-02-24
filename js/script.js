const ship = document.getElementById("starship");
const pop = document.getElementById("pop");
const builds = document.querySelectorAll(".button1");
const textBu = document.querySelectorAll(".text1");
const upgrades = document.querySelectorAll(".button2");
const textUp = document.querySelectorAll(".text");
const bonus = document.getElementById("bonus");


let click = 1;

let price = [10,1000,10000,100000,1000000,10000000]; // price of planets
let priceUp = [price[0]*10,price[1]*10,price[2]*10,price[3]*10,price[4]*10,price[5]*10,1000,150]; // price of planets and ship upgrades
let planets = [1,10,100,1000,10000,100000]; // gains of pop by planet
let cas = [0,0,0,0,0,0]; // total personal gains
let auto = 0; // value of auto click

let ratio= [1,2,5,11,18,25];

// builds buttons
function check(planet){
    switch (planet){
        case "Earth":
            if(pop.innerHTML >= price[0]){
                cas[0]++;
                console.log("add");
                pop.innerHTML -= price[0];
                price[0] = price[0] *1.5;
            }
            break;
        case "Moon":
            if(pop.innerHTML >= price[1]){
                cas[1]++;
                console.log("add");
                pop.innerHTML -= price[1];
                price[1] = price[1] *1.5;
            }
            break;
        case "Mars":
            if(pop.innerHTML >= price[2]){
                cas[2]++;
                console.log("add");
                pop.innerHTML -= price[2];
                price[2] = price[2] *1.5;
            }
            break;
        case "Saturn":
            if(pop.innerHTML >= price[3]){
                cas[3]++;
                console.log("add");
                pop.innerHTML -= price[3];
                price[3] = price[3] *1.5;
            }
            break;
        case "Jupiter":
            if(pop.innerHTML >= price[4]){
                cas[4]++;
                console.log("add");
                pop.innerHTML -= price[4];
                price[4] = price[4] *1.5;
            }
            break;
        case "Sun":
            if(pop.innerHTML >= price[5]){
                cas[5]++;
                console.log("add");
                pop.innerHTML -= price[5];
                price[5] = price[5] *1.5;
            }
            break;
    }
}

// builds buttons
builds.forEach(build => {
    build.addEventListener("click", ()=> {
        check(build.innerHTML);
        console.log(build.innerHTML);
    })
})
// upgrades buttons
function upCheck(planet){
    switch (planet){
        case "Earth":
            if(pop.innerHTML >= priceUp[0]){
                planets[0] = planets[0]*1.2;
                console.log("add");
                pop.innerHTML -= priceUp[0];
                priceUp[0] = priceUp[0] *2;
                textUp[0].innerHTML = priceUp[0];
            }
            break;
        case "Moon":
            if(pop.innerHTML >= priceUp[1]){
                planets[1] = planets[1]*1.3;
                console.log("add");
                pop.innerHTML -= priceUp[1];
                priceUp[1] = priceUp[1] *2;
                textUp[1].innerHTML = priceUp[1];
            }
            break;
        case "Mars":
            if(pop.innerHTML >= priceUp[2]){
                planets[2] = planets[2]*1.4;
                console.log("add");
                pop.innerHTML -= priceUp[2];
                priceUp[2] = priceUp[2] *2;
                textUp[2].innerHTML = priceUp[2];
            }
            break;
        case "Saturn":
            if(pop.innerHTML >= priceUp[3]){
                planets[3] = planets[3]*1.5;
                console.log("add");
                pop.innerHTML -= priceUp[3];
                priceUp[3] = priceUp[3] *2;
                textUp[3].innerHTML = priceUp[3];
            }
            break;
        case "Jupiter":
            if(pop.innerHTML >= priceUp[4]){
                planets[4] = planets[4]*1.6;
                console.log("add");
                pop.innerHTML -= priceUp[4];
                priceUp[4] = priceUp[4] *2;
                textUp[4].innerHTML = priceUp[4];
            }
            break;
        case "Sun":
            if(pop.innerHTML >= priceUp[5]){
                planets[5] = planets[5]*1.7;
                console.log("add");
                pop.innerHTML -= priceUp[5];
                priceUp[5] = priceUp[5] *2;
                textUp[5].innerHTML = priceUp[5];
            }
            break;
        case "Starship":
            if(pop.innerHTML >= priceUp[6]){
                click = click * 2;
                console.log("add");
                pop.innerHTML -= priceUp[6];
                priceUp[6] = priceUp[6] *2;
                textUp[6].innerHTML = priceUp[6];
            }
        case "Auto":
            if(pop.innerHTML >= priceUp[7]){
                auto = auto + 1;
                console.log("add");
                pop.innerHTML -= priceUp[7];
                priceUp[7] = priceUp[7] *1.5;
                textUp[7].innerHTML = priceUp[7];
            }
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
    pop.innerHTML= new Number(pop.innerHTML) + new Number(click);
    console.log(0)
});


function calPeoSec(){
    let total = 0;
    for (let index = 0; index < planets.length; index++) {
        total+= planets[index] * cas[index];
        console.log(total);
    }
    console.log(total+ "  tot");
    return total;
}

setInterval( function(){
    console.log(pop.innerHTML)
    pop.innerHTML= new Number(pop.innerHTML) + (calPeoSec()/10);
    pop.innerHTML= new Number(pop.innerHTML) + (auto*click)/50;
},100);


setInterval(()=>{
    for(let index = 0; index < price.length; index++) {
        console.log(upgrades[index])
        if(price[index]<=pop.innerHTML){
            builds[index].disabled = false;
            builds[index].style.opacity = "1"
        } else {
            builds[index].disabled = true;
            builds[index].style.opacity = "0.5"
        }
    }
    for (let index = 0; index < priceUp.length; index++) {
        if(priceUp[index]<=pop.innerHTML){
            upgrades[index].disabled = false;
            builds[index].style.opacity = "1"
        } else {
            upgrades[index].disabled = true;
            upgrades[index].style.opacity = "0.5"
        }
}},1);
