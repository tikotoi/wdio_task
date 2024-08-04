import {
  BoardHeader,
  BoardCanvas,
  HeaderComponent,
  GenerateRandomTitles,
} from "../components/index.js";

export class BoardPage {
  constructor() {
    this.headerComponent = new HeaderComponent();
    this.boardHeader = new BoardHeader();
    this.boardCanvas = new BoardCanvas();
    this.generateRandomTitles = new GenerateRandomTitles();
  }
}
