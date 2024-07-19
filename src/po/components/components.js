export class TrelloComponents {
  item(name) {
    const selector = {
      logIn: "//a[text()='Log in']",
      userName: "#username",
      continueBtn: "#login-submit",
      password: "#password",
      logInBtn: ".css-178ag6o",
      account: ".B1uWdim9Jd0dJ9",
      profile: "//span[text()='Profile and visibility']",
      bio: "#bio",
      saveBtn: "//button[text()='Save']",
      saveText: ".QMKgZFIlTLiEJN",
      logo: ".qsCZSrobO7JoSv",
      newBoard: "//span[text()='Create new board']",
      boardTitle: "label>input",
      createBtn: "//button[text()='Create']",
      search: ".css-1xtgxff",
      searchInput: ".css-1yvayd3",
      searchResult: ".css-1a9l0m2",
      addList: "//button[text()='Add another list']",
      listValue: ".oe8RymzptORQ7h",
      addListBtn: "//button[text()='Add list']",
      cardValue: ".qJv26NWQGVKzI9",
      addCardBtn: "//button[text()='Add card']",
      filterBtn: ".PqTwU_wwUxQy6s",
      filterInput: "//input[@placeholder='Enter a keyword…']",
      filter:
        "//span[@aria-label='Color: bold red, title: “Urgent”' and @data-color='red_dark' and @data-testid='card-label']",
      visibilityBtn: ".WMmcWJ5gc165zK",
      private: ".gJDsPins_eYkBM",
      checkmarkSvg: 'svg[role="presentation"] path',
    };
    return $(selector[name]);
  }

  addNewCard() {
    return $$(".IapUGb_Cq2VzSr")[1];
  }
}
