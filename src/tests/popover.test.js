const puppeteer = require('puppeteer');

describe('Popover', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:8080'); 
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display the popover on click', async () => {
    await page.click('#popover-trigger');
    await page.waitForSelector('#popover-container.show');
    const popoverRect = await page.evaluate(() => {
      return document.getElementById('popover-container').getBoundingClientRect();
    });
    expect(popoverRect.top).toBeGreaterThan(0);
    expect(popoverRect.left).toBeGreaterThan(0);
  });

  it('should hide the popover on outside click', async () => {
    await page.click('#popover-trigger');
    await page.waitForSelector('#popover-container.show');
    await page.click('body'); 
    await page.waitForSelector('#popover-container:not(.show)');
  });
});