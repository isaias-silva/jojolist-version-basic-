const stands = [{
    name: 'the world', user: 'dio brando', part: 3,

    stats: {

        power: [150, 20],//a
        speed: [250, 45],//a
        range: [195, 85],//C
        durability: [150, 130],//a
        precision: [90, 95],//b
        potential: [85, 55]//b

    }

}]

function setGraf() {
    const graf = document.getElementById("status");

    let ctx = graf.getContext("2d");
    let p = stands[0].stats.potential;
    let pr = stands[0].stats.precision;
    let dur = stands[0].stats.durability;
    let rag = stands[0].stats.range;
    let vel = stands[0].stats.speed;
    let power = stands[0].stats.power


    //coordenadas E

    //potencial(135,70)
    //precisão(135,80)
    //durabilidade(150,85)
    //range(165,80)
    //velocidade(165,70)
    //poder(150,65)

    //coordenadas D

    //potencial(125,65)
    //precisão(125,80)
    //durabilidade(150,90)
    //range(175,80)
    //velocidade(175,65)
    //poder(150,60)

    //coordenadas C
    //potencial(105,60)
    //precisão(105,90)
    //durabilidade(150,100)
    //range(195,85)
    //velocidade(190,65)
    //poder(150,50)

    //coordenadas B
    //potencial(85,55)
    //precisão(90,95)
    //durabilidade(150,112)
    //range(220,100)
    //velocidade(220,55)
    //poder(150,35)


    //coordenadas A
    //potencial(60,50)
    //precisão(60,100)
    //durabilidade(150,130)
    //range(240,100)
    //velocidade(250,45)
    //poder(150,20)




    ctx.fillStyle = 'yellow';
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
function load() {
    let standuser = document.getElementById('user')
    let standname = document.getElementById('stand')
    let part = document.getElementById('part')
    part.innerHTML = stands[0].part;
    standname.innerHTML = stands[0].name;
    standuser.innerHTML = stands[0].user;

    setGraf()

}
load();