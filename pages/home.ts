import BasePage from "../commons/base";

const { I } = inject();
class HomePage extends BasePage {
  //locators
  readonly url: string = 'https://codingbeautydev.com/';


  goToHomePage(): void {
    I.amOnPage(this.url);

  }

  gotoHomePageAndRefreshMultipleTimes(n: number): void {
    I.amOnPage(this.url);
    I.refreshPageMultipleTimes(n);
  }

}

export = HomePage;

