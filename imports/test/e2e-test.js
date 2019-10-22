const puppeteer = require('puppeteer');
const appUrlBase = 'http://localhost:3000'
const routes = {
public: {
      login: `${appUrlBase}/login`,
      redRoom: `${appUrlBase}/red`,
   },
};
let browser
let page

beforeAll(async () => {
  // launch browser 
  browser = await puppeteer.launch(
    {
      headless: false, // headless mode set to false so browser opens up with visual feedback
      slowMo: 50, // how slow actions should be
    }
  )
  // creates a new page in the opened browser   
  page = await browser.newPage()
})
describe('Login', () => {
  test('users can login', async () => {
    await page.goto(routes.public.login);
    await page.waitForSelector('#email');

    await page.click('input[name=email]')
    await page.type('input[name=email]', 'stadnyk.yuri@gmail.com')
    await page.click('input[name=password]')
    await page.type('input[name=password]', '12345')
    await page.click('button[type=submit]')
    await page.waitForSelector('.messages')
  }, 15000);
});
describe('Write message', () => {
  test('users can write and submit the message', async () => {
    await page.waitForSelector('.messages');
    const amountOfmessages = await page.$eval('#messageBox > ul', e => e.childElementCount); // selector children
    await page.click('input[type=text]')
    await page.type('input[type=text]', 'Test text!')
    await page.keyboard.press('Enter');
    await page.waitForSelector('#messageBox');
    const amountAfterSubmit = await page.$eval('#messageBox > ul', e => e.childElementCount); // selector children
    expect(amountOfmessages + 1).toEqual(amountAfterSubmit);
  }, 150000);
});
describe('Logout', () => {
  test('users can log out', async () => {
    await page.waitForSelector('.messages');
    await page.$eval('.right', e => e.children[2].children[0].click()); // selector children temp1.children[2].children.click()
    await page.waitForSelector('.video');
  }, 150000);
});

// This function occurs after the result of each tests, it closes the browser
afterAll(() => {
  if (browser) {
    browser.close()
  }
})