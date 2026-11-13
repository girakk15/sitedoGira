(() => {
  const $ = (s) => document.querySelector(s);

  const ICONES = {
    tiktok: '<svg viewBox="0 0 24 24"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.37-2.48V9.66A5.73 5.73 0 0 0 4.16 15.3a5.7 5.7 0 0 0 5.7 5.7 5.7 5.7 0 0 0 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.25-1.48z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg>',
    discord: '<svg viewBox="0 0 24 24"><path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.6 1.3a18.4 18.4 0 0 0-5.5 0L8.6 3a19.7 19.7 0 0 0-4.9 1.4C.6 9 -.3 13.6.1 18a19.9 19.9 0 0 0 6 3l1.3-2a12.9 12.9 0 0 1-2-1l.5-.4a14.2 14.2 0 0 0 12.2 0l.5.4-2 1 1.3 2a19.8 19.8 0 0 0 6-3c.5-5.1-.8-9.6-3.6-13.6zM8 15.3c-1.2 0-2.2-1.1-2.2-2.4S6.8 10.5 8 10.5s2.2 1.1 2.2 2.4-1 2.4-2.2 2.4zm8 0c-1.2 0-2.2-1.1-2.2-2.4s1-2.4 2.2-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM22 7c-.1-1.6-.4-3-1.6-4.2S17.6 1.2 16 1.1C14.4 1 9.6 1 8 1.1 6.4 1.2 5 1.6 3.8 2.8S2.2 5.4 2.1 7C2 8.6 2 13.4 2.1 15c.1 1.6.4 3 1.6 4.2S6.4 20.8 8 20.9c1.6.1 6.4.1 8 0 1.6-.1 3-.4 4.2-1.6S21.8 16.6 21.9 15c.1-1.6.1-6.4.1-8zm-2.1 9.6a3.3 3.3 0 0 1-1.8 1.8c-1.3.5-4.3.4-5.6.4s-4.4.1-5.6-.4a3.3 3.3 0 0 1-1.8-1.8c-.5-1.3-.4-4.3-.4-5.6s-.1-4.4.4-5.6A3.3 3.3 0 0 1 6.9 3.6c1.3-.5 4.3-.4 5.6-.4s4.4-.1 5.6.4a3.3 3.3 0 0 1 1.8 1.8c.5 1.3.4 4.3.4 5.6s.1 4.4-.4 5.6z"/></svg>',
  };
  const CORES = { tiktok: "#ff3ea5", youtube: "#ff4b4b", discord: "#7b8cff", instagram: "#ffb03c" };
  const NOMES_TIPO = { todos: "Todos", mods: "Mods", shaders: "Shaders", texturas: "Texturas" };

  // Perfil
  $("#nome").textContent = SITE.nome;
  $("#bio").textContent = SITE.bio;
  $("#avatar").src = SITE.avatar;
  $("#ano").textContent = new Date().getFullYear();

  // Redes
  $("#redes").innerHTML = SITE.redes.map((r) => `
    <a class="rede" href="${r.url}" target="_blank" rel="noopener" style="--c:${CORES[r.icone] || "var(--cyan)"}">
      ${ICONES[r.icone] || ""}
      <span class="info"><strong>${r.nome}</strong><small>${r.usuario}</small></span>
    </a>`).join("");

  // Plataforma + passos
  const plat = SITE.plataforma;
  if (plat) {
    $("#plataforma").innerHTML = `
      ${plat.logo ? `<img class="plat-logo" src="${plat.logo}" alt="">` : ""}
      <span>Feito pra <strong>${plat.nome}</strong> · ${plat.launcher}</span>`;
    $("#passos").innerHTML = (plat.passos || []).map((t) => `<li><span>${t}</span></li>`).join("");
  }
  $("#nota-packs").innerHTML =
    `Packs convertidos com <a href="https://github.com/merenotnoonereal/Horizon-Translator" target="_blank" rel="noopener">Horizon Translator</a>. ` +
    `Créditos aos autores originais em cada card. Na dúvida, chama nos comentários!`;

  // Packs + filtros
  const tipos = ["todos", ...new Set(SITE.packs.map((p) => p.tipo))];
  const variosTipos = tipos.length > 2;
  let filtroAtual = "todos";
  const ICONE_DL = '<svg class="ic-dl" viewBox="0 0 8 8" aria-hidden="true"><path d="M3 0h2v3h2v1H6v1H5v1H3V5H2V4H1V3h2zM0 7h8v1H0z"/></svg>';

  function galeriaHTML(p) {
    const imgs = p.imagens || [];
    if (!imgs.length) return "";
    return `
        <div class="galeria" data-i="0">
          ${imgs.map((src, i) => `<img src="${src}" alt="${p.nome}: print ${i + 1}" loading="lazy" class="${i ? "" : "ativa"}" onerror="this.classList.add('quebrada')">`).join("")}
          <div class="gal-vazia">📷 print em breve</div>
          ${imgs.length > 1 ? `
          <button class="gal-btn gal-prev" type="button" aria-label="Print anterior">‹</button>
          <button class="gal-btn gal-next" type="button" aria-label="Próximo print">›</button>
          <span class="gal-cont">1/${imgs.length}</span>` : ""}
        </div>`;
  }

  function renderPacks() {
    const lista = SITE.packs.filter((p) => filtroAtual === "todos" || p.tipo === filtroAtual);
    $("#packs").innerHTML = lista.map((p) => {
      const externo = /^https?:\/\//.test(p.arquivo);
      const chips = [
        variosTipos ? `<span class="chip tipo">${NOMES_TIPO[p.tipo] || p.tipo}</span>` : "",
        ...(p.tags || []).map((t) => `<span class="chip destaque">⚡ ${t}</span>`),
        p.versao ? `<span class="chip">MC ${p.versao}</span>` : "",
        p.loader ? `<span class="chip">${p.loader}</span>` : "",
      ].join("");
      return `
      <article class="pack" data-tipo="${p.tipo}">
        ${galeriaHTML(p)}
        <div class="pack-corpo">
          <h3>${p.nome}</h3>
          ${chips ? `<div class="meta">${chips}</div>` : ""}
          <p class="desc">${p.descricao}</p>
          ${p.autor ? `<p class="credito">Original por ${p.original ? `<a href="${p.original}" target="_blank" rel="noopener">${p.autor}</a>` : p.autor}${p.licenca ? ` · licença <a href="${p.licencaUrl}" target="_blank" rel="noopener">${p.licenca}</a> (convertido pro Horizon)` : ""}</p>` : ""}
          <a class="btn btn-dl" href="${p.arquivo}" ${externo ? 'target="_blank" rel="noopener"' : "download"}>
            ${ICONE_DL} Baixar ${p.tamanho ? `<span class="tam">· ${p.tamanho}</span>` : ""}
          </a>
        </div>
      </article>`;
    }).join("");
  }

  // Galeria: setas + abrir em tela cheia
  $("#packs").addEventListener("click", (e) => {
    const gal = e.target.closest(".galeria");
    if (!gal) return;
    const fotos = [...gal.querySelectorAll("img")];
    let i = +gal.dataset.i;
    if (e.target.closest(".gal-btn")) {
      i = (i + (e.target.closest(".gal-next") ? 1 : -1) + fotos.length) % fotos.length;
      gal.dataset.i = i;
      fotos.forEach((f, k) => f.classList.toggle("ativa", k === i));
      const c = gal.querySelector(".gal-cont");
      if (c) c.textContent = `${i + 1}/${fotos.length}`;
    } else {
      const atual = fotos[i];
      if (!atual || atual.classList.contains("quebrada")) return;
      const validas = fotos.filter((f) => !f.classList.contains("quebrada"));
      abrirLightbox(validas, validas.indexOf(atual));
    }
  });

  // Tela cheia com setas
  const lb = $("#lightbox");
  let lbFotos = [], lbI = 0;
  function mostrarLb() {
    const f = lbFotos[lbI];
    lb.querySelector("img").src = f.src;
    lb.querySelector("img").alt = f.alt;
    lb.querySelector(".lb-cont").textContent = lbFotos.length > 1 ? `${lbI + 1}/${lbFotos.length}` : "";
    lb.classList.toggle("unica", lbFotos.length < 2);
  }
  function abrirLightbox(fotos, i) {
    lbFotos = fotos; lbI = Math.max(0, i);
    mostrarLb();
    lb.showModal();
  }
  function passarLb(d) {
    lbI = (lbI + d + lbFotos.length) % lbFotos.length;
    mostrarLb();
  }
  lb.addEventListener("click", (e) => {
    if (e.target.closest(".lb-prev")) passarLb(-1);
    else if (e.target.closest(".lb-next")) passarLb(1);
    else if (e.target.closest(".lb-fechar") || e.target === lb) lb.close();
  });
  document.addEventListener("keydown", (e) => {
    if (!lb.open) return;
    if (e.key === "ArrowLeft") passarLb(-1);
    if (e.key === "ArrowRight") passarLb(1);
  });

  if (variosTipos) {
    $("#filtros").innerHTML = tipos.map((t) =>
      `<button class="filtro" role="tab" data-t="${t}" aria-selected="${t === filtroAtual}">${NOMES_TIPO[t] || t}</button>`
    ).join("");
    $("#filtros").addEventListener("click", (e) => {
      const b = e.target.closest(".filtro");
      if (!b) return;
      filtroAtual = b.dataset.t;
      document.querySelectorAll(".filtro").forEach((x) => x.setAttribute("aria-selected", x === b));
      renderPacks();
    });
  }
  renderPacks();

  // Apoio
  $("#livepix").href = SITE.apoio.livepix;


})();
