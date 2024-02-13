import { IFooterBtn, IMenu, IStep, SoialIcon } from "@/types";

export const data: IStep[] = [
  {
    name: "INVITE FRIENDS",
    description: "Refer friends with your unique referral link.",
    linkToImg: "/assets/invite.svg",
    id: "1",
  },
  {
    name: "COLLECT COINS",
    description:
      "Get 1 coin for each friend that installs our extension using your referral link.",
    linkToImg: "/assets/collect-coins.svg",
    id: "2",
  },
  {
    name: "GET VOUCHER",
    description:
      "Redeem for a $20 hotel booking voucher once you collect 20 coins.",
    linkToImg: "/assets/voucher.svg",
    id: "3",
  },
];

export const dataFooterBtns: IFooterBtn[] = [
  {
    link: "",
    resource: "chrome web store",
    srcToImg: "/assets/chrome.svg",
    id: "111",
  },
  {
    link: "",
    resource: "apple app store",
    srcToImg: "/assets/apple.svg",
    id: "222",
  },
];

export const quickLinks: IMenu[] = [
  { name: "Price Comparison", href: "/price-comparison", id: "444" },
  { name: "Chrome Extension", href: "/chrome-extension", id: "4445" },
  { name: "How It Works", href: "/", id: "6666" },
  { name: "Ratepunk Blog", href: "/blog", id: "7777" },
  { name: "Privacy Policy", href: "/", id: "8888" },
];

export const menu: IMenu[] = [
  {
    href: "/chrome-extension",
    name: "Chrome Extension",
    id: "111",
  },
  {
    href: "/price-comparison",
    name: "Price Comparison",
    id: "222",
  },
  {
    href: "/blog",
    name: "Blog",
    id: "333",
  },
];

export const socialIcons: SoialIcon[] = [
  {
    href: "/assets/instagram.svg",
    id: "1111",
  },
  {
    href: "/assets/facebook.svg",
    id: "4222",
  },
  {
    href: "/assets/linkedin.svg",
    id: "3333",
  },
  {
    href: "/assets/twitter.svg",
    id: "444",
  },
  {
    href: "/assets/tiktok.svg",
    id: "555",
  },
];
