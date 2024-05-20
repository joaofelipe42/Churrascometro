let adultos = document.getElementsByTagName('input')[0];
let criancas = document.getElementsByTagName('input')[1];
let tempo = document.getElementsByTagName('input')[2];

function calcularItens(){
  event.preventDefault();

  
  let valoradultos = adultos.value; 
  let valorcriancas = criancas.value * 0.5;
  let valortempo = tempo.value;

  if (valortempo <= 4){
    let p1 = document.getElementById('p1');
    p1.innerHTML = parseFloat((valoradultos * valorcriancas) * 0.4).toFixed(2) + ' ' + 'Kg de carne'

    let p2 = document.getElementById('p2');
    p2.innerHTML = parseFloat(valoradultos * 1.2).toFixed(2) + ' ' + 'Litros de Cerveja'

    let p3 = document.getElementById('p3');
    p3.innerHTML = parseFloat((valoradultos + valorcriancas)).toFixed(1) + ' ' + 'Litros de Refri'
  }
  else{
    let p1 = document.getElementById('p1');
    p1.innerHTML = parseFloat((valoradultos + valorcriancas) * 0.6).toFixed(2) + ' ' + 'Kg de carne'

    let p2 = document.getElementById('p2');
    p2.innerHTML = parseFloat(valoradultos * 2).toFixed(2) + ' ' + 'Litros de Cerveja' 

    let p3 = document.getElementById('p3');
    p3.innerHTML = parseFloat((valoradultos + valorcriancas) * 1.5).toFixed(1) + ' ' + 'Litros de Refri'
  }

};










