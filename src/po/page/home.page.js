import {
  HeaderComponent,
  HomeBodyComponents,
  GenerateRandomTitles,
} from "../components/index.js";

export class HomePage {
  constructor() {
    this.headerComponent = new HeaderComponent();
    this.homeBodyComponents = new HomeBodyComponents();
    this.generateRandomTitles = new GenerateRandomTitles();
  }
}
