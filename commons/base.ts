
const { I } = inject();
class BasePage {
  refreshPageMultipleTimes(n: number) {
    for (let i = 0; i < n; i++) {
      I.refreshPage();
    }
  }

  navigateTo(): void {
    I.switchToNextTab();
  }



}

export = BasePage;


