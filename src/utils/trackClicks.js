// Envia eventos de clique para o dataLayer (Google Tag Manager):
//
// - "click_link": links marcados com data-track-link (cards de projeto, que
//   levam para outros sites). Parâmetro: site_name = domínio de destino.
// - "click_interaction": qualquer outro botão ou link do site.
//   Parâmetro: button_name.
//
// O nome do botão vem, nesta ordem, de:
//   1. atributo data-button-name
//   2. atributo aria-label
//   3. texto visível do elemento
//   4. atributo title

const CLICKABLE_SELECTOR = "[data-track-link], [data-button-name], a, button, [role='button']";

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

function getSiteName(element) {
  const link = element.closest("a") || element;
  const href = link.getAttribute("href") || "";
  try {
    return new URL(href, window.location.href).hostname || href;
  } catch (e) {
    return href;
  }
}

function pushEvent(data) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}

function handleClick(event) {
  const target = event.target;
  if (!target || typeof target.closest !== "function") return;

  const clickable = target.closest(CLICKABLE_SELECTOR);
  if (!clickable) return;

  if (clickable.hasAttribute("data-track-link")) {
    pushEvent({
      event: "click_link",
      site_name: getSiteName(clickable) || "(sem endereço)",
    });
    return;
  }

  pushEvent({
    event: "click_interaction",
    button_name: getButtonName(clickable) || "(sem nome)",
  });
}

export function initClickTracking() {
  // Fase de captura: o evento é registrado antes da navegação do React Router
  document.addEventListener("click", handleClick, true);
}
