import {pages} from './../page/index.js';
import {assert} from "chai";

//User logs in successfully
export const userlogInSuccessfully = async () => {
  await pages("basePage").open();
  await pages("basePage").basePageComponents.item("logIn").waitForDisplayed();
  await pages("basePage").basePageComponents.item("logIn").click();
  await pages("basePage").basePageComponents.item("userName").setValue("wdiotask@gmail.com");
  await pages("basePage").basePageComponents.item("continueBtn").click();
  await pages("basePage").basePageComponents.item("password").waitForDisplayed();
  await pages("basePage").basePageComponents.item("password").setValue("11112222==");
  await pages("basePage").basePageComponents.item("logInBtn").click();
  const accountTitle = await pages("homePage").headerComponent.item("account");
  const titleAttribute = await accountTitle.getAttribute("title");
  assert.equal(titleAttribute, "Wdio Task (wdiotask)", `User hasn't logged in successfully`);
};