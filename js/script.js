document.querySelector("body").addEventListener("load",apistart())

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




const stands = []




/*conectando a API*/

 function apistart() {
    const body=document.querySelector("#todo")
   const load=document.querySelector("#iconload")
    body.style.display='none'
    const url = 'http://localhost:4000/stands/get'

   fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        for (let i in data) {
            stands[i] = new Stand(data[i].id,
                data[i].name,
                data[i].user,
                data[i].desc,
                {
                    power: (data[i].power).split(','),
                    speed: (data[i].speed).split(','),
                    range: (data[i].range).split(','),
                    durability: (data[i].durability).split(','),
                    precision: (data[i].precision).split(','),
                    potential: (data[i].potential).split(',')
                },
                data[i].img,
                data[i].color

            );
        }
        body.style.display='block'
        load.style.display='none'
        control()
    }).catch((err) => {
        
        document.querySelector('#message').innerHTML='erro ao conectar a api. inicie o container da jojoapi em localhost para conectar.'
        document.getElementById('section').style.display = "none"
        document.getElementById('standlist').style.display = "none"


    })
}



function setGraf(ps) {
    const graf = document.getElementById("status");


    let ctx = graf.getContext("2d");
    let p = stands[ps].stats.potential;
    let pr = stands[ps].stats.precision;
    let dur = stands[ps].stats.durability;
    let rag = stands[ps].stats.range;
    let vel = stands[ps].stats.speed;
    let power = stands[ps].stats.power






    ctx.clearRect(0, 0, graf.width, graf.height);

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

    img.onload=function(e){
        
    }
    img.setAttribute('src', './img/end.png');
    



    section.style.filter = "invert(100)"
    section.style.backgroundSize = "50%"
    standcard.style.filter = "opacity(0)"

    section.style.filter = "invert(100)"
    section.style.backgroundSize = "50%"
    standcard.style.filter = "opacity(0)"





    setTimeout(loadenter, 1000)

    function loadenter() {
        section.style.backgroundSize = "60%"
        section.style.filter = "invert(0)"
        standcard.style.filter = "opacity(1)"
        img.setAttribute('src', stands[p].srci);

        desc.innerHTML = stands[p].desc;
        standname.innerHTML = stands[p].name;
        standuser.innerHTML = stands[p].user;

        setGraf(p)
    }

}

function createlist() {
    let list = document.getElementById('list')
    for (let i in stands) {
        // <li value="1" onclick="load(this.value)">starplatinum</li>
        let li = document.createElement('li');
        li.setAttribute('value', i);
        li.setAttribute('onclick', 'load(this.value)')
        list.appendChild(li);
        li.innerHTML = stands[i].name;


    }
}

function control() {

    load(0);
    createlist();
}


function createlist() {
    let list = document.getElementById('list')
    for (let i in stands) {
        // <li value="1" onclick="load(this.value)">starplatinum</li>
        let li = document.createElement('li');
        li.setAttribute('value', i);
        li.setAttribute('onclick', 'load(this.value)')
        list.appendChild(li);
        li.innerHTML = stands[i].name[0].toUpperCase()+stands[i].name.substring(1);


    }
}

function sch(s) {
    let list = document.getElementById('list')
    list.innerHTML = ""
    let result = []
    let indexoff = []
    const letter={lower:s.toLowerCase(),upper:s.toUpperCase(), normal:s}

    for (let i in stands) {
        if (stands[i].name.includes(letter.normal)||stands[i].name.includes(letter.lower) || stands[i].name.includes(letter.upper)) {
            result.push(stands[i])
            result = result.filter((x, y) => result.indexOf(x) === y)
            indexoff.push(stands.indexOf(stands[i]))
        } else {
            result.splice(i, 1)
        }
    }

    for (let i in result) {
        // <li value="1" onclick="load(this.value)">starplatinum</li>
        let li = document.createElement('li');
        li.setAttribute('value', indexoff[i]);
        li.setAttribute('onclick', 'load(this.value)')
        list.appendChild(li);
        li.innerHTML = result[i].name[0].toUpperCase()+result[i].name.substring(1)


    }

}

control();

