const shuffle = require("../src/shuffle");
const bots = require("../src/botsData");
const result = shuffle(bots);

//confirm that any object is in what is returned in shuffle (which should be "result" which is an array of robots)
const checkRobot = {
  "id": 8
}; 

  test('not null', () => {
    expect(result).not.toBeNull()
  });

  test('Return non-empty array', () => {
    expect(result).not.toHaveLength(0);
});

test('Contains "Crowbar" in object properties', () => {
  expect(result.some(obj => Object.values(obj).includes("Crowbar"))).toBe(true);
})


  test('Contains "Id" in object key', () => {
    expect(result.some(obj => Object.keys(obj).includes("id"))).toBe(true);
  });
  



