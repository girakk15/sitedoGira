// ============================================================
//  CONFIGURAÇÃO DO SITE — edite só este arquivo
// ============================================================

const SITE = {
  nome: "Gira",
  bio: "Falo sobre Minecraft, mods, IA e shaders.\nBaixe coisas úteis e grátis aqui embaixo 👇", // \n = quebra de linha
  avatar: "img/skin.webp", // sua skin animada (fundo transparente)

  redes: [
    { nome: "TikTok",  usuario: "@giratkk", url: "https://www.tiktok.com/@giratkk", icone: "tiktok" },
    { nome: "YouTube", usuario: "@girakk",  url: "https://www.youtube.com/@girakk",  icone: "youtube" },
    { nome: "X",       usuario: "@Giraxkk", url: "https://x.com/Giraxkk",           icone: "x" },
  ],

  apoio: {
    livepix: "https://livepix.gg/gira",
  },

  // Contato pra parcerias / publis
  contato: {
    email: "girakk15@gmail.com",
    assunto: "Parceria com o Gira", // assunto que já vem preenchido no email
  },

  // Plataforma para a qual os packs são feitos (aparece no topo da seção Packs)
  plataforma: {
    nome: "Rust Edition",
    launcher: "Minecraft Horizon Launcher",
    logo: "img/horizon-logo.png",
    // passos do "Como instalar" (aparecem no fim da seção Packs)
    passos: [
      "Baixe o .zip do pack aqui em cima.",
      "Coloque o .zip (sem descompactar) na pasta do Horizon: <code>%appdata%\\horizon\\shaderpacks</code> pra shaders ou <code>%appdata%\\horizon\\resourcepacks</code> pra texturas.",
      "Abra o Horizon Launcher e ative o pack nas opções.",
    ],
  },

  // ----------------------------------------------------------
  //  PACKS — copie um bloco { ... } para adicionar outro.
  //  arquivo: caminho do arquivo dentro da pasta downloads/
  //           (ou um link completo https://... se o arquivo for grande)
  //  tipo: "mods", "shaders" ou "texturas"
  //  imagens: prints do shader (coloque em img/shaders/). Pode ter 1 ou vários.
  //  tags: etiquetas extras em destaque, ex: ["Ultra Leve"]
  //  autor / original: crédito ao criador do pack original (aparece no card)
  // ----------------------------------------------------------
  packs: [
    {
      nome: "MakeUp Ultra Fast 9.6",
      imagens: ["img/shaders/makeup-1.webp", "img/shaders/makeup-2.webp", "img/shaders/makeup-3.webp"],
      tags: ["Ultra Leve"],
      tipo: "shaders",
      loader: "Horizon Port",
      descricao: "Shader super leve, roda liso até em PC fraco.",
      tamanho: "0,4 MB",
      arquivo: "downloads/MakeUp-UltraFast-9.6-horizonPort.zip",
      autor: "javiergcim",
      original: "https://modrinth.com/shader/makeup-ultra-fast-shaders",
    },
    {
      nome: "Mellow 3.5",
      imagens: ["img/shaders/mellow-1.webp", "img/shaders/mellow-2.webp", "img/shaders/mellow-3.webp", "img/shaders/mellow-4.webp"],
      tags: ["Ultra Leve"],
      tipo: "shaders",
      loader: "Horizon Port",
      descricao: "Visual suave e aconchegante.",
      tamanho: "2,1 MB",
      arquivo: "downloads/Mellow-v3.5-horizonPort.zip",
      autor: "TheCMK",
      original: "",
    },
    {
      nome: "Miniature 2.19",
      imagens: ["img/shaders/miniature-1.webp", "img/shaders/miniature-2.webp", "img/shaders/miniature-3.webp"],
      tags: ["Ultra Leve"],
      tipo: "shaders",
      loader: "Horizon Port",
      descricao: "Levíssimo, com sombras e reflexo na água. Ótimo pra PC fraco.",
      tamanho: "40 KB",
      arquivo: "downloads/Miniature-2.19-horizonPort.zip",
      autor: "ukrech",
      original: "https://modrinth.com/shader/miniature-shader",
      licenca: "MIT",
      licencaUrl: "https://opensource.org/license/mit",
    },
    {
      nome: "E-LITE 5.1.3",
      imagens: ["img/shaders/elite-1.webp", "img/shaders/elite-2.webp", "img/shaders/elite-3.webp"],
      tags: ["Médio"],
      tipo: "shaders",
      loader: "Horizon Port",
      descricao: "Versão turbinada do MakeUp: mais bonita e cheia de opções pra ajustar. Pede um PC médio.",
      tamanho: "0,6 MB",
      arquivo: "downloads/E-LITE-5.1.3-horizonPort.zip",
      autor: "Entokito",
      original: "https://modrinth.com/shader/lite-shaders",
      licenca: "LGPL-3.0",
      licencaUrl: "https://www.gnu.org/licenses/lgpl-3.0.html",
    },
    {
      nome: "BVS – Best Vanilla Shader 1.9.3",
      imagens: ["img/shaders/bvs-1.webp", "img/shaders/bvs-2.webp", "img/shaders/bvs-3.webp"],
      tags: ["Ultra Leve"],
      tipo: "shaders",
      loader: "Horizon Port",
      descricao: "Simples e limpo: deixa o Minecraft mais bonito sem mudar a cara do vanilla.",
      tamanho: "70 KB",
      arquivo: "downloads/BVS-1.9.3-horizonPort.zip",
      autor: "LoLip_p",
      original: "https://modrinth.com/shader/bvs",
      licenca: "CC BY 4.0",
      licencaUrl: "https://creativecommons.org/licenses/by/4.0/deed.pt-br",
    },
    {
      nome: "Bloop 1.8.0 Alpha 3",
      imagens: ["img/shaders/bloop-1.webp", "img/shaders/bloop-2.webp", "img/shaders/bloop-3.webp"],
      tipo: "shaders",
      loader: "Horizon Port",
      descricao: "Feito pra ser rápido sem perder o visual. Dá pra ajustar do PC fraco ao forte.",
      tamanho: "5,1 MB",
      arquivo: "downloads/Bloop-1.8.0-Alpha-3-horizonPort.zip",
      autor: "espen96",
      original: "https://modrinth.com/shader/bloop-shaders",
      licenca: "CC BY-NC-SA 4.0",
      licencaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt-br",
    },
    {
      nome: "Eclipse 1.0",
      imagens: ["img/shaders/eclipse-1.webp", "img/shaders/eclipse-2.webp", "img/shaders/eclipse-3.webp"],
      tipo: "shaders",
      loader: "Horizon Port",
      descricao: "Luz quente e pôr do sol caprichado. Fica lindo em vila e construção.",
      tamanho: "0,2 MB",
      arquivo: "downloads/Eclipse-1.0-horizonPort.zip",
      autor: "gamerbenyt",
      original: "https://modrinth.com/shader/eclipseshaders",
      licenca: "CC BY 4.0",
      licencaUrl: "https://creativecommons.org/licenses/by/4.0/deed.pt-br",
    },
    {
      nome: "Builder's QOL 2.11.0",
      imagens: ["img/shaders/builders-1.webp", "img/shaders/builders-2.webp", "img/shaders/builders-3.webp"],
      tipo: "shaders",
      loader: "Horizon Port",
      descricao: "Leve e pensado pra quem constrói: nuvens bonitas, aurora e Nether caprichado.",
      tamanho: "2,4 MB",
      arquivo: "downloads/BuildersQOL-2.11.0-horizonPort.zip",
      autor: "Builderb0y",
      original: "https://modrinth.com/shader/builders-qol-shaders",
      licenca: "CC BY-NC 4.0",
      licencaUrl: "https://creativecommons.org/licenses/by-nc/4.0/deed.pt-br",
    },
    {
      nome: "Body Camera 1.6.2",
      imagens: ["img/shaders/bodycam-1.webp", "img/shaders/bodycam-2.webp", "img/shaders/bodycam-3.webp"],
      tipo: "shaders",
      loader: "Horizon Port",
      descricao: "Deixa o jogo com cara de câmera corporal: lente olho de peixe, desfoque e exposição automática.",
      tamanho: "0,5 MB",
      arquivo: "downloads/BodyCamera-1.6.2-horizonPort.zip",
      autor: "LoLip_p",
      original: "https://modrinth.com/shader/body-camera-shader",
      licenca: "CC BY 4.0",
      licencaUrl: "https://creativecommons.org/licenses/by/4.0/deed.pt-br",
    },
    {
      nome: "Cursed Fog 1.0.10",
      imagens: ["img/shaders/cursedfog-1.webp", "img/shaders/cursedfog-2.webp", "img/shaders/cursedfog-3.webp"],
      tipo: "shaders",
      loader: "Horizon Port",
      descricao: "Neblina pesada e clima de terror. Perfeito pra mapa de medo ou Backrooms.",
      tamanho: "70 KB",
      arquivo: "downloads/CursedFog-1.0.10-horizonPort.zip",
      autor: "LoLip_p",
      original: "https://modrinth.com/shader/cursed-fog",
      licenca: "CC BY 4.0",
      licencaUrl: "https://creativecommons.org/licenses/by/4.0/deed.pt-br",
    },
    {
      nome: "CTR VCR 1.4.4",
      imagens: ["img/shaders/ctrvcr-1.webp", "img/shaders/ctrvcr-2.webp", "img/shaders/ctrvcr-3.webp"],
      tipo: "shaders",
      loader: "Horizon Port",
      descricao: "Visual retrô de TV antiga e fita VHS, com chiado e linhas na tela.",
      tamanho: "40 KB",
      arquivo: "downloads/CTR-VCR-1.4.4-horizonPort.zip",
      autor: "millennIumAMbiguity",
      original: "https://modrinth.com/shader/ctrvcr",
      licenca: "Apache 2.0",
      licencaUrl: "https://www.apache.org/licenses/LICENSE-2.0",
    },
    {
      nome: "Fresh Textures 2.0.1",
      imagens: ["img/shaders/fresh-1.webp", "img/shaders/fresh-2.webp", "img/shaders/fresh-3.webp"],
      tipo: "texturas",
      loader: "Horizon Port",
      descricao: "Texturas vanilla mais caprichadas e detalhadas, sem perder a cara do Minecraft.",
      tamanho: "6,9 MB",
      arquivo: "downloads/FreshTextures-v2.0.1.1-horizonPort.zip",
      autor: "godhusk",
      original: "https://modrinth.com/resourcepack/fresh-textures",
      licenca: "CC BY-SA 4.0",
      licencaUrl: "https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br",
    },

    // ⚠️ DESLIGADOS até confirmar a licença (tire o // do começo das linhas pra ativar)
    // BSL 10.1.8 — Capt Tatsu: conferir os termos em https://bitslablab.com antes de publicar
    // Complementary Reimagined — EminGT: a licença NÃO permite upload direto de arquivo
  ],
};
