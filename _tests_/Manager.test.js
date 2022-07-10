const Manager = require('../lib/Manager')


test('creates a Manager object', () => {
    const manager = new Manager('Cesar', 1, 'cesar@gmail.com', 2)

    expect(manager.officeNumber).toEqual(expect.any(Number));
 });

 test('gets Manager role', () => {
    const manager = new Manager('Cesar', 1, 'cesar@gmail.com', 2)
 
    expect(manager.getRole()).toEqual('Manager');
 });