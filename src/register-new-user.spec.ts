import { browser, by, element } from 'protractor';
import { LoginPage } from './pages/LoginPage.page';
import { RegisterPage } from './pages/RegisterPage.page';

describe ('Register new user', () => {

    let loginPage : LoginPage;
    let registerPage: RegisterPage;

    const testData = require('./register-data.json');

    beforeAll( async() => {
        browser.manage().window().maximize();
        loginPage = new LoginPage();
        await loginPage.clickRegisterButton();
    });

    afterAll( async () => {
        browser.manage().deleteAllCookies();
        browser.close();
    });

    it('fill up application form', async () => {
        registerPage = new RegisterPage();
        await registerPage.typeEmail(testData.user.email);
        await registerPage.typePassword(testData.user.password);
        await registerPage.confirmPassword(testData.user.password);
        await registerPage.typeName(testData.user.name);
        await registerPage.typePhone(testData.user.phone);
        await registerPage.typeAddress(testData.user.address);

        expect(await registerPage.getPageTtile()).toEqual("Anty Trol app");
    });

    it('complete registration', async () => {
        //registerPage = new RegisterPage();
        //await registerPage.typeEmail(testData.user.email);
        //await registerPage.typePassword(testData.user.password);
        //await registerPage.confirmPassword(testData.user.password);
        
        await registerPage.clickRegister();

        expect(await registerPage.getPageTtile()).toEqual("Anty Trol app");
    });

        

});
