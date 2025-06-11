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

// 🔹 Atualiza o contador de tempo desde 17/11/2021
function updateCounter() {
  const startDate = new Date(2021, 10, 17); // Novembro é mês 10 (zero-based)
  const now = new Date();

  // 🔹 Calcula a diferença total em milissegundos
  const diff = now - startDate;

  // 🔹 Converte para unidades de tempo
  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

  // 🔹 Calcula anos, meses e dias corretamente
  let diffYears = now.getFullYear() - startDate.getFullYear();
  let diffMonths = now.getMonth() - startDate.getMonth();
  let diffDays = now.getDate() - startDate.getDate();

  if (diffDays < 0) {
    diffMonths--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    diffDays += lastMonth.getDate();
  }

  if (diffMonths < 0) {
    diffYears--;
    diffMonths += 12;
  }

  // 🔹 Atualiza os valores na tela
  document.getElementById("anos").innerText = diffYears;
  document.getElementById("meses").innerText = diffMonths;
  document.getElementById("dias").innerText = diffDays;
  document.getElementById("horas").innerText = hours;
  document.getElementById("minutos").innerText = minutes;
  document.getElementById("segundos").innerText = seconds;
}

// 🔹 Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);

// 🔹 Inicializa o Swiper.js para o slider de imagens
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
