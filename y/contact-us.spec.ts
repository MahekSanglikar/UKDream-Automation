import { expect, test } from '@playwright/test';
import { AboutPage } from '../UKDream-Automation/about.page';

test.describe('Contact us form (TC-NEW-02)', () => {
  test.beforeEach(async ({ page }) => {
    const aboutPage = new AboutPage(page);

    await aboutPage.goto();
    await expect(
      page.getByRole('heading', { name: 'Who we are, and why you can trust us' }),
    ).toBeVisible();
    await aboutPage.openContactForm();
    await expect(aboutPage.messageField).toBeVisible();
  });

  test('keeps Send disabled when the message is empty', async ({ page }) => {
    const aboutPage = new AboutPage(page);

    await expect(aboutPage.sendButton).toBeDisabled();
  });

  test('enables Send after a message is entered without submitting', async ({ page }) => {
    const aboutPage = new AboutPage(page);

    await aboutPage.messageField.fill('Test message for required-field validation.');

    await expect(aboutPage.sendButton).toBeEnabled();
    await expect(page).toHaveURL(/\/about$/);
  });
});
