import { BasePageComponents } from "../components/index.js";

export class Basepage {
  constructor() {
    this.basePageComponents = new BasePageComponents();
  }

  async open() {
    await browser.url("https://trello.com/");
  }
}
