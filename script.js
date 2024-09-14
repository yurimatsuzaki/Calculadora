let visor = document.getElementById('visor')
let num1 = ''
let num2 = 0
let num3 = ''
let verificador = 0

function Clicar1(){
    visor.value += '1'
    num1 += '1'
}

function Clicar2(){
    visor.value += '2'
    num1 += '2'
}

function Clicar3(){
    
}

function Clicar4(){
    
}

function Clicar5(){
    
}

function Clicar6(){
   
}

function Clicar7(){
  
}

function Clicar8(){
  
}

function Clicar9(){
 
}

function ClicarZero(){
 
}

function ClicarLimpar(){
    visor.value = ' '
    num1 = ''
    num2 = 0
    num3 = ''
}

function ClicarMais(){
    visor.value += '+'
    num2 += Number(num1)
    num1 = ''

    verificador = 1
}

function ClicarMenos(){
    visor.value += '-'
    
    if(verificador == 1){
        num2 = Number(num2) + Number(num1)
        num1 = ''
    }else if(verificador == 2){
        num2 = Number(num2) - Number(num1)
        num1 = ''
    }else{
        num2 += Number(num1)
    }

    verificador = 2
}

function ClicarMulti(){
 
}

function ClicarDivi(){
    
}

function ClicarPorcento(){
  
}

function ClicarIgual(){
    if(verificador == 1){
        visor.value = Number(num2) + Number(num1)
    }

    if(verificador == 2){
        visor.value = Number(num2) - Number(num1)
    }
}