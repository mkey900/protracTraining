import { browser, by ,element} from 'protractor';
import { BasePage } from './Basepage.page';

export class LoginPage extends BasePage {

    private url = 'http://utsoft.pl/TrainingProtractor/#/login';
    private registerButton = by.css('[data-test=rejestracja]');
    private loginMail = by.model('login.email');
    private loginPassword = by.model('login.password');
    private loginButton = by.buttonText('Zaloguj');


    private get() {
        browser.driver.navigate().to(this.url);
    }

    constructor() {
        super();
        this.get();
    }

    async login() {
        await element(this.loginMail).sendKeys("mail@mail.pl");
        await element(this.loginPassword).sendKeys("pass123");
        await element(this.loginButton).click();
    }

    async clickRegisterButton() : Promise<void> {
        await element(this.registerButton).click();
    }
}
