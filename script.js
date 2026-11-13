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
    <a class="rede" href="${r.url}" target="_blank" rel="noopener" style="--c:${CORES[r.icone] || "var(--cyan)"}" aria-label="${r.nome} ${r.usuario} (abre em nova aba)">
      ${(ICONES[r.icone] || "").replace("<svg ", '<svg aria-hidden="true" focusable="false" ')}
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
          <a class="btn btn-dl" href="${p.arquivo}" ${externo ? 'target="_blank" rel="noopener"' : "download"} aria-label="Baixar ${p.nome}${p.tamanho ? `, ${p.tamanho}` : ""}">
            ${ICONE_DL} Baixar ${p.tamanho ? `<span class="tam">· ${p.tamanho}</span>` : ""}
          </a>
        </div>
      </article>`;
    }).join("");
  }

  if (variosTipos) {
    $("#filtros").innerHTML = tipos.map((t) =>
      `<button class="filtro" type="button" data-t="${t}" aria-pressed="${t === filtroAtual}">${NOMES_TIPO[t] || t}</button>`
    ).join("");
    $("#filtros").addEventListener("click", (e) => {
      const b = e.target.closest(".filtro");
      if (!b) return;
      filtroAtual = b.dataset.t;
      document.querySelectorAll(".filtro").forEach((x) => x.setAttribute("aria-pressed", x === b));
      renderPacks();
    });
  }
  renderPacks();

  // Servidor
  const srv = SITE.servidor;
  const enderecos = ((srv && srv.enderecos) || []).filter((e) => e.ip);
  if (enderecos.length) {
    $("#servidor").hidden = false;
    $("#srv-desc").textContent = srv.descricao || "";
    $("#srv-nome").textContent = srv.nome || "";
    $("#srv-enderecos").innerHTML = enderecos.map((e, i) => `
      <div class="srv-end">
        <div class="srv-ip">
          <span class="srv-rotulo">${e.edicao || "IP"}</span>
          <code>${e.ip}</code>
        </div>
        ${e.porta ? `<p class="srv-porta">Porta <code>${e.porta}</code></p>` : ""}
        <button class="btn btn-copiar" type="button" data-i="${i}" aria-label="Copiar IP ${e.edicao || ""}">Copiar IP ${e.edicao || ""}</button>
      </div>`).join("");
    const linhas = (srv.info || []).filter((l) => l.valor);
    $("#srv-info").innerHTML = linhas.map((l) => `<div><dt>${l.rotulo}</dt><dd>${l.valor}</dd></div>`).join("");
    if (srv.pagina) { $("#srv-pagina").href = srv.pagina; $("#srv-pagina").hidden = false; }

    const aviso = $("#srv-aviso");
    let timer;
    $("#srv-enderecos").addEventListener("click", async (ev) => {
      const b = ev.target.closest(".btn-copiar");
      if (!b) return;
      const e = enderecos[+b.dataset.i];
      let ok = false;
      try { await navigator.clipboard.writeText(e.ip); ok = true; }
      catch {
        const t = Object.assign(document.createElement("textarea"), { value: e.ip });
        t.setAttribute("readonly", ""); t.style.cssText = "position:fixed;opacity:0";
        document.body.append(t); t.select();
        try { ok = document.execCommand("copy"); } catch {}
        t.remove();
      }
      aviso.textContent = ok
        ? `✓ IP ${e.edicao || ""} copiado! Agora é só colar no jogo.`
        : "Não deu pra copiar. Segura o dedo no IP e copia.";
      clearTimeout(timer);
      timer = setTimeout(() => (aviso.textContent = ""), 3000);
    });
  }

  // Apoio
  $("#livepix").href = SITE.apoio.livepix;
  $("#livepix").setAttribute("aria-label", "Mandar um LivePix (abre em nova aba)");


})();
