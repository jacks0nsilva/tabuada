let tabuada = document.getElementById('tabuada')
tabuada.addEventListener("click", GerarTabuada)

function GerarTabuada(){
    let numero  = document.getElementById('numero')
    let numero2 = Number(numero.value)
    let resultado = document.getElementById('resultado')
    let tab = document.getElementById('seltab')
    if (numero2 <= 0){
        window.alert('Por favor, digite um número válido!')
    } else {
       resultado.innerHTML = `<p>Tabuada de: <strong>${numero2}</strong></p>`
       //tab.innerHTML = ``
        for (let c = 1 ; c <= 10 ; c++){
           // let item = document.createElement('option')
           // item.text = `${numero2} x ${c} = ${numero2 * c}`
           // tab.appendChild(item)
            resultado.innerHTML += `<p>${numero2} x ${c} = <strong>${numero2 * c}</strong> </p>`
        }
    }

}