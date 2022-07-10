const Intern = require('../lib/Intern')

 test('creates an intern object', () => {
    const intern = new Intern('Cesar', 1, 'cesar@gmail.com', 'Colorado State University')

    expect(intern.school) .toEqual(expect.any(String));
 });

 test('gets Intern school', () => {
   const intern = new Intern('Cesar', 1, 'cesar@gmail.com', 'Colorado State University')

   expect(intern.getSchool()).toEqual(expect.any(String));
});

test('gets intern role', () => {
   const intern = new Intern('Cesar', 1, 'cesar@gmail.com', 'Colorado State University')

   expect(intern.getRole()).toEqual('Intern');
});