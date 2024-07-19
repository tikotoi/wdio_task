import { TrelloComponents } from "../components/components.js";
export class Basepage {
  constructor() {
    this.TrelloComponents = new TrelloComponents();
  }

  async open() {
    await browser.url("https://trello.com/");
  }
}
