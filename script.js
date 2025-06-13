let contador = parseInt(localStorage.getItem('contador')) || 0;

const contadorElemento = document.getElementById('contador');
const botao = document.getElementById('botao');
const botaoResetar = document.getElementById('resetar');

function gerarCorChoque() {
  const cores = ['#00d0ff', '#f0c000', '#ffffff'];
  return cores[Math.floor(Math.random() * cores.length)];
}

function atualizarContador() {
  contadorElemento.textContent = contador;
  contadorElemento.style.color = gerarCorChoque();
  contadorElemento.style.transform = 'scale(1.3)';
  setTimeout(() => {
    contadorElemento.style.transform = 'scale(1)';
  }, 150);
  localStorage.setItem('contador', contador);
}

// Inicializa
atualizarContador();

botao.addEventListener('click', () => {
  contador++;
  atualizarContador();
});

botaoResetar.addEventListener('click', () => {
  contador = 0;
  atualizarContador();
});
