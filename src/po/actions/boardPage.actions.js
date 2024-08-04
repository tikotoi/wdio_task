import {pages} from '../page/index.js';
import { assert, expect, should } from "chai";
should();

//User searches for a board
export const userSearchForBoard = async () => {
  await pages("boardPage").headerComponent.item("search").waitForDisplayed();
  await pages("boardPage").headerComponent.item("search").click();
  await pages("boardPage").headerComponent.item("searchInput").setValue("Example test case");
  await pages("boardPage").headerComponent.item("searchResult").click();
  const title = await browser.getTitle();
  assert.equal(title, "Example test case | Trello", `The board hasn't been found`);
}

//User creates new lists on a board
export const userCreatesNewList = async () => {
  const listTitle = pages("boardPage").generateRandomTitles.generateTitle("list");
  await pages("boardPage").boardCanvas.item("addList").click();
  await pages("boardPage").boardCanvas.item("listValue").setValue(listTitle);
  await pages("boardPage").boardCanvas.item("addListBtn").click();
  const listTitleText = await pages("boardPage").boardCanvas.getListByTitle(listTitle).getText();
  expect(listTitleText).to.equal(listTitle);
  const listTitleDisplay = await pages("boardPage").boardCanvas.getListByTitle(listTitle).isDisplayed();
  expect(listTitleDisplay, `List with title - "${listTitle}" isn't displayed`).to.be.true;
}

//User creates a new card in a list
export const userCreatesNewCard = async () => {
  const cardName = pages("boardPage").generateRandomTitles.generateTitle("card");
  await pages("boardPage").boardCanvas.addNewCard().click();
  await pages("boardPage").boardCanvas.item("cardValue").setValue(cardName);
  await pages("boardPage").boardCanvas.item("addCardBtn").click();
  const cardNameText = await pages("boardPage").boardCanvas.getCardByName(cardName).getText();
  expect(cardNameText).to.equal(cardName);
  const cardNameDisplay = await pages("boardPage").boardCanvas.getCardByName(cardName).isDisplayed();
  expect(cardNameDisplay, `Card with name - "${cardName}" isn't displayed`).to.be.true;
}

//User filtering of cards by label
export const userFilteringCardByLabel = async () => {
  await pages("boardPage").boardHeader.item("filterBtn").click();
  await pages("boardPage").boardHeader.item("filterInput").setValue("Urgent");
  await pages("boardPage").boardHeader.item("filter").click();
  await Promise.all(pages("boardPage").boardCanvas.urgentCards.map(async card => {
    const isDisplayed = await card.isDisplayed();
    assert.isTrue(isDisplayed, `Urgent cards are not displayed`);
  }));
  await Promise.all(pages("boardPage").boardCanvas.nonUrgentCards.map(async card => {
    const isDisplayed = await card.isDisplayed();
    assert.isFalse(isDisplayed, `Urgent cards is displayed, It shoud be non urgent cards`);
  }));
}

//User changes workspace visibility
export const userChangesVisibility = async () => {
  await pages("boardPage").boardHeader.item("visibilityBtn").click();
  await pages("boardPage").boardHeader.item("private").click();
  await pages("boardPage").boardHeader.item("visibilityBtn").click();
  const checkIcon = await pages("boardPage").boardHeader.item("checkIcon");
  expect(checkIcon, `Visibility haven't changed to private`).to.exist;
}

//User changes board to table format
export const userChangeBoardToTable = async () => {
  await pages("boardPage").boardHeader.item("tableBtn").click();
  await pages("boardPage").boardCanvas.item("tableBody").waitForDisplayed();
  const tableBody = await pages("boardPage").boardCanvas.item("tableBody").isDisplayed();
  tableBody.should.equal(true, `Couldn't change the board to table format, you are still on the board`);
}