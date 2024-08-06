import {pages} from './../page/index.js';
import { expect, should } from "chai";
should();

// User update profile information
export const userUpdateProfileInfo = async () => {
  await pages("homePage").headerComponent.item("account").waitForDisplayed();
  await pages("homePage").headerComponent.item("account").click();
  await pages("homePage").headerComponent.item("profile").click();
  await pages("homePage").homeBodyComponents.item("bio").setValue("WDIO Practical Task _ Tinatin Abuladze");
  await pages("homePage").homeBodyComponents.item("saveBtn").click();
  await pages("homePage").homeBodyComponents.item("saveText").isDisplayed();
  const bioInfo = await pages("homePage").homeBodyComponents.item("bio").getText();
  bioInfo.should.equal("WDIO Practical Task _ Tinatin Abuladze", `Profile information hasn't been updated`);
};

//User creates a new board
export const userCreatesNewBoard = async () => {
  const boardName = pages("homePage").generateRandomTitles.generateTitle("board");
  await pages("homePage").headerComponent.item("logo").click()
  await pages("homePage").homeBodyComponents.item("newBoard").waitForDisplayed();
  await pages("homePage").homeBodyComponents.item("newBoard").click();
  await pages("homePage").homeBodyComponents.item("boardTitle").waitForDisplayed();
  await pages("homePage").homeBodyComponents.item("boardTitle").setValue(boardName);
  await pages("homePage").homeBodyComponents.item("createBtn").click();
  const boardNameDisplay = await pages("boardPage").boardHeader.item("boardNameDisplay").getText();
  expect(boardNameDisplay, `A new board name ${boardNameDisplay} isn't equal to ${boardName}`).to.equal(boardName);
}