import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero with Drupal content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1, h2').first()).toContainText(/Baked Fresh|Golden Crust/)
    await expect(page).toHaveTitle(/Golden Crust Bakery/)
  })

  test('displays stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('500+')).toBeVisible()
    await expect(page.getByText('Items Baked Daily')).toBeVisible()
  })

  test('has working navigation links', async ({ page }) => {
    await page.goto('/')
    const menuLink = page.getByRole('navigation').getByRole('link', { name: 'Menu Items' })
    await expect(menuLink).toBeVisible()
    await menuLink.click()
    await expect(page).toHaveURL('/menu')
  })
})

test.describe('Menu Page', () => {
  test('displays menu items from Drupal', async ({ page }) => {
    await page.goto('/menu')
    await expect(page).toHaveTitle(/Menu.*Golden Crust/)
    await expect(page.getByText('Country Sourdough Loaf')).toBeVisible()
    await expect(page.getByText('Classic Butter Croissant')).toBeVisible()
    await expect(page.getByText('Dark Chocolate Layer Cake')).toBeVisible()
  })

  test('shows prices on menu items', async ({ page }) => {
    await page.goto('/menu')
    await expect(page.getByText('$8.50')).toBeVisible()
    await expect(page.getByText('$4.50')).toBeVisible()
  })

  test('menu item links to detail page', async ({ page }) => {
    await page.goto('/menu')
    const detailLink = page.getByRole('link', { name: /View details/ }).first()
    await expect(detailLink).toBeVisible()
  })
})

test.describe('Specials Page', () => {
  test('displays specials from Drupal', async ({ page }) => {
    await page.goto('/specials')
    await expect(page).toHaveTitle(/Specials.*Golden Crust/)
    await expect(page.getByText('Lemon Lavender Scones', { exact: true })).toBeVisible()
    await expect(page.getByText("Mother's Day Celebration Cake", { exact: true })).toBeVisible()
    await expect(page.getByText('Friday Night Sourdough Pizza', { exact: true })).toBeVisible()
  })

  test('shows prices on specials', async ({ page }) => {
    await page.goto('/specials')
    await expect(page.getByText('$4.00')).toBeVisible()
  })
})

test.describe('Detail Pages', () => {
  test('about page renders from Drupal', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About Flour & Fold')
  })
})

test.describe('Navigation', () => {
  test('header is present on all pages', async ({ page }) => {
    for (const path of ['/', '/menu', '/specials']) {
      await page.goto(path)
      await expect(page.getByText('Golden Crust Bakery').first()).toBeVisible()
    }
  })

  test('footer is present on homepage', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('© 2026 Golden Crust Bakery')).toBeVisible()
  })
})
