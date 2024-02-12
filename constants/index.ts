import { IFooterBtn, IStep } from "@/types";

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

export const quickLinks = [
  { name: "Price Comparison", link: "", id: "444" },
  { name: "Chrome Extension", link: "", id: "4445" },
  { name: "How It Works", link: "", id: "6666" },
  { name: "Ratepunk Blog", link: "", id: "7777" },
  { name: "Privacy Policy", link: "", id: "8888" },
];
