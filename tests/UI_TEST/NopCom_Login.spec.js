// @ts-check
const { test, expect } = require('@playwright/test');

//import { test, expect } from '@playwright/test';

test('Weborder Login Functionality @smoke', async ({ page }) => {
  await page.goto('https://admin-demo.nopcommerce.com/login');
  await page.getByLabel('Email:').clear()
  await page.getByLabel('Email:').type('admin@yourstore.com')
  await page.getByLabel('Password:').clear()
  await page.getByLabel('Password:').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator("//a[normalize-space()='Logout']")).toHaveText('Logout');
  //await page.getByRole('link', { name: 'Logout' }).click();

});