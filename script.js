document.getElementById("startButton").addEventListener("click", function () {
  let count = 5;
  const button = document.getElementById("startButton");
  const message = document.getElementById("message");

  message.innerText = "Sorriso bonito, vou te mostrar o que eu preparei!";

  // Inicia o contador regressivo dentro do botão
  const countdown = setInterval(() => {
    button.innerText = count;
    count--;

    if (count < 0) {
      clearInterval(countdown);
      document.querySelector(".home").style.display = "none";
      document.getElementById("novaTela").style.display = "block";
    }
  }, 1000);
});

// Contador de tempo desde 17/11/2021
function updateCounter() {
  const startDate = new Date(2021, 11, 17); // Novembro de 2021
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

  document.getElementById(
    "contador"
  ).innerText = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
}

setInterval(updateCounter, 1000);

// Slider de imagens
const images = document.querySelectorAll(".slider img");
let currentImage = 0;

function showNextImage() {
  images.forEach((img) => (img.style.display = "none"));
  images[currentImage].style.display = "block";
  currentImage = (currentImage + 1) % images.length;
}

setInterval(showNextImage, 3000);
