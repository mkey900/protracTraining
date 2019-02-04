import { browser, by, element } from 'protractor';
import { LoginPage } from './pages/LoginPage.page';
import { RegisterPage } from './pages/RegisterPage.page';
import { DashboardPage } from './pages/DashboardPage.page';

describe ('Play with locators', () => {

    let loginPage : LoginPage;
    let dashboardPage: DashboardPage;

    const testData = require('./register-data.json');

    beforeAll( async() => {
        browser.manage().window().maximize();
        loginPage = new LoginPage();
        await loginPage.login();
        dashboardPage = new DashboardPage();
        await dashboardPage.clickAngularInfo();
        await dashboardPage.clickDebuggingPageOne();
    });

    afterAll( async () => {
        browser.manage().deleteAllCookies();
        browser.close();
    });

    it('click on first button', async () => {
        const firstButton = element(by.id('exacttext'));
        await firstButton.click();

        expect(await firstButton.getText()).toEqual("Clicked");
        browser.sleep(3000); 
    });

    it('click on second button', async () => {
        const secondButton = element(by.buttonText('Press to start'));
        await secondButton.click();
        expect(await secondButton.getText()).toEqual("Clicked");
        
        browser.sleep(3000);
  
    });

    fit('reapeter - whole sentence', async () => {
        let repeater = element.all(by.repeater('allinfo in days'));
        let repeaterColumn = element.all(by.repeater('allinfo in days').row(0));
        
        expect(await repeater.get(1).getText()).toEqual('Skrót:Wt to Wtorek');
        expect(await repeaterColumn.first().getText()).toEqual('Skrót:Pon to Poniedziałek');
        
        browser.sleep(3000);
  
    });
});
