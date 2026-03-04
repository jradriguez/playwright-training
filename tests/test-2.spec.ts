import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://practicesoftwaretesting.com/');
  await page.getByTestId('nav-sign-in').click();
  await page.getByTestId('register-link').click();
  await page.getByTestId('first-name').click();
  await page.getByTestId('first-name').fill('Todd');
  await page.getByTestId('first-name').press('Tab');
  await page.getByTestId('last-name').fill('Dodd');
  await page.getByTestId('last-name').press('Tab');
  await page.getByTestId('dob').fill('1995-10-01');
  await page.getByTestId('dob').press('Tab');
  await page.getByTestId('street').fill('123 Main street');
  await page.getByTestId('street').press('Tab');
  await page.getByTestId('postal_code').fill('12345');
  await page.getByTestId('postal_code').press('Tab');
  await page.getByTestId('city').fill('Nashvillington');
  await page.getByTestId('state').fill('TN');
  await page.getByTestId('country').selectOption('US');
  await page.getByTestId('phone').fill('5555555555');
  await page.getByTestId('email').fill('Todd.Dodd359@testington.com');
  await page.getByTestId('password').fill('SHIm49*@KLUH');
  await page.getByTestId('register-submit').click();
});