require("ts-node/register")
import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: 'tests/*.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium'
    }
  },
  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/steps.js'
  },
  include: {
    "I": "./steps_file",
    "homePage": "./pages/home.ts",
    "loginPage": "./pages/login.ts",
    "basePage": "./commons/base.ts",
    "customHelper": "./commons/CustomHelper.ts",
  },
  name: 'debug',
  fullPromiseBased: true
}