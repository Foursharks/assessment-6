const shuffle = require("../src/shuffle");
const {Builder, Browser, By, until, Key} = require('selenium-webdriver'); 
let driver; 

// beforeEach(async () => {
//   driver = await new Builder().forBrowser(Browser.CHROME).build()
// })

// afterEach(async () => {
//   await driver.quit()
// })

describe("shuffle should return an array with 10 objects, and each time the objects will be in random positions in the array, ie object with id 7 will be at index 3, etc", () => {
  test('array contains', () => {
    // await 
    driver.get('http://localhost:8000/public/index.html')
    // await 
    driver.findElement(By.css('button[id="draw"]')).click(); 
    expect(shuffle).toContain('Crowbar'); 
  });
});


// let driver; 

// describe("testing the movies app", ()=> {
//     test("can add a movie", async() => {
//         await driver.get('http://localhost:3000/public/index.html')
//         await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('Casablanca')
//         await driver.findElement(By.css('button[type="submit"]')).click(); 

//         const addedMovie = await driver.wait(until.elementLocated(By.css('#movies-list li label')), 1000);

//         expect(await addedMovie.getText()).toBe("Casablanca");
//     })
// })