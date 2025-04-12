import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "AlvaFusión",
  subTitle: "Designs",
  brandTitle: "AlvaFusión",

  description: "Tejidos a mano con amor",

  site: "https://alvafusiondesigns.com",

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
      nameKey: I18nKeys.nav_bar_tienda,
      href: "/tienda",
    },
  ],

  username: "Alva y Viviana",
  sign: "AlvaFusión.",
  avatarUrl:
    "https://cms.alvafusiondesigns.com/wp-content/uploads/2023/02/quienes-somos.jpg",
  socialLinks: [
    {
      icon: "mdi:instagram",
      link: "https://www.instagram.com/alvafusiondesigns/",
    },
    {
      icon: "mdi:facebook",
      link: "https://www.facebook.com/viviana.machado.395",
    },
    {
      icon: "mdi:whatsapp",
      link: "https://wa.me/34643133867",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://cms.alvafusiondesigns.com/wp-content/uploads/2023/01/tienda-e1675170961294.jpg",
    "https://cms.alvafusiondesigns.com/wp-content/uploads/2023/01/21148.jpg",
    "https://cms.alvafusiondesigns.com/wp-content/uploads/2023/02/carousel-portada-scaled.jpg",
    "https://cms.alvafusiondesigns.com/wp-content/uploads/2023/02/279704705_689436725657428_3187083248120010225_n.jpg",
    "https://cms.alvafusiondesigns.com/wp-content/uploads/2023/01/21101.jpg",
    "https://cms.alvafusiondesigns.com/wp-content/uploads/2023/02/img123.jpg",
    "https://cms.alvafusiondesigns.com/wp-content/uploads/2023/01/21169.jpg",
    "https://cms.alvafusiondesigns.com/wp-content/uploads/2023/02/lana-portada2.jpeg",
    "https://cms.alvafusiondesigns.com/wp-content/uploads/2023/02/1-1-e1675555990812.png",
    "https://cms.alvafusiondesigns.com/wp-content/uploads/2023/02/img83.jpg",
  ],

  slugMode: "RAW", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
