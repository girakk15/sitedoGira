// ============================================================
//  Galeria dos cards + visualizador em tela cheia
//  - card: arrasta pro lado (segue o dedo), pontinhos, setas no PC
//  - tela cheia: desliza, miniaturas, zoom (2 toques / clique),
//    arrasta pra baixo pra fechar, teclado ← → Esc
// ============================================================
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const suave = matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  const toque = matchMedia("(hover: none)").matches;
  const visiveis = (tr) => [...tr.children].filter((s) => !s.classList.contains("quebrada"));
  const idxDe = (tr) => Math.round(tr.scrollLeft / (tr.clientWidth || 1)) || 0;

  // ---------- Card ----------
  window.galeriaHTML = (p) => {
    const imgs = p.imagens || [];
    if (!imgs.length) return "";
    const n = imgs.length;
    return `
        <div class="galeria" data-nome="${p.nome}">
          <div class="gal-trilho">
            ${imgs.map((src, i) => `
            <button class="gal-slide" type="button" aria-label="Ver print ${i + 1} de ${n} de ${p.nome} em tela cheia">
              <img src="${src}" alt="" loading="${i ? "lazy" : "eager"}" draggable="false" onerror="this.parentNode.classList.add('quebrada')">
            </button>`).join("")}
          </div>
          <div class="gal-vazia">📷 print em breve</div>
          ${n > 1 ? `
          <button class="gal-btn gal-prev" type="button" aria-label="Print anterior">‹</button>
          <button class="gal-btn gal-next" type="button" aria-label="Próximo print">›</button>
          <div class="gal-pontos" aria-hidden="true">${imgs.map((_, i) => `<span class="${i ? "" : "on"}"></span>`).join("")}</div>` : ""}
          <span class="gal-expandir" aria-hidden="true"><svg viewBox="0 0 8 8"><path d="M0 0h3v1H1v2H0zM5 0h3v3H7V1H5zM0 5h1v2h2v1H0zM7 5h1v3H5V7h2z"/></svg></span>
        </div>`;
  };

  function atualizarCard(gal) {
    const tr = $(".gal-trilho", gal);
    const i = idxDe(tr);
    gal.querySelectorAll(".gal-pontos span").forEach((p, k) => p.classList.toggle("on", k === i));
  }
  function irCard(gal, i, comp = suave) {
    const tr = $(".gal-trilho", gal), n = visiveis(tr).length;
    if (!n) return;
    i = (i + n) % n;
    tr.scrollTo({ left: i * tr.clientWidth, behavior: comp });
  }

  const packs = $("#packs");
  let rafCard;
  packs.addEventListener("scroll", (e) => {
    const tr = e.target;
    if (!tr.classList || !tr.classList.contains("gal-trilho")) return;
    cancelAnimationFrame(rafCard);
    rafCard = requestAnimationFrame(() => atualizarCard(tr.parentNode));
  }, true);
  packs.addEventListener("click", (e) => {
    const gal = e.target.closest(".galeria");
    if (!gal) return;
    const tr = $(".gal-trilho", gal);
    if (e.target.closest(".gal-prev")) return irCard(gal, idxDe(tr) - 1);
    if (e.target.closest(".gal-next")) return irCard(gal, idxDe(tr) + 1);
    const slide = e.target.closest(".gal-slide");
    if (slide) abrir(gal, visiveis(tr).indexOf(slide));
  });

  // ---------- Tela cheia ----------
  const lb = $("#lightbox");
  const lbTr = $(".lb-trilho", lb);
  const lbMini = $(".lb-miniaturas", lb);
  let fotos = [], atual = 0, galOrigem = null, dicaMostrada = false;

  function abrir(gal, i) {
    const tr = $(".gal-trilho", gal);
    fotos = visiveis(tr).map((s) => $("img", s).src);
    if (!fotos.length) return;
    galOrigem = gal;
    const nome = gal.dataset.nome, n = fotos.length;
    $(".lb-titulo", lb).textContent = nome;
    lbTr.innerHTML = fotos.map((src, k) =>
      `<div class="lb-slide"><img src="${src}" alt="${nome}: print ${k + 1} de ${n}" draggable="false"></div>`).join("");
    lbMini.innerHTML = n > 1 ? fotos.map((src, k) =>
      `<button type="button" data-i="${k}" aria-label="Print ${k + 1}"><img src="${src}" alt="" draggable="false"></button>`).join("") : "";
    lb.classList.toggle("unica", n < 2);
    document.documentElement.classList.add("lb-aberto");
    lb.showModal();
    ir(Math.max(0, i), "instant");
    mostrarDica();
  }

  function ir(i, comp = suave) {
    const n = fotos.length;
    i = (i + n) % n;
    desZoom();
    lbTr.scrollTo({ left: i * lbTr.clientWidth, behavior: comp });
    marcar(i);
  }
  function marcar(i) {
    atual = i;
    $(".lb-cont", lb).textContent = fotos.length > 1 ? `${i + 1} / ${fotos.length}` : "";
    [...lbMini.children].forEach((b, k) => {
      b.classList.toggle("on", k === i);
      if (k === i) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
    });
    const b = lbMini.children[i];
    if (b) lbMini.scrollTo({ left: b.offsetLeft - (lbMini.clientWidth - b.offsetWidth) / 2, behavior: suave });
  }

  let rafLb;
  lbTr.addEventListener("scroll", () => {
    cancelAnimationFrame(rafLb);
    rafLb = requestAnimationFrame(() => {
      const i = Math.min(idxDe(lbTr), fotos.length - 1);
      if (i !== atual) { desZoom(); marcar(i); }
    });
  });

  lb.addEventListener("close", () => {
    desZoom();
    document.documentElement.classList.remove("lb-aberto");
    if (galOrigem) irCard(galOrigem, atual, "instant"); // card fica no último print visto
  });

  let ignorarClique = false;
  lb.addEventListener("click", (e) => {
    if (ignorarClique) { ignorarClique = false; return; }
    if (e.target.closest(".lb-prev")) return ir(atual - 1);
    if (e.target.closest(".lb-next")) return ir(atual + 1);
    if (e.target.closest(".lb-fechar")) return lb.close();
    const m = e.target.closest(".lb-miniaturas button");
    if (m) return ir(+m.dataset.i);
    // clique no espaço vazio em volta da imagem fecha
    if (e.target === lb || e.target.classList.contains("lb-slide")) lb.close();
  });

  document.addEventListener("keydown", (e) => {
    if (!lb.open) return;
    if (e.key === "ArrowLeft") { e.preventDefault(); ir(atual - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); ir(atual + 1); }
  });

  addEventListener("resize", () => {
    if (!lb.open) return;
    desZoom();
    lbTr.scrollLeft = atual * lbTr.clientWidth;
  });

  // ---------- Zoom ----------
  const Z = 2.5;
  let zoom = null; // { img, x, y }
  function aplicar() { zoom.img.style.transform = `translate(${zoom.x}px, ${zoom.y}px) scale(${Z})`; }
  function limitar() {
    const mx = Math.max(0, (zoom.img.offsetWidth * Z - lbTr.clientWidth) / 2);
    const my = Math.max(0, (zoom.img.offsetHeight * Z - lbTr.clientHeight) / 2);
    zoom.x = Math.min(mx, Math.max(-mx, zoom.x));
    zoom.y = Math.min(my, Math.max(-my, zoom.y));
  }
  function zoomEm(img, px, py) {
    const r = img.getBoundingClientRect();
    // mantém o ponto clicado debaixo do dedo/cursor
    zoom = { img, x: (px - (r.left + r.width / 2)) * (1 - Z), y: (py - (r.top + r.height / 2)) * (1 - Z) };
    limitar(); aplicar();
    lb.classList.add("zoom");
  }
  function desZoom() {
    if (!zoom) return;
    zoom.img.style.transform = "";
    zoom = null;
    lb.classList.remove("zoom");
  }

  // ---------- Toque / mouse na imagem ----------
  let ptr = null, ultimoToque = 0;
  lbTr.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    ptr = {
      id: e.pointerId, x0: e.clientX, y0: e.clientY, moveu: false, puxando: false,
      img: e.target.closest(".lb-slide img"), zx: zoom && zoom.x, zy: zoom && zoom.y,
    };
    if (zoom) {
      lbTr.setPointerCapture(e.pointerId);
      zoom.img.classList.add("arrastando");
    }
  });
  lbTr.addEventListener("pointermove", (e) => {
    if (!ptr || e.pointerId !== ptr.id) return;
    const dx = e.clientX - ptr.x0, dy = e.clientY - ptr.y0;
    if (Math.hypot(dx, dy) > 6) ptr.moveu = true;
    if (zoom) {
      zoom.x = ptr.zx + dx; zoom.y = ptr.zy + dy;
      limitar(); aplicar();
    } else if (e.pointerType !== "mouse" && (ptr.puxando || (dy > 10 && dy > Math.abs(dx)))) {
      // arrastar pra baixo pra fechar
      ptr.puxando = true;
      lb.classList.add("puxando");
      const d = Math.max(0, dy);
      lbTr.style.transform = `translateY(${d}px)`;
      lb.style.setProperty("--fundo", Math.max(0.25, 1 - d / 400));
    }
  });
  function fimPtr(e, cancelado) {
    if (!ptr || e.pointerId !== ptr.id) return;
    const p = ptr; ptr = null;
    if (zoom) zoom.img.classList.remove("arrastando");
    if (p.puxando) {
      lb.classList.remove("puxando");
      lbTr.style.transform = "";
      lb.style.removeProperty("--fundo");
      if (!cancelado && e.clientY - p.y0 > 100) { lb.close(); return; }
    }
    if (p.moveu) { ignorarClique = true; setTimeout(() => (ignorarClique = false), 50); }
    if (cancelado || p.moveu || !p.img) return;
    // clique (PC) ou dois toques (celular) na imagem = zoom
    if (e.pointerType === "mouse") { zoom ? desZoom() : zoomEm(p.img, e.clientX, e.clientY); return; }
    const agora = Date.now();
    if (agora - ultimoToque < 320) {
      ultimoToque = 0;
      zoom ? desZoom() : zoomEm(p.img, e.clientX, e.clientY);
    } else ultimoToque = agora;
  }
  lbTr.addEventListener("pointerup", (e) => fimPtr(e, false));
  lbTr.addEventListener("pointercancel", (e) => fimPtr(e, true));

  // ---------- Dica (só na primeira vez) ----------
  function mostrarDica() {
    if (dicaMostrada) return;
    dicaMostrada = true;
    const d = $(".lb-dica", lb);
    d.textContent = toque
      ? (fotos.length > 1 ? "Deslize pro lado · toque 2x pra dar zoom · puxe pra baixo pra fechar"
                          : "Toque 2x pra dar zoom · puxe pra baixo pra fechar")
      : "Clique na imagem pra dar zoom" + (fotos.length > 1 ? " · ← → pra trocar" : "");
    d.classList.add("on");
    setTimeout(() => d.classList.remove("on"), 3500);
  }
})();
