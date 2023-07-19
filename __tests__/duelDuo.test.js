const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});

//check if index.html has an id

test("index.html see-all btton is present", async () => {
    await driver.get("http://localhost:8000");
    const buttonId = await driver.findElement(By.id("see-all"));
    expect(buttonId).not.toBeNull();
});

test("clicking draw button displays choices div", async () => {
    await driver.get("http://localhost:8000");
    let drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click()
    let choicesElement = await driver.findElement(By.id("choices"));
    let isDisplayed = await choicesElement.isDisplayed();
    expect(isDisplayed).toBeTrue();
  });
  