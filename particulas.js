// Partículas quadradinhas (estilo pixel) subindo devagar no fundo
(() => {
  const cv = document.getElementById("particulas");
  if (!cv || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = cv.getContext("2d");
  const CORES = ["180,107,255", "34,228,255", "255,255,255"];
  let W, H, dpr, parts = [];

  function novo(inicio) {
    return {
      x: Math.random() * W,
      y: inicio ? Math.random() * H : H + 10,
      s: (Math.random() < 0.7 ? 2 : 3) * dpr,          // tamanho do quadradinho
      vy: (0.08 + Math.random() * 0.25) * dpr,          // velocidade subindo
      vx: (Math.random() - 0.5) * 0.08 * dpr,
      a: 0.08 + Math.random() * 0.22,                    // opacidade (bem sutil)
      fase: Math.random() * Math.PI * 2,
      cor: CORES[Math.random() < 0.6 ? 0 : Math.random() < 0.6 ? 1 : 2],
    };
  }

  function tamanho() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = cv.width = innerWidth * dpr;
    H = cv.height = innerHeight * dpr;
    const qtd = Math.round(Math.min(60, (innerWidth * innerHeight) / 22000));
    parts = Array.from({ length: qtd }, () => novo(true));
  }

  let t = 0;
  function quadro() {
    t += 0.016;
    ctx.clearRect(0, 0, W, H);
    for (const p of parts) {
      p.y -= p.vy;
      p.x += p.vx;
      if (p.y < -10) Object.assign(p, novo(false));
      const brilho = p.a * (0.6 + 0.4 * Math.sin(t * 1.5 + p.fase)); // pisca devagar
      ctx.fillStyle = `rgba(${p.cor},${brilho})`;
      ctx.fillRect(Math.round(p.x), Math.round(p.y), p.s, p.s);
    }
    if (!document.hidden) requestAnimationFrame(quadro);
  }

  let larguraAntes = innerWidth;
  addEventListener("resize", () => {
    // no celular a barra de endereço muda a altura ao rolar: só recria tudo se a largura mudar
    if (innerWidth !== larguraAntes) { larguraAntes = innerWidth; tamanho(); }
    else H = cv.height = innerHeight * dpr;
  });
  document.addEventListener("visibilitychange", () => { if (!document.hidden) requestAnimationFrame(quadro); });
  tamanho();
  requestAnimationFrame(quadro);
})();
