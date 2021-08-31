
class Stand {
    #id
    #name
    #user
    #desc
    #stats
    #srci
    #color

    get color() {
        return this.#color;

    }
    get id() {
        return this.#id;
    }

    get srci() {
        return this.#srci;

    }

    get name() {
        return this.#name;
    }

    get user() { return this.#user }


    get desc() {
        return this.#desc;
    }

    get stats() {
        return this.#stats
    }



    constructor(id, name, user, desc, stats, srci, c) {
        this.#name = name;
        this.#user = user;
        this.#stats = stats;
        this.#desc = desc;
        this.#id = id;
        this.#srci = srci;
        this.#color = c;
    }

}




const stands = [new Stand(1, 'zawarudo', 'dio brando', 'super strength stop time', {
    power: [150, 35],//a
    speed: [220, 55],//a
    range: [195, 85],//C
    durability: [150, 112],//a
    precision: [100, 90],//b
    potential: [100, 60]//b
}, './imagens_teste/ZaWarudo.png', 'yellow'),

new Stand(2, 'starplatinum', 'jotaro kujo', 'super strength and stop time', {
    power: [150, 35],//a
    speed: [220, 55],//a
    range: [195, 85],//C
    durability: [150, 112],//a
    precision: [100, 90],//b
    potential: [100, 60]//b
}, './imagens_teste/starplatinum.png', 'blue')
]




function setGraf(ps) {
    const graf = document.getElementById("status");

    let ctx = graf.getContext("2d");
    let p = stands[ps].stats.potential;
    let pr = stands[ps].stats.precision;
    let dur = stands[ps].stats.durability;
    let rag = stands[ps].stats.range;
    let vel = stands[ps].stats.speed;
    let power = stands[ps].stats.power







    ctx.fillStyle = stands[ps].color;
    ctx.beginPath();


    //potencial
    ctx.moveTo(p[0], p[1]);
    ctx.lineTo(pr[0], pr[1]);
    //precision

    ctx.lineTo(dur[0], dur[1]);
    //durabilidade

    ctx.lineTo(rag[0], rag[1]);
    //range

    ctx.lineTo(vel[0], vel[1]);
    //velocidade

    ctx.lineTo(power[0], power[1]);
    //poder

    ctx.lineTo(p[0], p[1]);

    ctx.fill();

    ctx.closePath();

    ctx.stroke();
}
function load(p) {
    let standuser = document.getElementById('user')
    let standname = document.getElementById('stand')
    let desc = document.getElementById('desc')
    let standcard = document.getElementById('standcard')
    let section = document.getElementById('section')
    let img = document.getElementById('img')
    

   
    section.style.filter = "invert(100)"
    section.style.backgroundSize = "60%"
    standcard.style.filter = "opacity(0)"
   
   
   
   
    setTimeout(loadenter, 1000)

    function loadenter() {
        section.style.backgroundSize = "70%"
        section.style.filter = "invert(0)"
        standcard.style.filter = "opacity(1)"
        img.setAttribute('src', stands[p].srci);
        desc.innerHTML = stands[p].desc;
        standname.innerHTML = stands[p].name;
        standuser.innerHTML = stands[p].user;

        setGraf(p)
    }

}
function createlist(){
    let list = document.getElementById('list')
    for(let i in stands){
        // <li value="1" onclick="load(this.value)">starplatinum</li>
     let li=document.createElement('li');
     li.setAttribute('value',i);
     li.setAttribute('onclick','load(this.value)')
     list.appendChild(li);
     li.innerHTML=stands[i].name;
     
     
     }
}


load(0);
createlist();

