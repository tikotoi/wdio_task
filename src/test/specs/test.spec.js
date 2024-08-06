import { pages } from "../../po/page/index.js";

describe("Trello BDD Scenarios", () => {
  before(async () => {
    await pages("basePage").userlogInSuccessfully();
  });

  it("User Update Profile Info", async () => {
    await pages("homePage").userUpdateProfileInfo();
  });

  it("User Creates New Board", async () => {
    await pages("homePage").userCreatesNewBoard();
  });

  it("User Search For Board", async () => {
    await pages("boardPage").userSearchForBoard();
  });

  it("User Creates New List", async () => {
    await pages("boardPage").userCreatesNewList();
  });

  it("User Creates New Card", async () => {
    await pages("boardPage").userCreatesNewCard();
  });

  it("User Filtering Card By Label", async () => {
    await pages("boardPage").userFilteringCardByLabel();
  });

  it("User Changes Visibility", async () => {
    await pages("boardPage").userChangesVisibility();
  });

  it.skip("User Changes Board to Table", async () => {
    await pages("boardPage").userChangeBoardToTable();
  });
});
