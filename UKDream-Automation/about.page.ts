import { Page } from '@playwright/test';

export class AboutPage {
  constructor(private readonly page: Page) {}

  get contactUsButton() {
    return this.page.getByRole('button', { name: 'Contact us' });
  }

  get messageField() {
    return this.page.getByRole('textbox', { name: 'Your message' });
  }

  get sendButton() {
    return this.page.getByRole('button', { name: 'Send', exact: true });
  }

  async goto() {
    await this.page.goto('https://app.myukdream.com/about');
  }

  async openContactForm() {
    await this.contactUsButton.click();
  }
}
