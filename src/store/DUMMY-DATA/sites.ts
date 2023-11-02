import { SiteClass } from "../../models/SiteClass";

export const SITES = [
  new SiteClass("one first", require("../../assets/imgs/1.jpg")),
  new SiteClass("trillo", require("../../assets/imgs/trillo-site.png")),
  new SiteClass("three 3rd", require("../../assets/imgs/2.jpg"), "https://css-tricks.com/"),
  new SiteClass("tafaneen", require("../../assets/imgs/tafaneen-sitr.png")),
  new SiteClass("five fifth", require("../../assets/imgs/3.jpg")),
  new SiteClass("natours", require("../../assets/imgs/natours-site.png")),
  new SiteClass("seven seventh", require("../../assets/imgs/4.jpg"), ""),
  new SiteClass("mint", require("../../assets/imgs/mint-site.png"), ""),
  new SiteClass("nine ninth", require("../../assets/imgs/5.jpg")),
  new SiteClass("kasper", require("../../assets/imgs/kasper-site.png")),
  new SiteClass("eleven eleventh", require("../../assets/imgs/6.jpg")),
  new SiteClass("frego", require("../../assets/imgs/frego-site.png")),
];
//"https://elzero.org/"
