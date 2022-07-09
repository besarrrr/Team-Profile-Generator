const Engineer = require('../lib/Engineer')


test('creates an engineer object', () => {
    const engineer = new Engineer('')

    expect(engineer.name).toBe('');
    expect(engineer.id).toBe('');
    expect(engineer.email).toBe('');
    expect(engineer.github).toBe('');
    
 });