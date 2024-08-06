import {
  userlogInSuccessfully,
  userUpdateProfileInfo,
  userCreatesNewBoard,
  userSearchForBoard,
  userCreatesNewList,
  userCreatesNewCard,
  userFilteringCardByLabel,
  userChangesVisibility,
  userChangeBoardToTable,
} from "../../po/actions/index.js";

describe("Trello BDD Scenarios", () => {
  before(async () => {
    await userlogInSuccessfully();
  });

  it("User Update Profile Info", async () => {
    await userUpdateProfileInfo();
  });

  it("User Creates New Board", async () => {
    await userCreatesNewBoard();
  });

  it("User Search For Board", async () => {
    await userSearchForBoard();
  });

  it("User Creates New List", async () => {
    await userCreatesNewList();
  });

  it("User Creates New Card", async () => {
    await userCreatesNewCard();
  });

  it("User Filtering Card By Label", async () => {
    await userFilteringCardByLabel();
  });

  it("User Changes Visibility", async () => {
    await userChangesVisibility();
  });

  it.skip("User Changes Board to Table", async () => {
    await userChangeBoardToTable();
  });
});
