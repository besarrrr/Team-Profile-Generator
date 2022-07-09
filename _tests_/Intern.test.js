const Intern = require('../lib/Intern')


test('creates an intern object', () => {
    const intern = new Intern('')

    expect(intern.name).toBe('');
    expect(intern.id).toBe('');
    expect(intern.email).toBe('');
    expect(intern.school).toBe('');
    
 });