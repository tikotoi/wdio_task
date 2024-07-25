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
      listTitle: "//h2[text()='Test Cases']",
      cardValue: "[data-testid='list-card-composer-textarea']",
      addCardBtn: "//button[text()='Add card']",
      cardTitle: "//a[text()='A new card']",
      filterBtn: "//div[text()='Filters']",
      filterInput: "//input[@placeholder='Enter a keyword…']",
      filter:
        "//span[@aria-label='Color: bold red, title: “Urgent”' and @data-color='red_dark' and @data-testid='card-label']",
      filteredCard: "//p[text()='2 cards match filters']",
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
}
