const shuffle = require("../src/shuffle");

//confirm that any object is in what is returned in shuffle (which should be "result" which is an array of robots)
const checkRobot = {
  id: 8
}; 

  test('not null', () => {
    expect(shuffle).not.toBeNull()
  });
  test('Contains string', () => {
    expect(shuffle).toContain('Crowbar');
  });

  test('Contains object', () => {
    expect(shuffle).toMatchObject(checkRobot);
  });
  



