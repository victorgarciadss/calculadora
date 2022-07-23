let res = document.getElementById('resultado')

function inserir(num){
    let numero = document.getElementById('resultado').innerHTML
    res.innerHTML = numero + num

}


function clean(){
    res.innerHTML = ''
}


function diminuir(){
    let resultado = res.innerHTML;
    res.innerHTML = resultado.substring(0, resultado.length -1)
}




function calcular(){
    
    let resultado = res.innerHTML
    if(resultado){
        res.innerHTML = eval(resultado)
    } else {
        res.innerHTML = 'Clique em algo'
    }

    
    if(res.innerHTML == 15.399999999999999){
        res.innerHTML = 15.4
    }

    if(res.innerHTML.length >= 15){
        res.innerHTML = eval(resultado).toFixed(2)
    }

}

