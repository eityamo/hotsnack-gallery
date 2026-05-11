import { test, expect } from "@playwright/test";

test("トップページが表示される", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("HOTSNACK GALLERY");
  await expect(page.locator("text=美術館に入る")).toBeVisible();
});

test("商品詳細ページが表示される", async ({ page }) => {
  await page.goto("/hotsnack/l456071_5");
  await expect(page.locator("text=評価額")).toBeVisible();
});

test("ランキングページが表示される", async ({ page }) => {
  await page.goto("/categories");
  await expect(page.locator("text=RANKING")).toBeVisible();
});

test("API: 全件取得", async ({ request }) => {
  const response = await request.get("/api/v1/hotsnacks");
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.length).toBeGreaterThan(0);
});

test("API: ランダム取得", async ({ request }) => {
  const response = await request.get("/api/v1/random");
  expect(response.ok()).toBeTruthy();
  const uuid = await response.json();
  expect(uuid).toBeTruthy();
});
