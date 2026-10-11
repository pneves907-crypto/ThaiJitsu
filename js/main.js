// Thaijitsu — interações mínimas da página única

(function () {
  "use strict";

  // Menu mobile
  var botao = document.querySelector(".nav-toggle");
  var menu = document.getElementById("menu-principal");

  if (botao && menu) {
    botao.addEventListener("click", function () {
      var aberto = botao.getAttribute("aria-expanded") === "true";
      botao.setAttribute("aria-expanded", String(!aberto));
      botao.setAttribute("aria-label", aberto ? "Abrir menu" : "Fechar menu");
      menu.classList.toggle("is-open", !aberto);
    });

    // Fecha o menu ao tocar em um link
    menu.addEventListener("click", function (evento) {
      if (evento.target.closest("a")) {
        botao.setAttribute("aria-expanded", "false");
        botao.setAttribute("aria-label", "Abrir menu");
        menu.classList.remove("is-open");
      }
    });
  }

  // Ano no rodapé
  var ano = document.getElementById("ano");
  if (ano) {
    ano.textContent = String(new Date().getFullYear());
  }
})();
