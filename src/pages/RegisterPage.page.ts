import { browser, by ,element} from 'protractor';
import { BasePage } from './Basepage.page';

export class RegisterPage extends BasePage {

    private emailInput = by.model('signup.email');
    private passwordInput = by.name('password');
    private confPasswordInput = by.model('signup.password2');
    private nameInput = by.model('signup.name');
    private phoneInput = by.name('phone');
    private addressInput = by.model('signup.address');
    private registerButton = by.css('[type=submit]');
    

    async typeEmail(email: string) : Promise<void> {
        await element(this.emailInput).sendKeys(email);
    }

    async typePassword(email: string) : Promise<void> {
        await element(this.passwordInput).sendKeys(email);
    }

    async confirmPassword(email: string) : Promise<void> {
        await element(this.confPasswordInput).sendKeys(email);
    }

    async typeName(email: string) : Promise<void> {
        await element(this.nameInput).sendKeys(email);
    }

    async typePhone(email: string) : Promise<void> {
        await element(this.phoneInput).sendKeys(email);
    }

    async typeAddress(email: string) : Promise<void> {
        await element(this.addressInput).sendKeys(email);
    }

    async clickRegister(): Promise<void> {
        await element(this.registerButton).click();
    }
}
