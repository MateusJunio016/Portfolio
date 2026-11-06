// Envia um evento "click_interaction" para o dataLayer (Google Tag Manager)
// toda vez que um botão ou link do site é clicado.
//
// O nome do botão vem, nesta ordem, de:
//   1. atributo data-button-name
//   2. atributo aria-label
//   3. texto visível do elemento
//   4. atributo title

const CLICKABLE_SELECTOR = "[data-button-name], a, button, [role='button']";

function getButtonName(element) {
  const name =
    element.getAttribute("data-button-name") ||
    element.getAttribute("aria-label") ||
    (element.innerText || element.textContent || "").trim() ||
    element.getAttribute("title") ||
    "";

  // Junta espaços e quebras de linha e limita o tamanho
  return name.replace(/\s+/g, " ").slice(0, 100);
}

function handleClick(event) {
  const target = event.target;
  if (!target || typeof target.closest !== "function") return;

  const clickable = target.closest(CLICKABLE_SELECTOR);
  if (!clickable) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "click_interaction",
    button_name: getButtonName(clickable) || "(sem nome)",
  });
}

export function initClickTracking() {
  // Fase de captura: o evento é registrado antes da navegação do React Router
  document.addEventListener("click", handleClick, true);
}
