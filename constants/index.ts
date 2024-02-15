import { v4 } from "uuid";
import { IFooterBtn, IMenu, IStep, SocialIcon } from "@/types";

export const data: IStep[] = [
  {
    name: "INVITE FRIENDS",
    description: "Refer friends with your unique referral link.",
    linkToImg: "/assets/invite.svg",
    id: v4(),
  },
  {
    name: "COLLECT COINS",
    description:
      "Get 1 coin for each friend that installs our extension using your referral link.",
    linkToImg: "/assets/collect-coins.svg",
    id: v4(),
  },
  {
    name: "GET VOUCHER",
    description:
      "Redeem for a $20 hotel booking voucher once you collect 20 coins.",
    linkToImg: "/assets/voucher.svg",
    id: v4(),
  },
];

export const dataFooterBtns: IFooterBtn[] = [
  {
    link: "https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk",
    resource: "chrome web store",
    srcToImg: "/assets/chrome.svg",
    id: v4(),
  },
  {
    link: "https://apps.apple.com/us/app/ratepunk-hotel-and-travel/id1607823726",
    resource: "apple app store",
    srcToImg: "/assets/apple.svg",
    id: v4(),
  },
];

export const quickLinks: IMenu[] = [
  { name: "Price Comparison", href: "/price-comparison", id: v4() },
  { name: "Chrome Extension", href: "/chrome-extension", id: v4() },
  { name: "How It Works", href: "/", id: v4() },
  { name: "Ratepunk Blog", href: "/blog", id: v4() },
  { name: "Privacy Policy", href: "/", id: v4() },
];

export const menu: IMenu[] = [
  {
    href: "/chrome-extension",
    name: "Chrome Extension",
    id: v4(),
  },
  {
    href: "/price-comparison",
    name: "Price Comparison",
    id: v4(),
  },
  {
    href: "/blog",
    name: "Blog",
    id: v4(),
  },
];

export const socialIcons: SocialIcon[] = [
  {
    link: "https://www.instagram.com/ratepunk/",
    srcToImg: "/assets/instagram.svg",
    id: v4(),
  },
  {
    link: "https://www.facebook.com/r8punk/",
    srcToImg: "/assets/facebook.svg",
    id: v4(),
  },
  {
    link: "https://www.linkedin.com/company/ratepunk/?originalSubdomain=lt",
    srcToImg: "/assets/linkedin.svg",
    id: v4(),
  },
  {
    link: "https://twitter.com/rate_punk",
    srcToImg: "/assets/twitter.svg",
    id: v4(),
  },
  {
    link: "https://www.tiktok.com/@ryanthetravelguy?lang=en",
    srcToImg: "/assets/tiktok.svg",
    id: v4(),
  },
];
