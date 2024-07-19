import {
  userlogInSuccessfully,
  userUpdateProfileInfo,
  userCreatesNewBoard,
  userSearchForBoard,
  userCreatesNewList,
  userCreatesNewCard,
  userFilteringCardByLabel,
  userChangesVisibility,
} from "../../po/actions/scenarios.actions.js";

describe("Trello BDD Scenarios", () => {
  it("Trello tests", async () => {
    await userlogInSuccessfully();
    await userUpdateProfileInfo();
    await userCreatesNewBoard();
    await userSearchForBoard();
    await userCreatesNewList();
    await userCreatesNewCard();
    await userFilteringCardByLabel();
    await userChangesVisibility();
  });
});
