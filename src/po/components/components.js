export class TrelloComponents {
  item(name) {
    const selector = {
      logIn: "//a[text()='Log in']",
      userName: "#username",
      continueBtn: "#login-submit",
      password: "#password",
      logInBtn: ".css-178ag6o",
      accountInfo: "[data-testid='header-member-menu-avatar']",
      account: "[data-testid='header-member-menu-avatar']",
      profile: "//span[text()='Profile and visibility']",
      bio: "#bio",
      saveBtn: "//button[text()='Save']",
      saveText: "//span[text()='Saved']",
      logo: "//a[@aria-label='Back to home']",
      newBoard: "//span[text()='Create new board']",
      boardTitle: "[data-testid='create-board-title-input']",
      createBtn: "//button[text()='Create']",
      search: "//input[@placeholder='Search']",
      searchInput: "//input[@placeholder='Search Trello']",
      searchResult: ".css-1a9l0m2",
      addList: "[data-testid='list-composer-button']",
      listValue: "//textarea[@placeholder='Enter list title…']",
      addListBtn: "//button[text()='Add list']",
      cardValue: "[data-testid='list-card-composer-textarea']",
      addCardBtn: "//button[text()='Add card']",
      filterBtn: "//div[text()='Filters']",
      filterInput: "//input[@placeholder='Enter a keyword…']",
      filter:
        "//span[@aria-label='Color: bold red, title: “Urgent”' and @data-color='red_dark' and @data-testid='card-label']",
      visibilityBtn: ".WMmcWJ5gc165zK",
      private: "[data-testid='board-visibility-dropdown-Private']",
      checkmarkSvg: 'svg[role="presentation"] path',
      tableBtn: "//a[@data-testid='view-switcher-button-table']",
    };
    return $(selector[name]);
  }

  addNewCard() {
    return $$("[data-testid='list-add-card-button']")[1];
  }

  getListByTitle(title) {
    return $(`//h2[@data-testid='list-name' and text()='${title}']`);
  }

  getCardByName(name) {
    return $(`//a[@data-testid='card-name' and text()='${name}']`);
  }

  generateRandomString() {
    return (Math.random() + 1).toString(36).substring(5);
  }

  generateTitle(type) {
    if (type !== "list" && type !== "card" && type !== "board") {
      throw new Error(`Invalid ${type}. Use 'list' or 'card' or 'board'`);
    }
    return `${
      type.charAt(0).toUpperCase() + type.slice(1)
    }_${this.generateRandomString()}`;
  }

  parentDivList() {
    return $("//div[@data-testid='list']//h2[text()='Tasks']");
  }

  async getAllCards() {
    return await this.parentDivList.$$("li[data-testid='list-card']");
  }

  urgentCards = [];
  nonUrgentCards = [];

  async checkOnlyUrgentCardsDisplayed() {
    const cards = await this.getAllCards();

    for (const card of cards) {
      const cardText = await card.getText();
      const isDisplayed = await card.isDisplayed();

      if (cardText.includes("Urgent") && isDisplayed) {
        this.urgentCards.push(card);
      } else if (isDisplayed) {
        this.nonUrgentCards.push(card);
      }
    }
  }
}
