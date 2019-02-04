import { browser, by, element } from 'protractor';

xdescribe ('First test', () => {

    it('navigateToPage', async () => {
        browser.get('http://utsoft.pl/TrainingProtractor/#/login');
        expect(await browser.getTitle()).toEqual('Anty Trol app');
    });

    it('navigate to registration page', async () => {
        element(by.css('[data-test=rejestracja]')).click();
        browser.sleep(3000);
    });

    it('fill up application for register', async () => {
        element(by.model('signup.email')).sendKeys('mail@mail.pl');
        element(by.name('password')).sendKeys('password123');
        element(by.model('signup.password2')).sendKeys('password123');
        element(by.model('signup.name')).sendKeys('Marta');
        element(by.name('phone')).sendKeys('123123123');
        element(by.model('signup.address')).sendKeys('Wroclaw');

        browser.sleep(3000);
    });

    it('click register', async () => {
        element(by.model('signup.email')).sendKeys('mail@mail.pl');
        element(by.name('password')).sendKeys('password123');
        element(by.model('signup.password2')).sendKeys('password123');
        element(by.css('[type=submit]')).click();
        browser.sleep(3000);
    });

});
