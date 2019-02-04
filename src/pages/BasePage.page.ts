import { browser } from 'protractor';
import { LoginPage } from './LoginPage.page';

export abstract class BasePage {

    async getPageTtile() : Promise<string> {
        return await browser.getTitle();
    }
}
