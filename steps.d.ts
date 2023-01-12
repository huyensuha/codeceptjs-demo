/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type homePage = typeof import('./pages/home');
type loginPage = typeof import('./pages/login');
type basePage = typeof import('./commons/base');
type customHelper = typeof import('./commons/CustomHelper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, loginPage: loginPage, basePage: basePage, customHelper: customHelper }
  interface Methods extends PlaywrightTs { }
  interface I extends ReturnType<steps_file> { }
  interface I extends WithTranslation<Methods> { }
  namespace Translation {
    interface Actions { }
  }
}
