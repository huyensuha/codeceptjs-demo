import CustomHelper from '../commons/CustomHelper';
import HomePage from '../pages/home';


Feature('home');

let homePage = new HomePage();
let customHelper = new CustomHelper();

Scenario('goto HomePage', async ({ I }) => {

    console.log("Male Name generated: ", customHelper.getRandomName('male'));
    console.log(customHelper.getRandomName('female'));
    console.log(customHelper.getRandomName('gfd'));


    homePage.refreshPageMultipleTimes(10);
    // pause();

});
