import { test, expect } from "@fixtures/pages.fixtures";
import { LoginPage } from "@pages/login/login.page";
import { registerUser } from "../../lib/datafactory/register";

test("login without page object", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await page.locator('[data-test="nav-sign-in"]').click();

  await page.locator('[data-test="email"]').fill("customer@practicesoftwaretesting.com");
  await page.locator('[data-test="password"]').fill("welcome01"); 
  await page.locator('[data-test="login-submit"]').click();

  await expect(page.locator('[data-test="nav-menu"]')).toContainText("Jane Doe");
  await expect(page.locator('[data-test="page-title"]')).toContainText("My account");
});

test("login with page object", async ({ page }) => {
  const email = "customer@practicesoftwaretesting.com";
  const password = "welcome01";

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(email, password);

  await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");
  await expect(page.getByTestId("page-title")).toContainText("My account");
});

test("login with newly registered user", async ({ page, request }) => {
  const email = `test${Date.now()}@testington.com`;
  const password = "SHIm49*@KLUH";

  const response = await registerUser(request, { email, password });
  expect(response.status()).toBe(201);

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(email, password);

  await expect(page.getByTestId("nav-menu")).toContainText("Todd Dodd");
  await expect(page.getByTestId("page-title")).toContainText("My account");
});

test("login with fixture", async ({ page, loginPage, request }) => {
  const email = `test${Date.now()}@testington.com`;
  const password = "SHIm49*@KLUH";

  const response = await registerUser(request, { email, password });
  expect(response.status()).toBe(201);

  await loginPage.goto();
  await loginPage.login(email, password);

  await expect(page.getByTestId("nav-menu")).toContainText("Todd Dodd");
  await expect(page.getByTestId("page-title")).toContainText("My account");
});