export const YukinaConfig = {
  Title: "Difusor Aromas",
  SubTitle: "Siente el bienestar en cada aroma",
  UseHitokotoSubtitle: false, // Usa el SubTitle personalizado
  Description:
    "Tienda online de difusores de aromas y aceites esenciales. Transformamos tu ambiente con bienestar y relajación.",

  IconfontURL: "//at.alicdn.com/t/c/font_4507154_ls2dlyz0b1a.css",
  Avatar: "https://elsaltoweb.es/wp-content/uploads/2024/12/logo-2.webp",

  Username: "Difusor Aromas",
  Sign: "Vive la experiencia sensorial.",

  SocialLinks: [
    {
      icon: "ic-instagram",
      link: "https://instagram.com/difusoraromas",
    },
    {
      icon: "ic-facebook",
      link: "https://www.facebook.com/difusor.aromas.2023",
    },
    {
      icon: "ic-twitter",
      link: "https://twitter.com/difusoraromas",
    },
  ],

  EnableBanner: true,

  // NOT IMPLEMENTED
  SlugGenerateMode: "HASH", // 'RAW' | 'HASH'

  HitokotoSettings: {
    // see: https://developer.hitokoto.cn/sentence/#%E8%AF%B7%E6%B1%82%E5%9C%B0%E5%9D%80
    url: "international.v1.hitokoto.cn",
    // see: https://developer.hitokoto.cn/sentence/#%E5%8F%A5%E5%AD%90%E7%B1%BB%E5%9E%8B-%E5%8F%82%E6%95%B0
    content_types: ["a", "b"],
  },
};
