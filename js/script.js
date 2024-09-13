

function mostrarNome() {
    let nomeUsuario =  Number(document.getElementById("nomeUsuario").value)
    document.getElementById("paragrafo").innerText = "Bem vindo," + nomeUsuario
}

function calcAreaCirculo(){
    let raio =  Number(document.getElementById("raio").value)
    const pi = 3.14
    let area = (pi * raio)**2
    document.getElementById("area").innerText = area
}

function calcAreaRetangulo(){
    let baseR = Number(document.getElementById("baseR").value)
    let alturaR =  Number(document.getElementById("alturaR").value)
    const areaR = (baseR * alturaR)
    document.getElementById("areaR").innerText = "A área do retângulo é "+ areaR
}

function calcAreaTriangulo(){
    let baseT =  Number(document.getElementById("baseT").value)
    let alturaT =  Number(document.getElementById("alturaT").value)
    const areaT = (baseT * alturaT) / 2
    document.getElementById("areaT").innerText = "A área do triângulo é "+ areaT 
}

function calcAreaLosango(){
    let dMen =  Number(document.getElementById("baseL").value)
    let dMai =  Number(document.getElementById("alturaL").value)
    const areaL = (dMen * dMai) / 2
    document.getElementById("areaL").innerText = "A área do losango é "+ areaL
}

function calcAreaTrapezio(){
    let bMai =  Number(document.getElementById("baseTrap").value)
    let bMen =  Number(document.getElementById("baseTrap2").value)
    let alt_trap =  Number(document.getElementById("alturaTrap").value)
    const areaTR = Number(((bMai + bMen) * alt_trap) / 2)
    document.getElementById("areaTR").innerText = "A área do losango é "+ areaTR
}

// ______________

function calcVolCubo(){
    let ladog =  Number(document.getElementById("lado").value)
    const volCubo= Number(ladog ** 3)
    document.getElementById("volCubo").innerText = "O Volume do cubo é"+ volCubo
}

function calcVolParale(){
    let ladoA =  Number(document.getElementById("ladoA").value)
    let ladoB =  Number(document.getElementById("ladoB").value)
    let ladoC =  Number(document.getElementById("ladoC").value)
    const volPar= Number(ladoA * ladoB * ladoC)
    document.getElementById("volPar").innerText = "O Volume do paralelepípedo é "+ volPar
}

function calcVolEsfera(){
    let raioEsf =  Number(document.getElementById("raioEsfera").value)
    const pi = 3.14
    const volEsf= Number(raioEsf * pi * 1.33)
    document.getElementById("volEsf").innerText = "O Volume da esfera "+ volEsf
}

function calcVolCil(){
    let raioCil =  Number(document.getElementById("raioCilindro").value)
    const pi = 3.14
    const volCil= Number((raioCil **2) * pi * 1.33)
    document.getElementById("volCil").innerText = "O Volume do cilindro é "+ volCil
}

function calcVolCon(){
    let raioCon =  Number(document.getElementById("raioCone").value)
    let alturaCon =  Number(document.getElementById("alturaCon").value)
    const pi = 3.14
    const volCon= Number((pi * raioCon **2) * alturaCon * 0.33)
    document.getElementById("volCon").innerText = "O Volume do cone é "+ volCon
}

function calcVolPira(){
    let ladoPira =  Number(document.getElementById("ladoPir").value)
    let alturaPira =  Number(document.getElementById("alturaPir").value)
    const volPira= Number( ((ladoPira ** 2) * alturaPira) /3 )
    document.getElementById("volPira").innerText = "O Volume da piramide é "+ volPira
}


function calcVolPira(){
    let valorA =  Number(document.getElementById("vlrA").value)
    let valorB =  Number(document.getElementById("vlrB").value)
    let valorC =  Number(document.getElementById("vlrC").value)
    const delta = ( (valorB ** 2) - 4 * valorA * valorC)
    const x1 = (((-1 *(valorB)) - (delta ** 0.5)) / (2 * valorA))
    const x2 =(((-1 *(valorB)) + (delta ** 0.5)) / (2 * valorA))

    document.getElementById("numx1").innerText = "X1: "+ x1
    document.getElementById("numx2").innerText = "X2: "+ x2
    document.getElementById("dtt").innerText = "Delta: "+ delta
}



