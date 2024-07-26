import { Basepage } from "../page/base.page.js";
const basepage = new Basepage();

//User logs in successfully
export const userlogInSuccessfully = async () => {
  await basepage.open();
  await basepage.TrelloComponents.item("logIn").waitForDisplayed();
  await basepage.TrelloComponents.item("logIn").click();
  await basepage.TrelloComponents.item("userName").setValue("wdiotask@gmail.com");
  await basepage.TrelloComponents.item("continueBtn").click();
  await basepage.TrelloComponents.item("password").waitForDisplayed();
  await basepage.TrelloComponents.item("password").setValue("11112222==");
  await basepage.TrelloComponents.item("logInBtn").click();
  const accountTitle = await basepage.TrelloComponents.item("accountInfo");
  await expect(accountTitle).toHaveAttribute("title", "Wdio Task (wdiotask)");
};

// User update profile information
export const userUpdateProfileInfo = async () => {
  await basepage.TrelloComponents.item("account").waitForDisplayed();
  await basepage.TrelloComponents.item("account").click();
  await basepage.TrelloComponents.item("profile").click();
  await basepage.TrelloComponents.item("bio").setValue("WDIO Practical Task _ Tinatin Abuladze");
  await basepage.TrelloComponents.item("saveBtn").click();
  await basepage.TrelloComponents.item("saveText").isDisplayed();
  const bioInfo = await basepage.TrelloComponents.item("bio").getText();
  await expect(bioInfo).toEqual("WDIO Practical Task _ Tinatin Abuladze");
};

//User creates a new board
export const userCreatesNewBoard = async () => {
  const boardName = basepage.TrelloComponents.generateTitle("board");
  await basepage.TrelloComponents.item("logo").click()
  await basepage.TrelloComponents.item("newBoard").waitForDisplayed();
  await basepage.TrelloComponents.item("newBoard").click();
  await basepage.TrelloComponents.item("boardTitle").waitForDisplayed();
  await basepage.TrelloComponents.item("boardTitle").setValue(boardName);
  await basepage.TrelloComponents.item("createBtn").click();
  await expect(browser).toHaveTitle(new RegExp(`^${boardName.trim()}\\s*\\|\\s*Trello$`));
}

//User searches for a board
export const userSearchForBoard = async () => {
  await basepage.TrelloComponents.item("search").waitForDisplayed();
  await basepage.TrelloComponents.item("search").click();
  await basepage.TrelloComponents.item("searchInput").setValue("Example test case");
  await basepage.TrelloComponents.item("searchResult").click();
  await browser.waitUntil(async function () {
      return (await browser.getTitle()) === "Example test case | Trello";
    });
}

//User creates new lists on a board
export const userCreatesNewList = async () => {
  const listTitle = basepage.TrelloComponents.generateTitle("list");
  await basepage.TrelloComponents.item("addList").click();
  await basepage.TrelloComponents.item("listValue").setValue(listTitle);
  await basepage.TrelloComponents.item("addListBtn").click();
  const listTitleText = await basepage.TrelloComponents.getListByTitle(listTitle).getText();
  await expect(listTitleText).toEqual(listTitle);
  const listTitleDisplay = await basepage.TrelloComponents.getListByTitle(listTitle);
  await expect(listTitleDisplay).toBeDisplayed();
}

//User creates a new card in a list
export const userCreatesNewCard = async () => {
  const cardName = basepage.TrelloComponents.generateTitle("card");
  await basepage.TrelloComponents.addNewCard().click();
  await basepage.TrelloComponents.item("cardValue").setValue(cardName);
  await basepage.TrelloComponents.item("addCardBtn").click();
  const cardNameText = await basepage.TrelloComponents.getCardByName(cardName).getText();
  await expect(cardNameText).toEqual(cardName);
  const cardNameDisplay = await basepage.TrelloComponents.getCardByName(cardName);
  await expect(cardNameDisplay).toBeDisplayed();
}

//User filtering of cards by label
export const userFilteringCardByLabel = async () => {
  await basepage.TrelloComponents.item("filterBtn").click();
  await basepage.TrelloComponents.item("filterInput").setValue("Urgent");
  await basepage.TrelloComponents.item("filter").click();
  await Promise.all(basepage.TrelloComponents.urgentCards.map(async card => {
    const isDisplayed = await card.isDisplayed();
    expect(isDisplayed).toBe(true);
  }));
  await Promise.all(basepage.TrelloComponents.nonUrgentCards.map(async card => {
    const isDisplayed = await card.isDisplayed();
    expect(isDisplayed).toBe(false);
  }));
}

//User changes workspace visibility
export const userChangesVisibility = async () => {
  await basepage.TrelloComponents.item("visibilityBtn").click();
  await basepage.TrelloComponents.item("private").click();
  const svgPath = await basepage.TrelloComponents.item("checkmarkSvg");
  await expect(svgPath).toHaveAttribute("d");
}

//User changes board to table format
export const userChangeBoardToTable = async () => {
  await basepage.TrelloComponents.item("tableBtn").click();
  await expect(browser).toHaveUrlContaining("table");
}