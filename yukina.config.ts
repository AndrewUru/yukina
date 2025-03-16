import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Alva Fusion Designs",
  subTitle: "Tejidos a mano con amor",
  brandTitle: "Alva Fusion Designs",

  description: "Tejidos a mano con amor",

  site: "https://yukina-blog.vercel.app",

  locale: "en", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/WhitePaper233/yukina",
    },
  ],

  username: "Alva y Viviana",
  sign: "Hola somos AlvaFusión.",
  avatarUrl:
    "https://alvafusiondesigns.com/wp-content/uploads/2023/02/quienes-somos.jpg",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/WhitePaper233",
    },
    {
      icon: "mingcute:bilibili-line",
      link: "https://space.bilibili.com/22433608",
    },
    {
      icon: "mingcute:netease-music-line",
      link: "https://music.163.com/#/user/home?id=125291648",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://alvafusiondesigns.com/wp-content/uploads/2023/01/21169.jpg",
    "https://alvafusiondesigns.com/wp-content/uploads/2023/01/21148.jpg",
    "https://alvafusiondesigns.com/wp-content/uploads/2023/01/tienda-e1675170961294.jpg",
    "https://alvafusiondesigns.com/wp-content/uploads/2023/02/279704705_689436725657428_3187083248120010225_n.jpg",
    "https://alvafusiondesigns.com/wp-content/uploads/2023/01/21101.jpg",
    "https://alvafusiondesigns.com/wp-content/uploads/2023/02/carousel-portada-scaled.jpg",
    "https://alvafusiondesigns.com/wp-content/uploads/2023/02/lana-portada2.jpeg",
    "https://alvafusiondesigns.com/wp-content/uploads/2023/01/21169.jpg",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
