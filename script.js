let visor = document.getElementById('visor') // variável que pega o elemento input usado como visor
let FistNumber = '' // variável usada para armazenar a sequência de números em formato de string
let SecundNumber = 0 // variável que armazena o valor do visor em formato numérico para ser usado nas operações
let verificador = 0 // variável usada como controlhe para tomadas de decisão dentro do código

function Clicar1(){ // função para inserir 1 no visor e na variável 'FistNumber'
    visor.value += '1'
    FistNumber += '1'
}

function Clicar2(){ // função para inserir 2 no visor e na variável 'FistNumber'
    visor.value += '2'
    FistNumber += '2'
}

function Clicar3(){ // função para inserir 3 no visor e na variável 'FistNumber'
    visor.value += '3'
    FistNumber += '3'
}

function Clicar4(){ // função para inserir 4 no visor e na variável 'FistNumber'
    visor.value += '4'
    FistNumber += '4'
}

function Clicar5(){ // função para inserir 5 no visor e na variável 'FistNumber'
    visor.value += '5'
    FistNumber += '5'
}

function Clicar6(){ // função para inserir 6 no visor e na variável 'FistNumber'
    visor.value += '6'
    FistNumber += '6'
}

function Clicar7(){ // função para inserir 7 no visor e na variável 'FistNumber'
    visor.value += '7'
    FistNumber += '7'
}

function Clicar8(){ // função para inserir 8 no visor e na variável 'FistNumber'
    visor.value += '8'
    FistNumber += '8'
}

function Clicar9(){ // função para inserir 9 no visor e na variável 'FistNumber'
    visor.value += '9'
    FistNumber += '9'
}

function ClicarZero(){ // função para inserir 0 no visor e na variável 'FistNumber'
    visor.value += '0'
    FistNumber += '0'
}

function ClicarPonto(){ // função para inserir '.' no visor e na variável 'FistNumber'
    visor.value += '.'
    FistNumber += '.'
}

function ClicarLimpar(){ // função usada para limpar os valores do visor e das variáveis para voltar ao estágio inicial
    visor.value = ''
    FistNumber = ''
    SecundNumber = 0
    verificador = 0
}

function ClicarMais(){ // função para inserir '+' no visor, alocar o valor de 'FistNumber'(já convertido em number) em 'SecundNumber' e tomar algumas medidas preventivas
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

function ClicarMenos(){ // função para inserir '-' no visor, alocar o valor de 'FistNumber'(já convertido em number) em 'SecundNumber' e tomar algumas medidas preventivas
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

function ClicarMulti(){ // função para inserir 'x' no visor, alocar o valor de 'FistNumber'(já convertido em number) em 'SecundNumber' e tomar algumas medidas preventivas
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

function ClicarDivi(){ // função para inserir '/' no visor, alocar o valor de 'FistNumber'(já convertido em number) em 'SecundNumber' e tomar algumas medidas preventivas
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

function ClicarPorcento(){ // função para inserir '%' no visor, alocar o valor de 'FistNumber'(já convertido em number) em 'SecundNumber' e tomar algumas medidas preventivas
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

function somar(num1, num2){ // função para somar os valores digitados
   return Number(num1) + Number(num2)
}

function subtrair(num1, num2){ // função para subtrair os valores digitados
   return Number(num1) - Number(num2)
}

function multiplicar(num1, num2){ // função para multiplicar os valores digitados
   return Number(num1) * Number(num2)
}

function dividir(num1, num2){ // função para dividir os valores digitados
   return Number(num1) / Number(num2)
}

function porcentgem(num1, num2){ // função para calcular a porcentagem do valor digitado
   return (Number(num1) * Number(num2))/100
}

function ClicarIgual(){ // função que imprime o resultado na tela a depender da operação escolhida
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