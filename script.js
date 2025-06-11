document
  .getElementById("startButton")
  .addEventListener("click", function (event) {
    createHeartAtClick(event); // 🔹 Cria um coração no clique

    let count = 5;
    const button = document.getElementById("startButton");
    const message = document.getElementById("message");

    // 🔹 Mensagem com quebra de linha
    message.innerHTML = "Sorriso bonito,<br>vou te mostrar o que eu preparei!";
    button.disabled = true; // 🔹 Evita múltiplas ativações

    const countdown = setInterval(() => {
      button.innerText = count;
      count--;

      if (count < 0) {
        clearInterval(countdown);
        document.querySelector(".home").style.display = "none";
        document.getElementById("novaTela").style.display = "block";

        // 🔹 Inicia a animação dos corações
        startHeartAnimation();
      }
    }, 1000);
  });

// 🔹 Função para criar um coração no clique
function createHeartAtClick(event) {
  const heart = document.createElement("div");
  heart.classList.add("click-heart");
  heart.innerHTML = "❤️";

  // 🔹 Define a posição do coração com base no clique
  heart.style.left = `${event.clientX}px`;
  heart.style.top = `${event.clientY}px`;

  document.body.appendChild(heart);

  // 🔹 Remove o coração após a animação
  setTimeout(() => {
    heart.remove();
  }, 2000);
}

// Contador de tempo desde 17/11/2021
function updateCounter() {
  const startDate = new Date(2021, 11, 17); // 🔹 Corrigido para novembro do jeito certo
  const now = new Date();

  // Calcula a diferença total em milissegundos
  const diff = now - startDate;

  // Converte para unidades de tempo
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

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);

// Inicializa o Swiper.js para o slider de imagens
var swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  grabCursor: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// 🔹 Função para criar corações caindo
function startHeartAnimation() {
  const heartContainer = document.getElementById("heartContainer");
  let heartInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // 🔹 Define posição aleatória
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-10px"; // Começa acima da tela

    heartContainer.appendChild(heart);

    // 🔹 Remove o coração após a animação
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 300); // 🔹 Cria um coração a cada 300ms

  // 🔹 Para a animação após 5 segundos
  setTimeout(() => {
    clearInterval(heartInterval);
  }, 5000);
}

// 🔹 Evento do botão para abrir o pop-up com a imagem
document.getElementById("novoBotao").addEventListener("click", function () {
  document.getElementById("popup").style.display = "flex";
});

// 🔹 Evento para fechar o pop-up ao clicar no "X"
document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});
