
const ship = document.getElementById("starship");
const pop = document.getElementById("pop").querySelector("p");
const builds = document.getElementById("build").querySelectorAll("button");

let click = 1;

let planets = [10,100,1000,10000,100000,1000000];
let cas = [0,0,0,0,0,0];

let ratio= [2,5,11,18,25];


function check(planet){
    switch (planet){
        case "Earth":
            cas[0]++;
            console.log("add");
            break;
    }
}


builds.forEach(build => {
    build.addEventListener("click", ()=> {
        check(build.innerHTML);
        console.log(build.innerHTML);
    })
})

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
    pop.innerHTML= new Number(pop.innerHTML) + calPeoSec();
},1000)
