const puppeteer= require('puppeteer');

const launchBrowser = async () => {
  const url = 'https://api.ipify.org'
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()

  await page.goto(url)

  // loaded page 
  // const result = await page.evaluate(() => {

  // })

  setTimeout(() => {
    browser.close();
  }, 3000);

}


launchBrowser()