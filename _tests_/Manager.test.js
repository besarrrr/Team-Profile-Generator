const Manager = require('../lib/Manager')


test('creates an engineer object', () => {
    const manager = new Manager('')

    expect(manager.name).toBe('');
    expect(manager.id).toBe('');
    expect(manager.email).toBe('');
    expect(manager.officeNumber).toBe('');
    
 });