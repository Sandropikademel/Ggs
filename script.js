let contador = parseInt(localStorage.getItem('contador')) || 0;

const contadorElemento = document.getElementById('contador');
const botao = document.getElementById('botao');
const botaoResetar = document.getElementById('resetar');

function atualizarContador() {
  contadorElemento.textContent = contador;
  contadorElemento.style.transform = 'scale(1.2)';
  setTimeout(() => {
    contadorElemento.style.transform = 'scale(1)';
  }, 150);
  localStorage.setItem('contador', contador);
}

// Inicializa com valor salvo
atualizarContador();

botao.addEventListener('click', () => {
  contador++;
  atualizarContador();
});

botaoResetar.addEventListener('click', () => {
  contador = 0;
  atualizarContador();
});
