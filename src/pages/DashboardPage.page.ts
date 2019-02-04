import { browser, by ,element} from 'protractor';
import { BasePage } from './Basepage.page';

export class DashboardPage extends BasePage {

    private angularInfo = by.partialLinkText('na stronę');
    private debuggingPageOne = by.partialLinkText('Debugging page');
    
    async clickAngularInfo(): Promise<void> {
        await element(this.angularInfo).click();
    }

    async clickDebuggingPageOne(): Promise<void> {
        await element(this.debuggingPageOne).click();
    }
}
