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
};

// User update profile information
export const userUpdateProfileInfo = async () => {
  await basepage.TrelloComponents.item("account").waitForDisplayed();
  await basepage.TrelloComponents.item("account").click();
  await basepage.TrelloComponents.item("profile").click();
  await basepage.TrelloComponents.item("bio").setValue("WDIO Practical Task _ Tinatin Abuladze");
  await basepage.TrelloComponents.item("saveBtn").click();
  await basepage.TrelloComponents.item("saveText").isDisplayed();
};

//User creates a new board
export const userCreatesNewBoard = async () => {
  await basepage.TrelloComponents.item("logo").click()
  await basepage.TrelloComponents.item("newBoard").waitForDisplayed();
  await basepage.TrelloComponents.item("newBoard").click();
  await basepage.TrelloComponents.item("boardTitle").waitForDisplayed();
  await basepage.TrelloComponents.item("boardTitle").setValue("Daily Task");
  await basepage.TrelloComponents.item("createBtn").click();
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
  await basepage.TrelloComponents.item("addList").click();
  await basepage.TrelloComponents.item("listValue").setValue("Test Cases");
  await basepage.TrelloComponents.item("addListBtn").click();
}

//User creates a new card in a list
export const userCreatesNewCard = async () => {
  await basepage.TrelloComponents.addNewCard().click();
  await basepage.TrelloComponents.item("cardValue").setValue("A new card");
  await basepage.TrelloComponents.item("addCardBtn").click();
}

//User filtering of cards by label
export const userFilteringCardByLabel = async () => {
  await basepage.TrelloComponents.item("filterBtn").click();
  await basepage.TrelloComponents.item("filterInput").setValue("Urgent");
  await basepage.TrelloComponents.item("filter").click();  
}

//User changes workspace visibility
export const userChangesVisibility = async () => {
  await basepage.TrelloComponents.item("visibilityBtn").click();
  await basepage.TrelloComponents.item("private").click();
  const svgPath = await basepage.TrelloComponents.item("checkmarkSvg");
  expect(svgPath).toHaveAttribute("d");
}