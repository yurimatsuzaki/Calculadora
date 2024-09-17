let visor = document.getElementById('visor')
let FistNumber = ''
let SecundNumber = 0
let verificador = 0

function Clicar1(){
    visor.value += '1'
    FistNumber += '1'
}

function Clicar2(){
    visor.value += '2'
    FistNumber += '2'
}

function Clicar3(){
    visor.value += '3'
    FistNumber += '3'
}

function Clicar4(){
    visor.value += '4'
    FistNumber += '4'
}

function Clicar5(){
    visor.value += '5'
    FistNumber += '5'
}

function Clicar6(){
    visor.value += '6'
    FistNumber += '6'
}

function Clicar7(){
    visor.value += '7'
    FistNumber += '7'
}

function Clicar8(){
    visor.value += '8'
    FistNumber += '8'
}

function Clicar9(){
    visor.value += '9'
    FistNumber += '9'
}

function ClicarZero(){
    visor.value += '0'
    FistNumber += '0'
}

function ClicarPonto(){
    visor.value += '.'
    FistNumber += '.'
}

function ClicarLimpar(){
    visor.value = ''
    FistNumber = ''
    SecundNumber = 0
    verificador = 0
}

function ClicarMais(){
    if(verificador != 0){
        alert('Você já colocou o operador!')
    }else if(visor.value.length == 0 || visor.value == ''){
        alert('Adicione um número antes')
    }else if(ClicarIgual() == true){
        SecundNumber += Number(visor.value)
        FistNumber = ''
        visor.value += '+'
        verificador = 1
    }else{
        SecundNumber += Number(FistNumber)
        FistNumber = ''
        visor.value += '+'
        verificador = 1
    }
}


function ClicarMenos(){
    if(verificador != 0){
        alert('Você já colocou o operador!')
    }else if(visor.value.length == 0 || visor.value == ' '){
        alert('Adicione um número antes')
    }else if(ClicarIgual() == true){
        SecundNumber +=  Number(visor.value)
        FistNumber = ''
        visor.value += '-'
        verificador = 2
    }else{
        SecundNumber += Number(FistNumber)
        FistNumber = ''
        visor.value += '-'
        verificador = 2
    }
}

function ClicarMulti(){
    if(verificador != 0){
        alert('Você já colocou o operador!')
    }else if(visor.value.length == 0 || visor.value == ' '){
        alert('Adicione um número antes')
    }else if(ClicarIgual() == true){
        SecundNumber +=  Number(visor.value)
        FistNumber = ''
        visor.value += 'x'
        verificador = 3
    }else{
        SecundNumber += Number(FistNumber)
        FistNumber = ''
        visor.value += 'x'
        verificador = 3
    }
}

function ClicarDivi(){
    if(verificador != 0){
        alert('Você já colocou o operador!')
    }else if(visor.value.length == 0 || visor.value == ' '){
        alert('Adicione um número antes')
    }else if(ClicarIgual() == true){
        SecundNumber +=  Number(visor.value)
        FistNumber = ''
        visor.value += '/'
        verificador = 4
    }else{
        SecundNumber += Number(FistNumber)
        FistNumber = ''
        visor.value += '/'
        verificador = 4
    }
}

function ClicarPorcento(){
    if(verificador != 0){
        alert('Você já colocou o operador!')
    }else if(visor.value.length == 0 || visor.value == ' '){
        alert('Adicione um número antes')
    }else if(ClicarIgual() == true){
        SecundNumber +=  Number(visor.value)
        FistNumber = ''
        visor.value += '%'
        verificador = 5
    }else{
        SecundNumber += Number(FistNumber)
        FistNumber = ''
        visor.value += '%'
        verificador = 5
    }
}

function somar(num1, num2){
   return Number(num1) + Number(num2)
}

function subtrair(num1, num2){
   return Number(num1) - Number(num2)
}

function multiplicar(num1, num2){
   return Number(num1) * Number(num2)
}

function dividir(num1, num2){
   return Number(num1) / Number(num2)
}

function porcentgem(num1, num2){
   return (Number(num1) * Number(num2))/100
}

function ClicarIgual(){
    if(verificador == 5){
        visor.value = porcentgem(SecundNumber, FistNumber)
        verificador = 0
        FistNumber = 0
        SecundNumber = 0
    }

    if(verificador == 3){
        visor.value = multiplicar(SecundNumber, FistNumber)
        verificador = 0
        FistNumber = 0
        SecundNumber = 0
    }
    if(verificador == 4){
        visor.value = dividir(SecundNumber, FistNumber)
        verificador = 0
        FistNumber = 0
        SecundNumber = 0
    }
    
    if(verificador == 1){
        visor.value = somar(SecundNumber, FistNumber)
        verificador = 0
        FistNumber = 0
        SecundNumber = 0
    }
    if(verificador == 2){
        visor.value = subtrair(SecundNumber, FistNumber)
        verificador = 0
        FistNumber = 0
        SecundNumber = 0
    }

    return true
}