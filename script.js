let visor = document.getElementById('visor')
let num1 = 0
let num2 = 0
let num3 = 0
let verificador = 0

function Clicar1(){
    visor.value += 1
}

function Clicar2(){
    visor.value += 2
}

function Clicar3(){
    visor.value += 3
}

function Clicar4(){
    visor.value += 4
}

function Clicar5(){
    visor.value += 5
}

function Clicar6(){
    visor.value += 6
}

function Clicar7(){
    visor.value += 7
}

function Clicar8(){
    visor.value += 8
}

function Clicar9(){
    visor.value += 9
}

function ClicarZero(){
    visor.value += 0
}

function ClicarLimpar(){
    visor.value = ' '
    num1 = 0
    num2 = 0
    num3 = 0
    res = 0
}

function ClicarMais(){
    if(verificador == 6){
        num1 = 0
        num1 += Number(visor.value)
        visor.value = ' '
    }else{
        num1 += Number(visor.value)
        visor.value = ' '
    }

    if(verificador == 1 || verificador == 2 || verificador == 3 || verificador == 4 || verificador == 5){
        num2 = num1 + Number(visor.value)

        verificador = 10
    }

    verificador = 1
}

function ClicarMenos(){
    if(verificador == 6){
        num1 = 0
        num1 += Number(visor.value)
        visor.value = ' '
    }else{
        num1 += Number(visor.value)
        visor.value = ' '
    }

    if(verificador == 1 || verificador == 2 || verificador == 3 || verificador == 4 || verificador == 5){
        num2 = num1 - Number(visor.value)

        verificador = 10
    }

    verificador = 2
}

function ClicarMulti(){
    if(verificador == 6){
        num1 = 0
        num1 += Number(visor.value)
        visor.value = ' '
    }else{
        num1 += Number(visor.value)
        visor.value = ' '
    }

    if(verificador == 1 || verificador == 2 || verificador == 3 || verificador == 4 || verificador == 5){
        num2 = num1 * Number(visor.value)

        verificador = 10
    }

    verificador = 3
}

function ClicarDivi(){
    if(verificador == 6){
        num1 = 0
        num1 += Number(visor.value)
        visor.value = ' '
    }else{
        num1 += Number(visor.value)
        visor.value = ' '
    }

    if(verificador == 1 || verificador == 2 || verificador == 3 || verificador == 4 || verificador == 5){
        num2 = num1 / Number(visor.value)

        verificador = 10
    }

    verificador = 4
}

function ClicarPorcento(){
    if(verificador == 6){
        num1 = 0
        num1 += Number(visor.value)
        visor.value = ' '
    }else{
        num1 += Number(visor.value)
        visor.value = ' '
    }

    if(verificador == 1 || verificador == 2 || verificador == 3 || verificador == 4 || verificador == 5){
        num2 = (Number(visor.value)*num1)/100

        verificador = 10
    }

    verificador = 5
}

function ClicarIgual(){
    let res = 0

    if(verificador == 10){
        if(verificador == 1){
            res = num1 + num2
            visor.value = res
        }
    
        if(verificador == 2){
            res = num1 - num2
            visor.value = res
        }
    
        if(verificador == 3){
            res = num1 * num2
            visor.value = res
        }
    
        if(verificador == 4){
            res = num1/num2
            visor.value = res
        }
    
        if(verificador == 5){
            res = (num2*num1)/100 
            visor.value = res
        }
    }else{
    num2 = Number(visor.value)

        if(verificador == 1){
        res = num1 + num2
        visor.value = res
    }

        if(verificador == 2){
        res = num1 - num2
        visor.value = res
    }

        if(verificador == 3){
        res = num1 * num2
        visor.value = res
    }

        if(verificador == 4){
        res = num1/num2
        visor.value = res
    }

        if(verificador == 5){
        res = (num2*num1)/100 
        visor.value = res
    }
}
    verificador = 6
}