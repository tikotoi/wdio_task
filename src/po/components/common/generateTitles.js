export class GenerateRandomTitles {
  generateRandomString() {
    return (Math.random() + 1).toString(36).substring(5);
  }

  generateTitle(type) {
    if (type !== "list" && type !== "card" && type !== "board") {
      throw new Error(`Invalid ${type}. Use 'list' or 'card' or 'board'`);
    }
    return `${
      type.charAt(0).toUpperCase() + type.slice(1)
    }_${this.generateRandomString()}`;
  }
}
