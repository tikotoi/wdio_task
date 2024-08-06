import {
  BoardHeader,
  BoardCanvas,
  HeaderComponent,
  RandomTitleGenerator,
} from "../components/index.js";

import { assert, expect, should } from "chai";
should();

export class BoardPage {
  constructor() {
    this.headerComponent = new HeaderComponent();
    this.boardHeader = new BoardHeader();
    this.boardCanvas = new BoardCanvas();
  }

  //User searches for a board
async userSearchForBoard () {
  await this.headerComponent.item("search").waitForDisplayed();
  await this.headerComponent.item("search").click();
  await this.headerComponent.item("searchInput").setValue("Example test case");
  await this.headerComponent.item("searchResult").click();
  const title = await browser.getTitle();
  assert.equal(title, "Example test case | Trello", `The board hasn't been found`);
}

//User creates new lists on a board
async userCreatesNewList () {
  const listTitle = RandomTitleGenerator.titleGenerator("list");
  await this.boardCanvas.item("addList").click();
  await this.boardCanvas.item("listValue").setValue(listTitle);
  await this.boardCanvas.item("addListBtn").click();
  const listTitleText = await this.boardCanvas.getListByTitle(listTitle).getText();
  expect(listTitleText).to.equal(listTitle);
  const listTitleDisplay = await this.boardCanvas.getListByTitle(listTitle).isDisplayed();
  expect(listTitleDisplay, `List with title - "${listTitle}" isn't displayed`).to.be.true;
}

//User creates a new card in a list
async userCreatesNewCard () {
  const cardName = RandomTitleGenerator.titleGenerator("card");
  await this.boardCanvas.addNewCard().click();
  await this.boardCanvas.item("cardValue").setValue(cardName);
  await this.boardCanvas.item("addCardBtn").click();
  const cardNameText = await this.boardCanvas.getCardByName(cardName).getText();
  expect(cardNameText).to.equal(cardName);
  const cardNameDisplay = await this.boardCanvas.getCardByName(cardName).isDisplayed();
  expect(cardNameDisplay, `Card with name - "${cardName}" isn't displayed`).to.be.true;
}

//User filtering of cards by label
async userFilteringCardByLabel () {
  await this.boardHeader.item("filterBtn").click();
  await this.boardHeader.item("filterInput").setValue("Urgent");
  await this.boardHeader.item("filter").click();
  await Promise.all(this.boardCanvas.urgentCards.map(async card => {
    const isDisplayed = await card.isDisplayed();
    assert.isTrue(isDisplayed, `Urgent cards are not displayed`);
  }));
  await Promise.all(this.boardCanvas.nonUrgentCards.map(async card => {
    const isDisplayed = await card.isDisplayed();
    assert.isFalse(isDisplayed, `Urgent cards is displayed, It shoud be non urgent cards`);
  }));
}

//User changes workspace visibility
async userChangesVisibility () {
  await this.boardHeader.item("visibilityBtn").click();
  await this.boardHeader.item("private").click();
  await this.boardHeader.item("visibilityBtn").click();
  const checkIcon = await this.boardHeader.item("checkIcon");
  expect(checkIcon, `Visibility haven't changed to private`).to.exist;
}

//User changes board to table format
async userChangeBoardToTable () {
  await this.boardHeader.item("tableBtn").click();
  await this.boardCanvas.item("tableBody").waitForDisplayed();
  const tableBody = await this.boardCanvas.item("tableBody").isDisplayed();
  tableBody.should.equal(true, `Couldn't change the board to table format, you are still on the board`);
}
}
