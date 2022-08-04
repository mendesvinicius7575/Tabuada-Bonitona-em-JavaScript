
// selecionando as tags para utilizar
let n = document.querySelector('#num')
let ir = document.querySelector('#ir')
let res = document.querySelector('#res')
let limp = document.querySelector('#limp')
let tab = document.querySelector('#tabuada')
let test;
let item;
let lis;

// botao para calcular
ir.addEventListener('click', function(e){

    let num = Number(n.value)
    let text = ''
   

    if(test === true){
        alert('Limpar Antes')
    }else{
    // faz a tabuada e incrementa um li constando no conteudo cada multiplicação
    for(let i = 0; i < 10; i++){
        
        text =  num + " x " + i + " = " + (num*i);
        item = document.createElement('li')
        item.textContent = text
        res.appendChild(item)
    }
    //True para Ja preenchido os campos
    test = true;
    }
    tab.textContent = `Tabuada do: ${num}`
    //define lis para poder depois apagar 
    lis = document.querySelectorAll('li')
    e.preventDefault();
})

limp.addEventListener('click', function(e){

    //passa pelo array limpando linha por linha (li por li)
    for(let cont = 0; cont < 10; cont ++){
         lis[cont].remove()
    }
    
    //retorna false para que possa adicionar nova tabuada
    test = false;



    e.preventDefault();

})
