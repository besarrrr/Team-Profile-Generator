const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('Cesar', 1, 'cesar@gmail.com', 'Besarrrr')

    expect(engineer.github) .toEqual(expect.any(String));
 });

 test('gets Engineer github', () => {
    const engineer = new Engineer('Cesar', 1, 'cesar@gmail.com', 'Besarrrr')

    expect(engineer.getGithub()).toEqual(expect.any(String));
 });

 test('gets Engineer role', () => {
    const engineer = new Engineer('Cesar', 1, 'cesar@gmail.com', 'Besarrrr')

    expect(engineer.getRole()).toEqual('Engineer');
 });