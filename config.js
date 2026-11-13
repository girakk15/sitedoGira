// ============================================================
//  CONFIGURAÇÃO DO SITE — edite só este arquivo
// ============================================================

const SITE = {
  nome: "Gira",
  bio: "Falo sobre Minecraft, mods, IA e shaders. Baixe coisas úteis e grátis aqui embaixo 👇",
  avatar: "img/skin.webp", // sua skin animada (fundo transparente)

  redes: [
    { nome: "TikTok",  usuario: "@giratkk", url: "https://www.tiktok.com/@giratkk", icone: "tiktok" },
    { nome: "YouTube", usuario: "@girakk",  url: "https://www.youtube.com/@girakk",  icone: "youtube" },
  ],

  apoio: {
    livepix: "https://livepix.gg/gira",
  },

  // ----------------------------------------------------------
  //  SERVIDOR que você joga nas lives.
  //  enderecos: um bloco por edição (cada um ganha seu botão de copiar).
  //  Sem nenhum endereço preenchido, a seção fica escondida.
  //  info: linhas extras (rótulo + valor). Linhas sem valor não aparecem.
  //  pagina: link com o passo a passo pra entrar (opcional).
  // ----------------------------------------------------------
  servidor: {
    nome: "Aranha SMP",
    descricao: "O servidor onde eu jogo nas lives. Entra lá!",
    enderecos: [
      { edicao: "Java",    ip: "reino-aranha-4d754e.play.shulkerboxes.com" },
      { edicao: "Bedrock", ip: "reino-aranha-4d754e.bedrock.shulkerboxes.com", porta: "19132" },
    ],
    info: [
      { rotulo: "Versão", valor: "" },
      { rotulo: "Lives", valor: "" },
    ],
    pagina: "https://shulkerboxes.com/pt-br/entrar/reino-aranha-4d754e.play.shulkerboxes.com",
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
      imagens: ["img/shaders/makeup-1.webp", "img/shaders/makeup-2.webp"],
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
      imagens: ["img/shaders/mellow-1.webp", "img/shaders/mellow-2.webp"],
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
      nome: "Fresh Textures 2.0.1",
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
